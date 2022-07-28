import { useAtom } from "jotai";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Flex, Login, TitleAndMetaTags } from "src/components";
import {
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  VaultSharePage,
} from "src/components/VaultShare";
import { useLogin } from "src/hooks";
import { web3AuthUserInfoAtom } from "src/state";
// import { runDataQueryPipeline } from "src/utils";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const { logIn, loginError, setLoginError } = useLogin();
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const workerRef = useRef<Worker>();

  const dummySQLQuery = "select * from instagram_interests";
  const testAccessor = "Dall•e";

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);

    console.log("sharing...");

    workerRef.current?.postMessage({
      query: dummySQLQuery,
      dataUrl: "../../joe.zip.enc",
    });
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
        <VaultSharePage lede="Login to allow Vault access">
          <Flex tw="w-full items-center justify-center">
            <Login
              logIn={logIn}
              loginError={loginError}
              setLoginError={setLoginError}
            />
          </Flex>
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
          heading="No Vault data"
          lede={`${testAccessor} can't access any Vault data`}
        >
          <NoModuleMessage />
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

    // Preload the worker script
    workerRef.current = new Worker(
      new URL("../../workers/sender.ts", import.meta.url),
    );

    // Listen for messages from the worker
    workerRef.current.onmessage = (event: MessageEvent) => {
      const { data } = event;
      console.log("worker message:", data);

      // If it's a data message, send the data to the underlying website
      // and terminate the worker
      if (data?.type === "data" && data?.done) {
        console.log("worker done | data:", JSON.stringify(data));
        // workerRef?.current?.terminate();
        w.opener.postMessage(JSON.stringify(data), "*");
      }
    };
  }, []);

  // Permissions contract state: requesting permissions
  return (
    <>
      <TitleAndMetaTags color="black" title="Share your Vault data | Vana" />
      <PermissionContract
        accessor={testAccessor}
        onAccept={onDataRequestApproval}
        onDeny={() => {
          // TODO: close popup or prompt the user to close popup
          console.log("close popup");
        }}
      >
        <PermissionList query={dummySQLQuery} />
      </PermissionContract>
    </>
  );
};

export default SendPage;
