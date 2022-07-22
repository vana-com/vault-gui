// https://developers.heap.io/reference/client-side-apis-overview
interface Heap {
  track: (event: string, properties?: object) => void;
  identify: (identity: string) => void;
  resetIdentity: () => void;
  addUserProperties: (properties: object) => void;
  addEventProperties: (properties: object) => void;
  removeEventProperty: (property: string) => void;
  clearEventProperties: () => void;
  appid: string;
  userId: string;
  identity: string | null;
  config: any;
}

declare const heap: Heap;
