import axios from "axios";

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

export { heapAddAccountPropsServerSide, heapTrackServerSide };
