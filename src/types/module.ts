// incompatible with the Hasura types…
export type ModuleName = "Facebook" | "Google" | "Instagram";

// TODO: match these types to the supplied Hasura types… or better yet, definitively use the Hasura type
export interface Module {
  id?: string;
  name: string;
  fileName?: string;
  lastUpdated?: string;
  dateCreated?: string;
  fileSize?: string;
}

export interface ModuleObj {
  module: Module;
  id: string;
  moduleId: string;
  urlToData: string;
}

export interface NavCrumb {
  link: string;
  label: string;
}
