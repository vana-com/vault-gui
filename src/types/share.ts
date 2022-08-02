import { ModuleName } from "./module";

export interface ShareModule {
  id: string;
  dataModule: ModuleName;
}

export enum SharePermissionKind {
  InstagramInterests = "InstagramInterests",
}

export enum ShareUiStatus {
  HASURA_IS_LOADING = "HASURA_IS_LOADING",
  USER_DOES_NOT_HAVE_MODULE_DATA = "USER_DOES_NOT_HAVE_MODULE_DATA",
  USER_IS_READY_TO_ACCEPT = "USER_IS_READY_TO_ACCEPT",
  USER_HAS_ACCEPTED = "USER_HAS_ACCEPTED",
  USER_IS_NOT_LOGGED_IN = "USER_IS_NOT_LOGGED_IN",
}
