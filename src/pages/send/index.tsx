import { useAtom } from "jotai";
import { NextPage } from "next";
import { useState } from "react";

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
    <div>
      <h1>Do you accept sharing your data</h1>
      <h2>Query: {dummySQLQuery}</h2>
      <button onClick={onDataRequestApproval}>Yes</button>
      <button
        onClick={() => {
          // TODO: close popup or prompt the user to close popup
          console.log("hi");
        }}
      >
        No
      </button>
    </div>
  );
};

export default SendPage;
