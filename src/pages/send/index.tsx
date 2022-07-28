import { useAtom } from "jotai";
import { NextPage } from "next";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Container, TitleAndMetaTags } from "src/components";
import { PermissionContract, PermissionList } from "src/components/VaultShare";
import { web3AuthUserInfoAtom } from "src/state";
import { runDataQueryPipeline } from "src/utils";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const dummySQLQuery = "select * from instagram_interests";

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);
    const dataToSend = runDataQueryPipeline(dummySQLQuery);
    // TODO: send data to the underlying website
    console.log("dataToSend", dataToSend);
  };

  if (!web3AuthUserInfo) {
    // TODO: Have user go through login flow
  }

  if (hasUserAcceptedSharingRequest) {
    <div>Sending your data... Cool animation</div>;
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Send your Vault data | Vana" />

      <div tw="min-h-screen flex items-center justify-center">
        <Container tw="relative" size="lg">
          <PermissionContract
            accessor="Dall•e"
            onAccept={onDataRequestApproval}
            onDeny={() => {
              // TODO: close popup or prompt the user to close popup
              console.log("close popup");
            }}
          >
            <PermissionList query={dummySQLQuery} />
          </PermissionContract>
        </Container>
      </div>
    </>
  );
};

export default SendPage;
