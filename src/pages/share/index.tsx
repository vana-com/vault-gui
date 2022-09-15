import type { QueryResult } from "@corsali/userdata-extractor";
import { NextPage } from "next";
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
import { heapTrackServerSide, openInNewTab } from "src/utils";
import {
  decryptData,
  extractData,
  fetchZipFromUrl,
  PipelineParams,
  queryData,
} from "src/utils/pipeline";

const { HEAP_EVENTS } = config;

interface ShareParams {
  appName: string; // The name of "client" that is requesting data (helloworld-gui)
  service: string; // The name of the data service that is being requested (instagram)
  queryString: string; // The query to be executed on the data service (sql: select * from posts)
  requestor: string; // The domain of the app which started the share request
}

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const { user, hasuraToken, walletProvider } = useUserContext();
  const [userHasAcceptedSharingRequest, setUserHasAcceptedSharingRequest] =
    useState(false);
  const [shareStatus, setShareStatus] = useState(DataPipeline.Status.IDLE);
  const [updateStatus, setUpdateStatus] = useState(
    DataPipeline.Stage.FETCH_DATA,
  );
  const [uiStatus, setUiStatus] = useState(
    ShareUiStatus.SHARE_REQUEST_RECEIVED,
  );
  const [shareParams, setShareParams] = useState<ShareParams | null>(null);
  const windowRef = useRef<Window>();

  /**
   * Create the worker once the client loaded the page and sets up the event listener
   */
  useEffect(() => {
    windowRef.current = window;

    window.onmessage = (event) => {
      try {
        const messageJson = JSON.parse(event.data);
        if (
          messageJson?.messageType ===
          DataPipeline.VaultMessageType.SHARE_REQUEST_INITIATED
        ) {
          // New share request received
          const { appName, service, queryString } = messageJson?.payload ?? {};
          setShareParams({
            appName,
            service: service?.toLowerCase(),
            queryString,
            requestor: event.origin,
          });

          // Send acknowledge back to requestor
          window.opener.postMessage(
            JSON.stringify({
              messageType: DataPipeline.VaultMessageType.SHARE_REQUEST_RECEIVED,
            }),
            event.origin,
          );
        }
      } catch (e) {
        console.warn("Unable to parse message for Vault.");
      }
    };
  }, []);

  const { data: userModulesData, loading: isUserModulesDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const selectedModule = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) =>
          userModule.module.name.toLowerCase() === shareParams?.service,
      )
    : [];

  /**
   * Set the UI status for the page
   */
  useEffect(() => {
    // The order of these if statements is important!
    if (!shareParams) {
      setUiStatus(ShareUiStatus.SHARE_REQUEST_RECEIVED);
    } else if (userHasAcceptedSharingRequest) {
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
    shareParams,
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
    const payloadToSend: DataPipeline.VaultMessage = {
      messageType: DataPipeline.VaultMessageType.SHARE_RESPONSE_SUCCESSFUL,
      payload,
      user: {
        id: user?.id,
        email: user?.emailAddress,
        name: user?.name,
      },
    };

    if (!windowRef?.current) return;

    // Send the data to the requestor window
    windowRef.current.opener?.postMessage(
      JSON.stringify(payloadToSend),
      shareParams?.requestor,
    );

    // Allow time to show success message before we close the window
    setTimeout(() => {
      if (windowRef?.current) {
        closePopup(windowRef.current);
      }
    }, 2 * 1000);
  };

  const beginDataPipeline = async (params: PipelineParams) => {
    console.log("DataPipeline started");

    // UI: Pending State
    setShareStatus(DataPipeline.Status.PENDING);

    try {
      const file = await fetchZipFromUrl(params.dataUrl);
      setUpdateStatus(DataPipeline.Stage.FETCH_DATA);

      const userSecret = user?.userSupplementary?.userSecret;
      if (!userSecret) {
        throw new Error("User secret is not available.");
      }
      const signUserSecretMessage =
        config.encryptionKeySignatureMessage.replace("###", userSecret);
      const signedSecret = await walletProvider?.signMessage(
        signUserSecretMessage,
      );
      const decrypted = await decryptData(file, signedSecret);
      setUpdateStatus(DataPipeline.Stage.DECRYPTED_DATA);

      const extracted = await extractData(decrypted, params.serviceName);
      setUpdateStatus(DataPipeline.Stage.EXTRACTED_DATA);

      const queried = await queryData(extracted, params.query);
      setUpdateStatus(DataPipeline.Stage.QUERY_DATA);

      sendPipelinePayload(queried);
    } catch (error: any) {
      console.error("Error sending data to application", error);
      setShareStatus(DataPipeline.Status.REJECTED);

      // Send any error messages back to requestor
      const payloadToSend: DataPipeline.VaultMessage = {
        messageType: DataPipeline.VaultMessageType.SHARE_RESPONSE_ERROR,
        payload: error.message,
      };
      windowRef?.current?.opener?.postMessage(
        JSON.stringify(payloadToSend),
        shareParams?.requestor,
      );
    }
  };

  const fetchSignedUrl = async (token: string | null, userModuleId: string) => {
    if (!token) {
      throw new Error(`Failed to fetch signed url: hasuraToken missing`);
    }

    const result = await fetch("/api/user-data/download-url", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
    if (!userModuleId || !signedUrl || !shareParams) {
      throw new Error("Missing attributes");
    }

    const dataPipelineParams: PipelineParams = {
      query: shareParams.queryString,
      dataUrl: signedUrl,
      serviceName: shareParams.service,
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
      <VaultSharePageWithStatus
        appName={shareParams?.appName as string}
        uiStatus={uiStatus}
      >
        {/* SERVER DATA IS LOADING */}
        {(uiStatus === ShareUiStatus.HASURA_IS_LOADING ||
          uiStatus === ShareUiStatus.SHARE_REQUEST_RECEIVED) && (
          <FocusStack isCentered>
            <Spinner />
          </FocusStack>
        )}

        {/* NO USER MODULE DATA */}
        {uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA && (
          <NoModuleMessage
            serviceName={shareParams?.appName as string}
            handleClick={() => {
              openInNewTab(
                `${config.vanaVaultURL}/store/${shareParams?.service}`,
              );
              closePopup(window);
            }}
          />
        )}

        {/* READY TO ACCEPT */}
        {uiStatus === ShareUiStatus.USER_IS_READY_TO_ACCEPT && (
          <>
            <PermissionList
              query={shareParams?.queryString as string}
              serviceName={shareParams?.service as string}
            />
            <PermissionContract
              onAccept={onDataRequestApproval}
              onDeny={() => {
                heapTrackServerSide(user?.id, HEAP_EVENTS.SHARE_CANCELLED);
                closePopup(window);
              }}
            />
          </>
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
