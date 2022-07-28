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
      dataUrl: "https://user-services-data-dev.s3.us-west-1.amazonaws.com/joe.in.nyc_20220701.zip?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICn5Ds3LGZ1EIPOfD%2Bt8fxPec%2Fz%2B9JrB4Pw42F2mpr8yAiB%2FByN2vzb3ILuJNnFUuclQFIMk4da%2B720NuXIRhhqm5SqEAwj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDc4NjgwMTU0MzA0OCIMLGR9W%2BjSudLiPJjkKtgCHPOgtExA%2FeaF9zxpRL%2BD9sdqnq9RpKU13D8rnAECswUZYoEjobU7NHP0QaDo4OXCd%2B12j2s4WjfDI4365xjUblldCHvvpobQzCGikRuJgDkCm5BAc2RmrcuhCBe6Ak4gIRgcCUsRHhFSWR2FNRIwHQYU8csA%2FO8I9akH1XNc455ztyaAzSWNSyZKQ0vS%2F2hRsG9v3Lk%2B9b9IimHPtn%2F6TlXGcPbxDBzOqj%2FPBG%2B4ARypuXwywllJHhq%2BP5zjkWe6ilM2YQytlbxL4YXOQ%2ByLCkqDheWrAF4uanSe1WTU65YoRKc3BKzv9xVuOc3KreU6wPeNpd%2Fwfkd%2F2f%2FMLPyXifThppc4aU0omCbm%2FhyMF7g0lzSDyEuhm2sgURMhzzOmsNWDT8Q5LQqODUxbycejrgTywfudUnG13yV7%2BKrHGPzgu926wfyKdAq6dXLQcbLKZ1mT8cZFP0swu9KLlwY6tALadL5Ew9sLnSmVC3isAl00KT0kV%2FiJQwIaBIxpj%2BZHYEpoq7Fs%2Fmwd3vTyk12H%2FaP1cT%2Ft5vtXkDXz3%2FFepXiwL0B6rUIsScF%2FgrMLZcH3O%2BBtFQDsxBjkuiWFb6IE%2BKk0lbvHmZwjybr3UlWzkf5iYIDzUfr3HKaeJvDOpv%2Bmml1W7YWDksxSfpS6QPXrKNVPhIzSTcLJG2PoEL3fspoOwKMhCsxndsusjStR6z2auN6uzjiSogGlRN5V%2FIApOwEq58eqrwG6jD0JnFidQJQ%2F8zicY1NxvrmAi83h0uGAW%2BsHqReUAzBb0Mxt9y5aXiO9VYJXbbljHaQRPRAhipzrK7dAQNejwh3Jd2X8PXloGr0bgl945b%2FnVcToZbylgQS%2FWwe8A2v9SrRIk1zQACgB5DA1fQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220728T195509Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3OMIGY6EMIHRATYG%2F20220728%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=96193a8ff64dc8628b76eeb7e0c554309826b0fe2961ef9d1c385ac9faf5c9d5",
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
