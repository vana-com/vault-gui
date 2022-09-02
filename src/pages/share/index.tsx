import type { QueryResult } from "@corsali/userdata-extractor";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Spinner, useUserContext } from "src/components";
import {
  FocusStack,
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  SharingStatus,
  VaultSharePageTitle,
  VaultSharePageWithStatus,
} from "src/components/VaultShare";
import config from "src/config";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import { ShareUiStatus } from "src/types";
import * as DataPipeline from "src/types/DataPipeline";
import { heapTrackServerSide } from "src/utils";
import {
  decryptData,
  extractData,
  fetchZipFromUrl,
  PipelineParams,
  queryData,
} from "src/utils/pipeline";

const { HEAP_EVENTS } = config;

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const router = useRouter();
  const { user, hasuraToken, walletProvider } = useUserContext();
  const [userHasAcceptedSharingRequest, setUserHasAcceptedSharingRequest] =
    useState(false);
  const [shareStatus, setShareStatus] = useState(DataPipeline.Status.IDLE);
  const [updateStatus, setUpdateStatus] = useState(
    DataPipeline.Stage.FETCH_DATA,
  );
  const [uiStatus, setUiStatus] = useState(ShareUiStatus.HASURA_IS_LOADING);

  const windowRef = useRef<Window>();

  /**
   * Create the worker once the client loaded the page and sets up the event listener
   */
  useEffect(() => {
    windowRef.current = window;
  }, []);

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

  const sendPipelinePayload = (payload: QueryResult[]) => {
    // UI: Resolved/Finish state
    setShareStatus(DataPipeline.Status.RESOLVED);

    // Construct the payload to be sent to the client
    const payloadToSend = {
      done: true,
      payload: {
        rows: payload,
      },
    };

    // This is the "final" message -- the data payload
    console.log("worker done | data:", JSON.stringify(payloadToSend));

    // Get the window context safely
    const _window = windowRef.current;

    // Double sanity check that the window (and it's opener) is available
    if (!_window || !_window.opener) return;

    // Send the data to the "parent" window
    // TODO: @joe / @kahtaf - change to only send to the parent, rather than globally
    _window.opener.postMessage(JSON.stringify(payloadToSend), "*");

    // Allow time to show success message before we close the window
    setTimeout(() => {
      closePopup(_window);
    }, 3 * 1000);
  };

  const beginDataPipeline = async (params: PipelineParams) => {
    console.log("DataPipeline started");

    // UI: Pending State
    setShareStatus(DataPipeline.Status.PENDING);

    try {
      const { file, encryptedPassword } = await fetchZipFromUrl(params.dataUrl);
      setUpdateStatus(DataPipeline.Stage.FETCH_DATA);
      const plainTextPassword = await walletProvider?.decryptMessage(
        encryptedPassword,
      );
      if (!plainTextPassword) {
        throw new Error("Unable to decrypt encryptedPassword for file.");
      }

      const decrypted = await decryptData(file, plainTextPassword);
      setUpdateStatus(DataPipeline.Stage.DECRYPTED_DATA);

      const extracted = await extractData(decrypted, params.serviceName);
      setUpdateStatus(DataPipeline.Stage.EXTRACTED_DATA);

      const queried = await queryData(extracted, params.query);
      setUpdateStatus(DataPipeline.Stage.QUERY_DATA);

      sendPipelinePayload(queried);
    } catch (error) {
      console.error("Error sending data to application", error);
      setShareStatus(DataPipeline.Status.REJECTED);
    }
  };

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
    heapTrackServerSide(user?.id, HEAP_EVENTS.SHARE_APPROVED);
    setUserHasAcceptedSharingRequest(true);

    console.log("Starting the sharing process...");

    const userModuleId = selectedModule[0].id;
    const signedUrl = await fetchSignedUrl(hasuraToken, userModuleId);

    // Check all attributes are present
    if (!userModuleId || !signedUrl) {
      throw new Error("Missing attributes");
    }

    const dataPipelineParams: PipelineParams = {
      query: cleanQueryString,
      dataUrl: signedUrl,
      serviceName: normalizedServiceName,
    };

    // Starts the data pipeline
    beginDataPipeline(dataPipelineParams);
  };

  /**
   * Closes the popup window
   * @param self window ref
   * @returns nothing
   */
  const closePopup = (self: Window) => self.close();

  return (
    <>
      {/* These 2 component take uiStatus and handle their own internal UI */}
      <VaultSharePageTitle uiStatus={uiStatus} />

      {/* TODO: provide the accessing domain */}
      <VaultSharePageWithStatus appName={prettyAppName} uiStatus={uiStatus}>
        {/* SERVER DATA IS LOADING */}
        {uiStatus === ShareUiStatus.HASURA_IS_LOADING && (
          <FocusStack isCentered withMinHeight>
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
            onDeny={() => {
              heapTrackServerSide(user?.id, HEAP_EVENTS.SHARE_CANCELLED);
              closePopup(window);
            }}
          >
            <PermissionList query={cleanQueryString} />
          </PermissionContract>
        )}

        {/* ACCEPTED, RUN QUERY */}
        {uiStatus === ShareUiStatus.USER_HAS_ACCEPTED && (
          <SharingStatus status={shareStatus} stage={updateStatus} />
        )}
      </VaultSharePageWithStatus>
    </>
  );
};

export default SendPage;
