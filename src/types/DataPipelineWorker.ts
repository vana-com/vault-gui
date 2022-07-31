enum MessageType {
  UPDATE = "update",
  ERROR = "error",
  DATA = "data",
}

enum Stage {
  FETCH_DATA = "FETCH_DATA",
  DECRYPTED_DATA = "DECRYPTED_DATA",
  EXTRACTED_DATA = "EXTRACTED_DATA",
  QUERY_DATA = "QUERY_DATA",
}

interface Message {
  type: MessageType;
  done: boolean;
  payload: any;
}

export { MessageType, Stage };
export type { Message };
