export interface User {
  email: string;
  emailHash: string;
  exhibits: string[];
  needToGenerateImages: boolean;
  gcsBucketUrl: string;
}
