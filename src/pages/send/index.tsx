import { useAtom } from "jotai";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Flex, Login, TitleAndMetaTags } from "src/components";
import {
  FocusStack,
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  VaultSharePage,
} from "src/components/VaultShare";
import {
  useGetUserModulesSubscription,
} from "src/graphql/generated";
import { hasuraTokenAtom, userAtom, web3AuthUserInfoAtom, web3AuthWalletProviderAtom } from "src/state";

import * as dpw from '../../types/DataPipelineWorker';

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const router = useRouter()
  const [user] = useAtom(userAtom);
  const [hasuraToken] = useAtom(hasuraTokenAtom);
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [web3AuthWalletProvider] = useAtom(web3AuthWalletProviderAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const workerRef = useRef<Worker>();

  // Get popup's query params
  // TODO: @joe - replace w/ more secure method
  const { appName, serviceName } = router.query;

  const prettyAppName = decodeURI(appName as string);

  const dummySQLQuery = "SELECT * FROM ads_interests;";
  // TODO: @joe - load url from window.origin?
  const testAccessDomain = "openai.com";

  const { data: userModulesData } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const selectedModule = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) => userModule.module.name === serviceName
      )
    : [];

  const fetchSignedUrl = async (token: string, userModuleId: string) => {
    const { signedUrl } = await fetch('/api/user-data/download-url', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hasuraToken: token,
        userModuleId,
      }),
    }).then((res) => res.json());

    return signedUrl;
  };

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);

    console.log("Starting the sharing process...");

    const dangerousPrivateKey = await web3AuthWalletProvider?.dangerouslyGetPrivateKey();
    const userModuleId = selectedModule[0].id;
    const signedUrl = await fetchSignedUrl(hasuraToken, userModuleId);

    // Sends data to the DataPipeline (Worker)
    console.log("Sending data to the worker...");
    workerRef.current?.postMessage({
      queries: [dummySQLQuery],
      dataUrl: signedUrl,
      decryptionKey: dangerousPrivateKey,
      serviceName: (serviceName as string).toLowerCase(),
    });
  };

  const onMessageReceived = (window: Window, self: Window) => async (event: MessageEvent) => {
    const data = event.data as dpw.Message;
    
    console.log("DataPipeline message:", data);

    // Handle each message type differently
    switch (data.type) {
      case dpw.MessageType.UPDATE:
        await handleUpdateMessage(data);
        break;
      case dpw.MessageType.DATA:
        await handleDataMessage(data, window, self);
        break;
      case dpw.MessageType.ERROR:
        await handleErrorMessage(data);
        break;
      default: console.log(`Unknown message type: ${data?.type}`);
    }
  };

  /**
   * Closes the popup window
   * @param self window ref
   * @returns nothing
   */
  const closePopup = (self: Window) => self.close();

  const handleUpdateMessage = async (data: dpw.Message) => {
    // Worker not (quite) done yet these are just "status" reports
    // TODO: update ui w/ stages here
    switch (data.payload.stage) {
      case dpw.Stage.FETCH_DATA:
        break;
      case dpw.Stage.DECRYPTED_DATA:
        break;
      case dpw.Stage.EXTRACTED_DATA:
        break;
      case dpw.Stage.QUERY_DATA:
        break;
      default: console.log(`Unknown stage: ${data?.payload?.stage}`);
    }
  };

  const handleDataMessage = async (data: dpw.Message, window: Window, self: Window) => {
    // This is the "final" message -- the data payload
    console.log("worker done | data:", JSON.stringify(data));

    // Send the data to the "parent" window
    // TODO: @joe / @kahtaf - change to only send to the parent, rather than globally
    window.opener.postMessage(JSON.stringify(data), "*");

    // TODO: @callum - Do some vudu here before we close the window???
    setTimeout( () => closePopup(self), 1 * 1000);
  };

  const handleErrorMessage = async (data: dpw.Message) => {
    // Something definitely went wrong
    // TODO: gracefully show errors to the user?
    console.log("worker error | data:", data?.payload?.error);
  };

  // STATE TESTS
  // const testUserAvailable = true;
  const testUserWithoutData = false;

  // Login state: prior to authenticated store user
  if (!web3AuthUserInfo) {
    return (
      <>
        <TitleAndMetaTags
          color="black"
          title="Login to share your Vault | Vana"
        />
        <VaultSharePage
          lede="You need to Login to give Vault access"
          accessDomain={testAccessDomain}
        >
          <FocusStack>
            <Flex tw="p-8 w-full items-center justify-center">
              {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
              <Login />
            </Flex>
          </FocusStack>
        </VaultSharePage>
      </>
    );
  }

  // No Module state: Logged-in but without a Module
  if (testUserWithoutData) {
    return (
      <>
        <TitleAndMetaTags color="black" title="Add data to your Vault | Vana" />
        <VaultSharePage
          accessDenied
          accessDomain={testAccessDomain}
          heading="No Vault data"
          lede={`${prettyAppName} can't access any Vault data`}
        >
          <NoModuleMessage />
          {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
          <Login />
        </VaultSharePage>
      </>
    );
  }

  // Confirmed state: sending data
  if (hasUserAcceptedSharingRequest) {
    <div>Sending your data... Cool animation</div>;
  }

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

  // Permissions contract state: requesting permissions
  return (
    <>
      <TitleAndMetaTags color="black" title="Share your Vault data | Vana" />

      {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
      <Login />

      <VaultSharePage
        accessDomain={testAccessDomain}
        lede={`Do you want to give ${prettyAppName} access to your Vault?`}
      >
        <PermissionContract
          onAccept={onDataRequestApproval}
          onDeny={() => {
            // TODO: close popup or prompt the user to close popup
            console.log("close popup");
          }}
        >
          <PermissionList query={dummySQLQuery} />
        </PermissionContract>
      </VaultSharePage>
    </>
  );
};

export default SendPage;
