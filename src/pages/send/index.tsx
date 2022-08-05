import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { PageVault, Spinner } from "src/components";
import { AuthenticatedPage } from "src/components/AuthenticatedPage";
import { useUserContext } from "src/components/UserAccess/UserContext";
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
import { ShareUiStatus } from "src/types";
import * as dataPipelineWorker from "src/types/DataPipelineWorker";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const router = useRouter();
  const { user, hasuraToken, walletProvider } = useUserContext();
  const [userHasAcceptedSharingRequest, setUserHasAcceptedSharingRequest] =
    useState(false);
  const [shareStatus, setShareStatus] = useState(
    dataPipelineWorker.Status.IDLE,
  );
  const [updateStatus, setUpdateStatus] = useState(
    dataPipelineWorker.Stage.FETCH_DATA,
  );
  const [uiStatus, setUiStatus] = useState(ShareUiStatus.HASURA_IS_LOADING);

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
   * queryString: The query to be executed on the data service (sql: select * from posts)
   */
  const { appName, serviceName, queryString } = router.query;

  // Make it human readable again
  const prettyAppName = decodeURI(appName as string).replace(`-`, ` `);

  // normalize service name
  const normalizedServiceName = ((serviceName as string) ?? "").toLowerCase();

  // TODO: @joe - Clean up query to prevent sql injection
  const cleanQueryString = decodeURI(queryString as string);

  // TODO: @joe - load url from window.origin?
  // const accessingDomain = "openai.com";

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
    // The order of these if statements is important!
    if (userHasAcceptedSharingRequest) {
      setUiStatus(ShareUiStatus.USER_HAS_ACCEPTED);
    } else if (!user) {
      setUiStatus(ShareUiStatus.USER_IS_NOT_LOGGED_IN);
    } else if (user && isUserModulesDataLoading) {
      setUiStatus(ShareUiStatus.HASURA_IS_LOADING);
    } else if (user && selectedModule.length === 0) {
      setUiStatus(ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA);
    } else if (user && selectedModule[0] && !userHasAcceptedSharingRequest) {
      setUiStatus(ShareUiStatus.USER_IS_READY_TO_ACCEPT);
    }
  }, [
    user,
    isUserModulesDataLoading,
    selectedModule,
    userHasAcceptedSharingRequest,
  ]);
  console.log("uiStatus", uiStatus);

  const fetchSignedUrl = async (token: string | null, userModuleId: string) => {
    if (!token) {
      throw new Error(`Failed to fetch signed url: hasuraToken missing`);
    }

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

    const userModuleId = selectedModule[0].id;
    const signedUrl = await fetchSignedUrl(hasuraToken, userModuleId);

    // TODO: fix race condition where dangerouslyGetPrivateKey is not available
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const dangerousPrivateKey =
      await walletProvider?.dangerouslyGetPrivateKey();

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
    setShareStatus(dataPipelineWorker.Status.RESOLVED);

    // This is the "final" message -- the data payload
    console.log("worker done | data:", JSON.stringify(data));

    // Send the data to the "parent" window
    // TODO: @joe / @kahtaf - change to only send to the parent, rather than globally
    window.opener.postMessage(JSON.stringify(data), "*");

    // Allow time to show success message before we close the window
    setTimeout(() => {
      closePopup(self);
    }, 3 * 1000);
  };

  const handleErrorMessage = async (data: dataPipelineWorker.Message) => {
    // Something definitely went wrong, gracefully show errors to the user
    setShareStatus(dataPipelineWorker.Status.REJECTED);
    console.log("worker error | data:", data?.payload?.error);
  };

  return (
    <AuthenticatedPage>
      <PageVault>
        {/* These 2 component take uiStatus and handle their own internal UI */}
        <VaultSharePageTitle uiStatus={uiStatus} />
        <VaultSharePageWithStatus
          // accessingDomain={accessingDomain}
          appName={prettyAppName}
          uiStatus={uiStatus}
        >
          {/* SERVER DATA IS LOADING */}
          {uiStatus === ShareUiStatus.HASURA_IS_LOADING && (
            <FocusStack tw="min-h-[268px] items-center justify-center">
              <Spinner />
            </FocusStack>
          )}

          {/* NO USER MODULE DATA */}
          {uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA && (
            <NoModuleMessage
              serviceName={serviceName as string}
              handleClick={() => closePopup(window)}
            />
          )}

          {/* READY TO ACCEPT */}
          {uiStatus === ShareUiStatus.USER_IS_READY_TO_ACCEPT && (
            <PermissionContract
              onAccept={onDataRequestApproval}
              onDeny={() => closePopup(window)}
            >
              <PermissionList query={cleanQueryString} />
            </PermissionContract>
          )}

          {/* ACCEPTED, RUN QUERY */}
          {uiStatus === ShareUiStatus.USER_HAS_ACCEPTED && (
            <SendStatus status={shareStatus} stage={updateStatus} />
          )}
        </VaultSharePageWithStatus>
      </PageVault>
    </AuthenticatedPage>
  );
};

export default SendPage;
