import axios from "axios";

import config from "../config";

const { HEAP_API_URL, HEAP_APP_ID } = config;

/**
 * Methods to use for sending events to Heap on the Server Side
 */

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

/**
 * Similar to heapTrack method but uses /api/d to send the event server-side event instead
 * instead of client side. This method should be called in the frontend.
 *
 * @param userId
 * @param eventName
 * @param properties Properties to associate with the event
 */
const heapTrackServerSide = async (
  userId: string,
  eventName: string,
  properties?: { [key: string]: string },
): Promise<void> => {
  try {
    const body = {
      userId,
      eventName,
      properties: properties || {},
      isAddAccountProps: false,
    };

    axios.post("/api/d", body);
  } catch (e) {
    console.error("Unable to send event to Heap", e);
  }
};

/**
 * Similar to heapAddAccountProps method but uses /api/d to send the event server-side event instead
 * instead of client side. This method should be called in the frontend.
 *
 * @param userId ID of the user
 * @param properties Properties to associate with the user
 */
const heapAddAccountPropsServerSide = async (
  userId: string,
  properties: { [key: string]: string },
): Promise<void> => {
  try {
    const body = {
      userId,
      properties,
      isAddAccountProps: true,
    };

    axios.post("/api/d", body);
  } catch (e) {
    console.error("Unable to add account props to Heap", e);
  }
};

export {
  addAccountPropsToCallInServer,
  heapAddAccountPropsServerSide,
  heapTrackServerSide,
  trackEventToCallInServer,
};
