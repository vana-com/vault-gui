import { useAtom } from "jotai";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Flex, Login, Spinner } from "src/components";
import {
  FocusStack,
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  SendStatus,
  VaultSharePageTitle,
  VaultSharePageWithStatus,
} from "src/components/VaultShare";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import {
  hasuraTokenAtom,
  userAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
} from "src/state";
import { ShareUiStatus } from "src/types";
import * as dataPipelineWorker from "src/types/DataPipelineWorker";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const [hasuraToken] = useAtom(hasuraTokenAtom);
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [web3AuthWalletProvider] = useAtom(web3AuthWalletProviderAtom);
  const [userHasAcceptedSharingRequest, setUserHasAcceptedSharingRequest] =
    useState(false);
  const [shareStatus, setShareStatus] = useState(
    dataPipelineWorker.Status.IDLE,
  );
  const [updateStatus, setUpdateStatus] = useState(
    dataPipelineWorker.Stage.FETCH_DATA,
  );
  const [uiStatus, setUiStatus] = useState(ShareUiStatus.hasuraIsLoading);

  /**
   * Create the worker once the client loaded the page and sets up the event listener
   */
  useEffect(() => {
    // Set the window context
    const w = window;
    // eslint-disable-next-line no-restricted-globals
    const s = self;

    // Preload the worker script
    workerRef.current = new Worker(
      new URL("../../workers/DataPipeline.ts", import.meta.url),
    );

    // Give the "window" context to the listener
    const onMessage = onMessageReceived(w, s);
    workerRef.current.onmessage = (event: MessageEvent) => onMessage(event);
  }, []);

  const workerRef = useRef<Worker>();

  // Get popup's query params
  // TODO: @joe - replace w/ more secure method
  // TODO: @joe - add domain to the query params, for use on UI
  /*
   * appName: The name of "client" that is requesting data (helloworld-gui)
   * serviceName: The name of the data service that is being requested (instagram)
   */
  const { appName, serviceName, queryString } = router.query;

  // Make it human readable again
  const prettyAppName = decodeURI(appName as string).replace(`-`, ` `);

  // normalize service name
  const normalizedServiceName = ((serviceName as string) ?? "").toLowerCase();

  // TODO: @joe - Clean up query to prevent sql injection
  const cleanQueryString = decodeURI(queryString as string);

  // TODO: @joe - load url from window.origin?
  const accessingDomain = "openai.com";

  const { data: userModulesData, loading: isUserModulesDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const selectedModule = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) =>
          userModule.module.name.toLowerCase() === normalizedServiceName,
      )
    : [];


  /**
   * This useEffect is only fired once on page load.
   * It preps the worker to start the data pipeline and hooks up our event listener
   */
  useEffect(() => {
    // Set the window context
    const w = window;
    // eslint-disable-next-line no-restricted-globals
    const s = self;

    // Preload the worker script
    workerRef.current = new Worker(
      new URL("../../workers/DataPipeline.ts", import.meta.url),
    );

    // Give the "window" context to the listener
    const onMessage = onMessageReceived(w, s);
    workerRef.current.onmessage = (event: MessageEvent) => onMessage(event);
  }, []);

  /**
   * Set the UI status for the page
   */
  useEffect(() => {
    if (!web3AuthUserInfo) {
      setUiStatus(ShareUiStatus.userIsNotLoggedIn);
    }
    if (isUserModulesDataLoading) {
      setUiStatus(ShareUiStatus.hasuraIsLoading);
    }
    if (!selectedModule && !selectedModule[0]) {
      setUiStatus(ShareUiStatus.userDoesNotHaveModuleData);
    }
    if (web3AuthUserInfo && selectedModule[0]) {
      setUiStatus(ShareUiStatus.userIsReadyToAccept);
    }
    if (userHasAcceptedSharingRequest) {
      setUiStatus(ShareUiStatus.userHasAcceptedRequest);
    }

    
  }, [
    web3AuthUserInfo,
    isUserModulesDataLoading,
    selectedModule,
    userHasAcceptedSharingRequest,
  ]);
  console.log("uiStatus", uiStatus);

  const fetchSignedUrl = async (token: string, userModuleId: string) => {
    const result = await fetch("/api/user-data/download-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hasuraToken: token,
        userModuleId,
      }),
    });

    if (result.status !== 200) {
      throw new Error(`Failed to fetch signed url: ${result.status}`);
    }

    const parsed = await result.json();

    if (!parsed?.success)
      throw new Error(`Failed to fetch signed url: ${result.status}`);
    else return parsed.signedUrl;
  };

  const onDataRequestApproval = async () => {
    setUserHasAcceptedSharingRequest(true);

    console.log("Starting the sharing process...");

    const dangerousPrivateKey =
      await web3AuthWalletProvider?.dangerouslyGetPrivateKey();
    const userModuleId = selectedModule[0].id;
    const signedUrl = await fetchSignedUrl(hasuraToken, userModuleId);

    // Check all attributes are present
    if (!userModuleId || !signedUrl || !dangerousPrivateKey) {
      throw new Error("Missing attributes");
    }

    // Sends data to the DataPipeline (Worker)
    console.log("Sending data to the worker...");
    workerRef.current?.postMessage({
      queries: [cleanQueryString],
      dataUrl: signedUrl,
      decryptionKey: dangerousPrivateKey,
      serviceName: normalizedServiceName,
    });
  };

  const onMessageReceived =
    (window: Window, self: Window) => async (event: MessageEvent) => {
      const data = event.data as dataPipelineWorker.Message;

      console.log("DataPipeline message:", data);

      // Handle each message type differently
      switch (data.type) {
        // Message: data is being sent (pending)
        case dataPipelineWorker.MessageType.UPDATE:
          await handleUpdateMessage(data);
          setShareStatus(dataPipelineWorker.Status.PENDING);
          break;
        // Message: data sending resolved
        case dataPipelineWorker.MessageType.DATA:
          await handleDataMessage(data, window, self);
          break;
        // Message: data sending failed
        case dataPipelineWorker.MessageType.ERROR:
          await handleErrorMessage(data);
          break;
        default:
          console.log(`Unknown message type: ${data?.type}`);
      }
    };

  /**
   * Closes the popup window
   * @param self window ref
   * @returns nothing
   */
  const closePopup = (self: Window) => self.close();

  const handleUpdateMessage = async (data: dataPipelineWorker.Message) => {
    // Worker not (quite) done yet, these are just "status" reports
    switch (data.payload.stage) {
      case dataPipelineWorker.Stage.FETCH_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.FETCH_DATA);
        break;
      case dataPipelineWorker.Stage.DECRYPTED_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.DECRYPTED_DATA);
        break;
      case dataPipelineWorker.Stage.EXTRACTED_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.EXTRACTED_DATA);
        break;
      case dataPipelineWorker.Stage.QUERY_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.QUERY_DATA);
        break;
      default:
        console.log(`Unknown stage: ${data?.payload?.stage}`);
    }
  };

  const handleDataMessage = async (
    data: dataPipelineWorker.Message,
    window: Window,
    self: Window,
  ) => {
    // This is the "final" message -- the data payload
    console.log("worker done | data:", JSON.stringify(data));

    // Send the data to the "parent" window
    // TODO: @joe / @kahtaf - change to only send to the parent, rather than globally
    window.opener.postMessage(JSON.stringify(data), "*");

    // Show success message before we close the window
    setTimeout(() => {
      setShareStatus(dataPipelineWorker.Status.RESOLVED);
      closePopup(self);
    }, 5 * 1000);
  };

  const handleErrorMessage = async (data: dataPipelineWorker.Message) => {
    // Something definitely went wrong, gracefully show errors to the user
    setShareStatus(dataPipelineWorker.Status.REJECTED);
    console.log("worker error | data:", data?.payload?.error);
  };

  return (
    <>
      {/* These 2 component take uiStatus and handle their own internal UI */}
      <VaultSharePageTitle uiStatus={uiStatus} />
      <VaultSharePageWithStatus
        accessingDomain={accessingDomain}
        appName={prettyAppName}
        uiStatus={uiStatus}
      >
        {/* TECH DEBT, LEAVE AS IS!: must be always available in order to run the useEffects within the component. Only renders to the DOM when !web3AuthUserInfo. We'll refactor useEffect vs Markup in Login soon. */}
        <Login />

        {/* NOT LOGGED IN */}
        {uiStatus === ShareUiStatus.userIsNotLoggedIn && (
          <FocusStack>
            <Flex tw="p-8 w-full items-center justify-center">
              <Login />
            </Flex>
          </FocusStack>
        )}

        {/* SERVER DATA IS LOADING */}
        {uiStatus === ShareUiStatus.hasuraIsLoading && (
          <FocusStack tw="min-h-[268px] items-center justify-center">
            <Spinner />
          </FocusStack>
        )}

        {/* NO USER MODULE DATA */}
        {uiStatus === ShareUiStatus.userDoesNotHaveModuleData && (
          <NoModuleMessage handleClick={() => closePopup(window)} />
        )}

        {/* READY TO ACCEPT */}
        {uiStatus === ShareUiStatus.userIsReadyToAccept && (
          <PermissionContract
            onAccept={onDataRequestApproval}
            onDeny={() => closePopup(window)}
          >
            <PermissionList query={cleanQueryString} />
          </PermissionContract>
        )}

        {/* ACCEPTED, RUN QUERY */}
        {uiStatus === ShareUiStatus.userHasAcceptedRequest && (
          <SendStatus status={shareStatus} stage={updateStatus} />
        )}
      </VaultSharePageWithStatus>
    </>
  );
};

export default SendPage;
