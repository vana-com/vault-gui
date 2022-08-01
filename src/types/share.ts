import { ModuleName } from "./module";

export interface ShareModule {
  id: string;
  dataModule: ModuleName;
}

export enum SharePermissionKind {
  InstagramInterests = "InstagramInterests",
}

export enum ShareUiStatus {
  hasuraIsLoading = "hasuraIsLoading",
  userDoesNotHaveModuleData = "userDoesNotHaveModuleData",
  userIsReadyToAccept = "userIsReadyToAccept",
  userHasAcceptedRequest = "userHasAcceptedRequest",
  userIsNotLoggedIn = "userIsNotLoggedIn",
}
