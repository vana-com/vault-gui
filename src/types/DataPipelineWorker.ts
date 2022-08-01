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

enum Status {
  IDLE = "IDLE",
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  REJECTED = "REJECTED",
}

interface Message {
  type: MessageType;
  done: boolean;
  payload: any;
}

export { MessageType, Stage, Status };
export type { Message };
