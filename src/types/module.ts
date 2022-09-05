// incompatible with the Hasura types…
export type ModuleName = "Facebook" | "Google" | "Instagram";

// TODO: match these types to the supplied Hasura types… or better yet, definitively use the Hasura type
export interface Module {
  id?: string;
  name: string;
}

export interface ModuleObj {
  module: Module;
  id: string;
  moduleId: string;
  urlToData: string;
  fileName?: string | null;
  fileSize: number;
  createdAt: string;
}

export interface NavCrumb {
  link: string;
  label: string;
}
