export interface User {
  email: string;
  emailHash: string;
  exhibitNames: string[];
  needToGenerateImages: boolean;
  gcsBucketUrl: string;
  errorMessage: string | undefined;
}
