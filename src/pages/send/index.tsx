import { useAtom } from "jotai";
import { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import { useEffect, useRef, useState } from "react";

import { Flex, Login, TitleAndMetaTags } from "src/components";
import {
  FocusStack,
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  VaultSharePage,
} from "src/components/VaultShare";
import { web3AuthUserInfoAtom } from "src/state";
// import { runDataQueryPipeline } from "src/utils";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const workerRef = useRef<Worker>();

  const dummySQLQuery = "select * from instagram_interests";
  const testAccessor = "Dall•e";
  const testAccessDomain = "openai.com";

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);

    console.log('sharing...')

    workerRef.current?.postMessage({ query: dummySQLQuery, dataUrl: "../../joe2.zip.enc" });
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
    // Preload the worker script
    workerRef.current = new Worker(new URL('../../workers/sender.ts', import.meta.url));

    // Listen for messages from the worker
    workerRef.current.onmessage = (event: MessageEvent) => {
      const { data } = event;
      console.log("worker message", data);

      // If it's a data message, send the data to the underlying website
      // and terminate the worker
      if (data?.done) {
        console.log("worker done");
        workerRef?.current?.terminate();
      }
    };
  }, []);

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
