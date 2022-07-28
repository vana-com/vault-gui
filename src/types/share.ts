import { ModuleName } from "./module";

export interface ShareModule {
  id: string;
  dataModule: ModuleName;
}

export enum SharePermissionKind {
  InstagramInterests = "InstagramInterests",
}
