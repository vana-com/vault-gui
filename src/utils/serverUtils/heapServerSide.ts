import axios from "axios";

import config from "src/config";

const { HEAP_API_URL, HEAP_APP_ID } = config;

const heapFetch = async (endpoint: string, body: any) => {
  try {
    await axios.post(`${HEAP_API_URL}${endpoint}`, body);
  } catch (e) {
    console.error("Unable to call Heap API", e);
  }
};

/**
 * Sends heap events from the server to Heap.
 *
 * @param identity
 * @param eventName
 * @param properties
 */
const trackEventToCallInServer = async (
  identity: string,
  eventName: string,
  properties?: { [key: string]: string },
) => {
  const body = {
    app_id: HEAP_APP_ID,
    identity,
    event: eventName,
    properties: properties || {},
  };

  await heapFetch("/track", body);
};

/**
 * Associates properties to a user in heap, called on the server
 *
 * @param identity
 * @param properties
 */
const addAccountPropsToCallInServer = async (
  identity: string,
  properties: { [key: string]: string },
) => {
  const body = {
    app_id: HEAP_APP_ID,
    account_id: identity,
    properties: properties || {},
  };

  await heapFetch("/add_account_properties", body);
};

export { addAccountPropsToCallInServer, trackEventToCallInServer };
