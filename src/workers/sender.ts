import { zipToSQLiteInstance } from "@corsali/userdata-extractor"

interface DataMessage {
  query: string;
  dataUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
onmessage = async (event: MessageEvent) => {
  const { data } = event;

  const { query, dataUrl } = data as DataMessage;

  try {

  // Download data
  const file = await fetchData(dataUrl);

  // decrypt
  const decrypted = await decryptData(file, 'secret');

  // Extract
  const extracted = await extractData(decrypted);

  // Run SQL query
  const queried = await queryData(extracted, query);

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
  console.log('using application/zip');
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/zip',
    }
  });
  const blob = await res.blob();
  // const zblob = blob.slice(0, blob.size, "application/zip");
  const file = new File([blob], 'data.zip', {type:  'application/zip'});

  console.log(file);

  postUpdateMessage({
    stage: 'FETCH_DATA',
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
  // TODO: decrypt data
  const decrypted = new File([encryptedFile], 'joe.zip', {type:  'application/x-zip'});;

  postUpdateMessage({
    stage: 'DECRYPTED_DATA',
    message: `Decrypted ${decrypted.name} (${decrypted.size} bytes)`,
  });

  return decrypted;
};

/**
 * Extracts a .zip file into a sqlite database
 * @param data File to extract
 * @returns sqlite database
 */
const extractData = async (data: File) => {

  const extracted = await zipToSQLiteInstance('instagram', data);

  // console.log(await extracted.runQuery('SELECT * FROM ads_interests'))

  postUpdateMessage({
    stage: 'EXTRACTED_DATA',
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
const queryData = async (db: any, query: string) => {

  const rows = await db.runQuery('SELECT * FROM ads_interests')[0].values;


  const flat = rows.map((row: any) => row[0]);
  
  // const rows = ['coffee', 'peets', 'whole foods', 'philz', 'starbucks', 'la columbe', 'dunkin', 'tim hortons', 'mccafe', 'donut king', 'muffin break']

  postUpdateMessage({
    stage: 'QUERY_DATA',
    message: `Queried data with query '${query}' and returned ${rows.length} rows`,
  });

  return flat;
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
  postMessage({
    type: 'update',
    done: false,
    payload: {
      ...message
    },
  });
};

/**
 * Error Message
 * @param error error to send to the main thread
 */
const postErrorMessage = (error: any) => {
  postMessage({
    type: 'error',
    payload: {
      ...error
    },
  });
};

/**
 * Data Message (closing message)
 * @param data data to send to the main thread
 */
const postDataMessage = (data: any) => {
  postMessage({
    type: 'data',
    done: true,
    payload: {
      ...data
    },
  });
};

// Dummy export
export type {}