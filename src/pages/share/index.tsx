import {
  Database,
  extractTablesFromSqlQuery,
  QueryResult,
  ServiceFile,
  zipToSQLiteInstance,
} from "@corsali/userdata-extractor";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Spinner, TitleAndMetaTags, useUserContext } from "src/components";
import {
  FocusStack,
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  SharingStatus,
  VaultSharePageWithStatus,
} from "src/components/VaultShare";
import config from "src/config";
import { Modules, useGetUserModulesSubscription } from "src/graphql/generated";
import {
  SharePipelineProgress,
  ShareStatus,
  ShareUiStatus,
  VaultMessage,
  VaultMessageType,
} from "src/types";
import {
  formatModuleNameForID,
  heapTrackServerSide,
  openInNewTab,
} from "src/utils";
import { decryptFiles, fetchUserData } from "src/utils/dataQueryPipeline";

const { HEAP_EVENTS } = config;

interface ShareParams {
  appName: string; // The name of "client" that is requesting data (helloworld-gui)
  queries: string[]; // The query strings to be executed on the data service (["select * from instagram.post_comments"])
  requestor: string; // The domain of the app which started the share request
}

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const { user, hasuraToken, walletProvider } = useUserContext();
  const [userHasAcceptedSharingRequest, setUserHasAcceptedSharingRequest] =
    useState(false);
  const [shareStatus, setShareStatus] = useState(ShareStatus.IDLE);
  const [updateStatus, setUpdateStatus] = useState(
    SharePipelineProgress.FETCH_DATA,
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
          messageJson?.messageType === VaultMessageType.SHARE_REQUEST_INITIATED
        ) {
          // New share request received
          const { appName, queries } = messageJson?.payload ?? {};
          setShareParams({
            appName,
            queries,
            requestor: event.origin,
          });

          // Send acknowledge back to requestor
          window.opener.postMessage(
            JSON.stringify({
              messageType: VaultMessageType.SHARE_REQUEST_RECEIVED,
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

  const permissionMap = extractTablesFromSqlQuery(shareParams?.queries ?? []);
  const requestedServices = Object.keys(permissionMap); // List of services to query, ex: ["instagram", "facebook"]
  const selectedModules = userModulesData
    ? userModulesData.usersModules.filter((userModule) =>
        requestedServices.includes(
          formatModuleNameForID(userModule.module as Modules),
        ),
      )
    : [];

  // Returns an array of services that the user doesn't have data for
  const getMissingServices = (): string[] => {
    const hasModules =
      selectedModules?.map((um) =>
        formatModuleNameForID(um.module as Modules),
      ) ?? [];
    return requestedServices.filter((s) => !hasModules.includes(s));
  };
  const missingServices = getMissingServices();

  /**
   * Set the UI status for the page
   */
  useEffect(() => {
    // The order of these if statements are important!
    if (!shareParams) {
      setUiStatus(ShareUiStatus.SHARE_REQUEST_RECEIVED);
    } else if (userHasAcceptedSharingRequest) {
      setUiStatus(ShareUiStatus.USER_HAS_ACCEPTED);
    } else if (!user) {
      setUiStatus(ShareUiStatus.USER_IS_NOT_LOGGED_IN);
    } else if (isUserModulesDataLoading) {
      setUiStatus(ShareUiStatus.HASURA_IS_LOADING);
    } else if (missingServices.length !== 0) {
      setUiStatus(ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA);
    } else {
      setUiStatus(ShareUiStatus.USER_IS_READY_TO_ACCEPT);
    }
  }, [
    shareParams,
    user,
    isUserModulesDataLoading,
    selectedModules,
    userHasAcceptedSharingRequest,
  ]);

  const onDataRequestApproval = async () => {
    try {
      heapTrackServerSide(user?.id, HEAP_EVENTS.SHARE_APPROVED);
      setUserHasAcceptedSharingRequest(true);
      setShareStatus(ShareStatus.PENDING);
      console.log("Starting the sharing process...");

      // Download all encrypted files
      const serviceFilesEncrypted: ServiceFile[] = await fetchUserData(
        selectedModules,
        hasuraToken as string,
      );
      setUpdateStatus(SharePipelineProgress.FETCH_DATA);

      // Ensure at least one encrypted file is available
      if (!serviceFilesEncrypted.length) {
        throw new Error("Unable to download user data");
      }

      // Get password from user to decrypt files
      const userSecret = user?.userSupplementary?.userSecret;
      if (!userSecret) {
        throw new Error("User secret is not available.");
      }
      const signUserSecretMessage =
        config.encryptionKeySignatureMessage.replace("###", userSecret);
      const signedSecret = await walletProvider?.signMessage(
        signUserSecretMessage,
      );

      // Decrypt necessary user data files
      const serviceFilesDecrypted = await decryptFiles(
        serviceFilesEncrypted,
        signedSecret as string,
      );
      setUpdateStatus(SharePipelineProgress.DECRYPTED_DATA);

      // Structure data into a database
      const database: Database = await zipToSQLiteInstance(
        serviceFilesDecrypted,
      );
      setUpdateStatus(SharePipelineProgress.EXTRACTED_DATA);

      // Query database
      const queryResults = await database.runQuery(
        shareParams?.queries as string[],
      );
      setUpdateStatus(SharePipelineProgress.QUERY_DATA);

      // Send results back to app
      sendPipelinePayload(queryResults);
    } catch (error: any) {
      console.error("Error sending data to application", error);
      setShareStatus(ShareStatus.REJECTED);
      sendPipelineError(error.message);
    }
  };

  // Send any error messages back to requestor
  const sendPipelineError = (errorMessage: string) => {
    const payloadToSend: VaultMessage = {
      messageType: VaultMessageType.SHARE_RESPONSE_ERROR,
      payload: errorMessage,
    };
    windowRef?.current?.opener?.postMessage(
      JSON.stringify(payloadToSend),
      shareParams?.requestor,
    );
  };

  /**
   * Send results from queried user data back to requesting app
   */
  const sendPipelinePayload = (payload: QueryResult[]) => {
    setShareStatus(ShareStatus.RESOLVED);

    // Construct the payload to be sent to the client
    const payloadToSend: VaultMessage = {
      messageType: VaultMessageType.SHARE_RESPONSE_SUCCESSFUL,
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

  /**
   * Closes the popup window
   * @param self window ref
   * @returns nothing
   */
  const closePopup = (self: Window) => self.close();

  return (
    <>
      {/* These 2 component take uiStatus and handle their own internal UI */}
      {/* <VaultSharePageTitle uiStatus={uiStatus} /> */}
      <TitleAndMetaTags color="black" title="Share your Vault Data | Vana" />

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
        {uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA &&
          missingServices.length > 0 && (
            <NoModuleMessage
              serviceName={missingServices[0]}
              handleClick={() => {
                openInNewTab(`/store/${missingServices[0]}`);
                sendPipelineError(
                  `User does not have data for the following: ${missingServices}`,
                );
                closePopup(window);
              }}
            />
          )}

        {/* READY TO ACCEPT */}
        {uiStatus === ShareUiStatus.USER_IS_READY_TO_ACCEPT && (
          <>
            <PermissionList permissionMap={permissionMap} />
            <PermissionContract
              onAccept={onDataRequestApproval}
              onDeny={() => {
                heapTrackServerSide(user?.id, HEAP_EVENTS.SHARE_CANCELLED);
                sendPipelineError(`User did not approve the share request`);
                closePopup(window);
              }}
            />
          </>
        )}

        {/* ACCEPTED, RUN QUERY */}
        {uiStatus === ShareUiStatus.USER_HAS_ACCEPTED && (
          <SharingStatus
            shareStatus={shareStatus}
            shareProgress={updateStatus}
          />
        )}
      </VaultSharePageWithStatus>
    </>
  );
};

export default SendPage;
