import { useAtom } from "jotai";
import { NextPage } from "next";
import { useState } from "react";
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
import { runDataQueryPipeline } from "src/utils";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const { logIn, loginError, setLoginError } = useLogin();
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const dummySQLQuery = "select * from instagram_interests";
  const testAccessor = "Dall•e";

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);
    const dataToSend = runDataQueryPipeline(dummySQLQuery);
    // TODO: send data to the underlying website
    console.log("dataToSend", dataToSend);
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
