import { zipToSQLiteInstance } from "@corsali/userdata-extractor";

import { Message, MessageType, Stage } from "../types/DataPipelineWorker";
import { decryptFileChaCha20Poly1305 } from "../utils/decryptFileChaCha20Poly1305";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
onmessage = async (event: MessageEvent) => {
  const { data } = event;

  const { queries, dataUrl, decryptionKey, serviceName } = data as DataMessage;

  try {
    // Download data
    const file = await fetchData(dataUrl);

    // decrypt
    const decrypted = await decryptData(file, decryptionKey);

    // Extract
    const extracted = await extractData(decrypted, serviceName);

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
    stage: Stage.FETCH_DATA,
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
    stage: Stage.DECRYPTED_DATA,
    message: `Decrypted ${decrypted.name} (${decrypted.size} bytes)`,
  });

  return decrypted;
};

/**
 * Extracts a .zip file into a sqlite database
 * @param data File to extract
 * @returns sqlite database
 */
const extractData = async (data: File, serviceName: string) => {
  const extracted = await zipToSQLiteInstance(serviceName, data);

  postUpdateMessage({
    stage: Stage.EXTRACTED_DATA,
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
    stage: Stage.QUERY_DATA,
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
  const m: Message = {
    type: MessageType.UPDATE,
    done: false,
    payload: {
      ...message,
    },
  };
  postMessage(m);
};

/**
 * Error Message
 * @param error error to send to the main thread
 */
const postErrorMessage = (error: any) => {
  const m: Message = {
    type: MessageType.ERROR,
    done: false,
    payload: {
      ...error,
    },
  };
  postMessage(m);
};

/**
 * Data Message (closing message)
 * @param data data to send to the main thread
 */
const postDataMessage = (data: any) => {
  const m: Message = {
    type: MessageType.DATA,
    done: true,
    payload: {
      ...data,
    },
  };
  postMessage(m);
};

// Dummy export (DO NOT REMOVE)
export type {};
