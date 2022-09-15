enum VaultMessageType {
  SHARE_REQUEST_INITIATED = "SHARE_REQUEST_INITIATED",
  SHARE_REQUEST_RECEIVED = "SHARE_REQUEST_RECEIVED",
  SHARE_RESPONSE_SUCCESSFUL = "SHARE_RESPONSE_SUCCESSFUL",
  SHARE_RESPONSE_ERROR = "SHARE_RESPONSE_ERROR",
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

interface VaultMessage {
  messageType: VaultMessageType;
  payload: any;
  user?: {
    id: string;
    email?: string;
    name?: string;
  };
}

export { Stage, Status, VaultMessageType };
export type { VaultMessage };
