import { useAtom } from "jotai";
import { NextPage } from "next";
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
  const [user] = useAtom(userAtom);
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [web3AuthWalletProvider] = useAtom(web3AuthWalletProviderAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const workerRef = useRef<Worker>();

  const dummySQLQuery = "select * from instagram_interests";
  const testAccessor = "Dall•e";
  const testAccessDomain = "openai.com";

  // TODO: See if there is a better way we can grab the urls
  const { data: userModulesData, loading: isDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const instagramModules = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) => userModule.module.name === "Instagram",
      )
    : [];

  // END of TODO

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);

    console.log("Starting the sharing process...");

    const dangerousPrivateKey = await web3AuthWalletProvider?.dangerouslyGetPrivateKey();
    console.log(`dangerousPrivateKey: ${dangerousPrivateKey?.substring(0,4)}*****`);

    const userModuleId = instagramModules[0].id;
    console.log('instagramModules[0].userModuleId: ', userModuleId);

    const { signedUrl } = await fetch('/api/user-data/download-url', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hasuraToken:
        userModuleId,
      }),
    }).then((res) => res.json());

    // Sends data to the DataPipeline (Worker)
    console.log("Sending data to the worker...");
    workerRef.current?.postMessage({
      query: dummySQLQuery,
      dataUrl: signedUrl,
      decryptionKey: dangerousPrivateKey,
    });
  };

  const onMessageReceived = (window: Window, self: Window) => async (event: MessageEvent) => {
    const data = event.data as dpw.Message;
    
    console.log("worker message:", data);

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
      default: console.log(`Unknown message type: ${data.type}`);
    }
  };

  const handleUpdateMessage = async (data: dpw.Message) => {
    // Worker not (quite) done yet these are just "status" reports
    // TODO: update ui w/ stages here
  };

  const handleDataMessage = async (data: dpw.Message, window: Window, self: Window) => {
    // This is the "final" message -- the data payload
    
    console.log("worker done | data:", JSON.stringify(data));
    
    // Send the data to the "parent" window
    // TODO: @joe - change to only send to the parent, rather than globally
    window.opener.postMessage(JSON.stringify(data), "*");

    // TODO: Do some vudu here before we close the window???

    // Close ourselves
    self.close();
  };

  const handleErrorMessage = async (data: dpw.Message) => {
    // Something definitely went wrong
    // TODO: gracefully show errors to the user?
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
          lede={`${testAccessor} can't access any Vault data`}
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
        lede={`Do you want to give ${testAccessor} access to your Vault?`}
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
