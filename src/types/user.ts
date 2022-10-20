import { Exhibit } from "./exhibit";

export interface User {
  email: string;
  emailHash: string;
  exhibits: Exhibit[];
  needToGenerateImages: boolean;
  gcsBucketUrl: string;
}
