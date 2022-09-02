import { ModuleName } from "./module";

export interface ShareModule {
  id: string;
  dataModule: ModuleName;
}

// Purposely set to lowercase to match the normalizedServiceName
// in src/pages/share/index
export enum ShareService {
  INSTAGRAM = "instagram",
  // Provide a fallback for tests…
  UNKNOWN = "unknown",
}

export type ShareServiceType = ShareService | string;

export enum ShareKind {
  INSTAGRAM_INTERESTS = "InstagramInterests",
  // Provide a fallback for tests…
  UNKNOWN = "unknown",
}

export enum ShareUiStatus {
  HASURA_IS_LOADING = "HASURA_IS_LOADING",
  USER_DOES_NOT_HAVE_MODULE_DATA = "USER_DOES_NOT_HAVE_MODULE_DATA",
  USER_IS_READY_TO_ACCEPT = "USER_IS_READY_TO_ACCEPT",
  USER_HAS_ACCEPTED = "USER_HAS_ACCEPTED",
  USER_IS_NOT_LOGGED_IN = "USER_IS_NOT_LOGGED_IN",
}
