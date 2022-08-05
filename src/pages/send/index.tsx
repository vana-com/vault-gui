import { zipToSQLiteInstance } from "@corsali/userdata-extractor";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { PageVault, Spinner } from "src/components";
import { AuthenticatedPage } from "src/components/AuthenticatedPage";
import { useUserContext } from "src/components/UserAccess/UserContext";
import {
  FocusStack,
  NoModuleMessage,
  PermissionContract,
  PermissionList,
  SendStatus,
  VaultSharePageTitle,
  VaultSharePageWithStatus,
} from "src/components/VaultShare";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import { ShareUiStatus } from "src/types";
import * as dataPipelineWorker from "src/types/DataPipelineWorker";
import { decryptFileChaCha20Poly1305 } from "src/utils/decryptFileChaCha20Poly1305";

interface DataMessage {
  queries: string[];
  dataUrl: string;
  decryptionKey: string;
  serviceName: string;
}
interface SQLiteQueryResult {
  queryString: string;
  queryResult: string[];
}

// Sharing API Page to be opened in 3rd-party website as a popup
const SendPage: NextPage = () => {
  const router = useRouter();
  const { user, hasuraToken, walletProvider } = useUserContext();
  const [userHasAcceptedSharingRequest, setUserHasAcceptedSharingRequest] =
    useState(false);
  const [shareStatus, setShareStatus] = useState(
    dataPipelineWorker.Status.IDLE,
  );
  const [updateStatus, setUpdateStatus] = useState(
    dataPipelineWorker.Stage.FETCH_DATA,
  );
  const [uiStatus, setUiStatus] = useState(ShareUiStatus.HASURA_IS_LOADING);
  const windowRef = useRef<Window>();

  /**
   * Create the worker once the client loaded the page and sets up the event listener
   */
  useEffect(() => {
    // Set the window context
    const w = window;
    // eslint-disable-next-line no-restricted-globals
    // const s = self;

    windowRef.current = w;
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

  const startPipeline = async (data: DataMessage) => {
    const { queries, dataUrl, decryptionKey, serviceName: _serviceName } = data;

    try {
      // Download data
      const file = await fetchData(dataUrl);

      // decrypt
      const decrypted = await decryptData(file, decryptionKey);

      // Extract
      const extracted = await extractData(decrypted, _serviceName);

      // Run SQL query
      const queried = await queryData(extracted, queries);

      // Send data
      sendData(queried);
    } catch (error) {
      postErrorMessage({
        message: error,
      });
    }
  };

  const onDataRequestApproval = async () => {
    setUserHasAcceptedSharingRequest(true);

    console.log("Starting the sharing process...");

    const userModuleId = selectedModule[0].id;
    const signedUrl = await fetchSignedUrl(hasuraToken, userModuleId);

    // TODO: fix race condition where dangerouslyGetPrivateKey is not available
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const dangerousPrivateKey =
      await walletProvider?.dangerouslyGetPrivateKey();

    // Check all attributes are present
    if (!userModuleId || !signedUrl || !dangerousPrivateKey) {
      throw new Error("Missing attributes");
    }

    // call the "old worker" (now in the ui/main thread)
    startPipeline({
      queries: [cleanQueryString],
      dataUrl: signedUrl,
      decryptionKey: dangerousPrivateKey,
      serviceName: normalizedServiceName,
    });
  };

  const onMessageReceived =
    (window: Window, self: Window) =>
    async (data: dataPipelineWorker.Message) => {
      console.log("DataPipeline message:", data);

      // Handle each message type differently
      switch (data.type) {
        // Message: data is being sent (pending)
        case dataPipelineWorker.MessageType.UPDATE:
          await handleUpdateMessage(data);
          setShareStatus(dataPipelineWorker.Status.PENDING);
          break;
        // Message: data sending resolved
        case dataPipelineWorker.MessageType.DATA:
          await handleDataMessage(data, window, self);
          break;
        // Message: data sending failed
        case dataPipelineWorker.MessageType.ERROR:
          await handleErrorMessage(data);
          break;
        default:
          console.log(`Unknown message type: ${data?.type}`);
      }
    };

  /**
   * Closes the popup window
   * @param self window ref
   * @returns nothing
   */
  const closePopup = (self: Window) => self.close();

  const handleUpdateMessage = async (data: dataPipelineWorker.Message) => {
    // Worker not (quite) done yet, these are just "status" reports
    switch (data.payload.stage) {
      case dataPipelineWorker.Stage.FETCH_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.FETCH_DATA);
        break;
      case dataPipelineWorker.Stage.DECRYPTED_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.DECRYPTED_DATA);
        break;
      case dataPipelineWorker.Stage.EXTRACTED_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.EXTRACTED_DATA);
        break;
      case dataPipelineWorker.Stage.QUERY_DATA:
        setUpdateStatus(dataPipelineWorker.Stage.QUERY_DATA);
        break;
      default:
        console.log(`Unknown stage: ${data?.payload?.stage}`);
    }
  };

  const handleDataMessage = async (
    data: dataPipelineWorker.Message,
    window: Window,
    self: Window,
  ) => {
    setShareStatus(dataPipelineWorker.Status.RESOLVED);

    // This is the "final" message -- the data payload
    console.log("worker done | data:", JSON.stringify(data));

    // Send the data to the "parent" window
    // TODO: @joe / @kahtaf - change to only send to the parent, rather than globally
    window.opener.postMessage(JSON.stringify(data), "*");

    // Allow time to show success message before we close the window
    setTimeout(() => {
      closePopup(self);
    }, 3 * 1000);
  };

  const handleErrorMessage = async (data: dataPipelineWorker.Message) => {
    // Something definitely went wrong, gracefully show errors to the user
    setShareStatus(dataPipelineWorker.Status.REJECTED);
    console.log("worker error | data:", data?.payload?.error);
  };

  // TODO: @joe - refactor this, all old worker functions are here:
  /**
   * Fetches data from a url as a file
   * @param url location of data
   * @returns File
   */
  const fetchData = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        Accept: "application/zip",
      },
    });
    const blob = await res.blob();
    const file = new File([blob], "data.zip.enc", { type: "application/zip" });

    console.log(file);

    postUpdateMessage({
      stage: dataPipelineWorker.Stage.FETCH_DATA,
      message: `Downloaded ${file.name} (${file.size} bytes)`,
    });

    return file;
  };

  /**
   * Decrypts a .enc file with a given key
   * @param encryptedFile encrypted file
   * @param key used to decrypt data
   * @returns Unencrypted file (.zip)
   */
  const decryptData = async (encryptedFile: File, key: any) => {
    const decrypted = await decryptFileChaCha20Poly1305(encryptedFile, key);

    if (!decrypted) {
      // Failed to decrypt
      throw new Error("Failed to decrypt data, probably used the wrong key");
    }

    postUpdateMessage({
      stage: dataPipelineWorker.Stage.DECRYPTED_DATA,
      message: `Decrypted ${decrypted.name} (${decrypted.size} bytes)`,
    });

    return decrypted;
  };

  /**
   * Extracts a .zip file into a sqlite database
   * @param data File to extract
   * @returns sqlite database
   */
  const extractData = async (data: File, _serviceName: string) => {
    const extracted = await zipToSQLiteInstance(_serviceName, data, false);

    postUpdateMessage({
      stage: dataPipelineWorker.Stage.EXTRACTED_DATA,
      message: `Extracted data into sqllite db`,
    });

    return extracted;
  };

  /**
   * Runs a query on a sqlite database
   * @param data sqlite database
   * @param query SQL query
   * @returns matching rows
   */
  const queryData = async (db: any, queries: string[]) => {
    const query = queries.join(" ");
    const queryResults: SQLiteQueryResult[] = await db.runQuery(query);

    postUpdateMessage({
      stage: dataPipelineWorker.Stage.QUERY_DATA,
      message: `Queried db with ${queries.length} queries '${query}' and returned ${queryResults.length} results`,
    });

    return queryResults;
  };

  const sendData = (data: any) => {
    postDataMessage({
      rows: data,
    });
  };

  /**
   * Update Message
   * @param message message to send to the main thread
   */
  const postUpdateMessage = (message: any) => {
    const m: dataPipelineWorker.Message = {
      type: dataPipelineWorker.MessageType.UPDATE,
      done: false,
      payload: {
        ...message,
      },
    };
    onMessageReceived(
      windowRef.current as Window,
      windowRef.current as Window,
    )(m);
  };

  /**
   * Error Message
   * @param error error to send to the main thread
   */
  const postErrorMessage = (error: any) => {
    const m: dataPipelineWorker.Message = {
      type: dataPipelineWorker.MessageType.ERROR,
      done: false,
      payload: {
        ...error,
      },
    };
    onMessageReceived(
      windowRef.current as Window,
      windowRef.current as Window,
    )(m);
  };

  /**
   * Data Message (closing message)
   * @param data data to send to the main thread
   */
  const postDataMessage = (data: any) => {
    const m: dataPipelineWorker.Message = {
      type: dataPipelineWorker.MessageType.DATA,
      done: true,
      payload: {
        ...data,
      },
    };
    onMessageReceived(
      windowRef.current as Window,
      windowRef.current as Window,
    )(m);
  };

  return (
    <AuthenticatedPage>
      {/* TODO: Remove PageVault during `/login` page redirect refactor */}
      <PageVault>
        {/* These 2 component take uiStatus and handle their own internal UI */}
        <VaultSharePageTitle uiStatus={uiStatus} />
        <VaultSharePageWithStatus
          // accessingDomain={accessingDomain}
          appName={prettyAppName}
          uiStatus={uiStatus}
        >
          {/* SERVER DATA IS LOADING */}
          {uiStatus === ShareUiStatus.HASURA_IS_LOADING && (
            <FocusStack tw="min-h-[268px] items-center justify-center">
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
              onDeny={() => closePopup(window)}
            >
              <PermissionList query={cleanQueryString} />
            </PermissionContract>
          )}

          {/* ACCEPTED, RUN QUERY */}
          {uiStatus === ShareUiStatus.USER_HAS_ACCEPTED && (
            <SendStatus status={shareStatus} stage={updateStatus} />
          )}
        </VaultSharePageWithStatus>
      </PageVault>
    </AuthenticatedPage>
  );
};

export default SendPage;
