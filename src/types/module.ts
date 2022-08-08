// incompatible with the Hasura types…
export type ModuleName = "Facebook" | "Google" | "Instagram";

export interface Module {
  id: string;
  name: string;
  fileName?: string;
  lastUpdated?: string;
  dateCreated?: string;
  fileSize?: string;
}

export interface NavCrumb {
  link: string;
  label: string;
}
