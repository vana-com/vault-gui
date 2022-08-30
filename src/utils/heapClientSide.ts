/**
 * Methods to use for sending events to Heap on the Client Side
 */

export const heapIdentify = (userId: string) => {
  if (typeof heap === "object") {
    heap?.identify(userId);
  }
};

export const heapAddUserProperties = (properties: object) => {
  if (typeof heap === "object") {
    heap?.addUserProperties(properties);
  }
};

export const heapTrack = (eventName: string, properties?: object) => {
  if (typeof heap === "object") {
    heap?.track(eventName, properties);
  } else {
    console.log(eventName, properties);
  }
};
