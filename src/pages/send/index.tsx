import { useAtom } from "jotai";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

import { web3AuthUserInfoAtom } from "src/state";
// import { runDataQueryPipeline } from "src/utils";

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [hasUserAcceptedSharingRequest, setHasUserAcceptedSharingRequest] =
    useState(false);

  const workerRef = useRef<Worker>();

  const dummySQLQuery = "select * from instagram_interests";

  const onDataRequestApproval = async () => {
    setHasUserAcceptedSharingRequest(true);

    console.log('sharing...')

    workerRef.current?.postMessage({ query: dummySQLQuery, dataUrl: "../../joe.zip.enc" });
  };

  if (!web3AuthUserInfo) {
    // TODO: Have user go through login flow
  }

  if (hasUserAcceptedSharingRequest) {
    <div>Sending your data... Cool animation</div>;
  }

  useEffect(() => {
    // Set the window context 
    const w = window;


    // Preload the worker script
    workerRef.current = new Worker(new URL('../../workers/sender.ts', import.meta.url));

    // Listen for messages from the worker
    workerRef.current.onmessage = (event: MessageEvent) => {
      const { data } = event;
      console.log("worker message:", data);

      // If it's a data message, send the data to the underlying website
      // and terminate the worker
      if (data?.type === 'data' && data?.done) {
        console.log("worker done | data:", JSON.stringify(data));
        // workerRef?.current?.terminate();
        w.opener.postMessage(JSON.stringify(data), '*');
      }
    };
  }, []);

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
