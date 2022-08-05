import web3AuthConfig from "./web3auth";

let vanaVaultURL;
switch (process.env.NEXT_PUBLIC_ENV) {
  case "development":
    vanaVaultURL = "https://development-vault.vana.xyz";
    break;
  case "staging":
    vanaVaultURL = "https://staging-vault.vana.xyz";
    break;
  case "production":
    vanaVaultURL = "https://vault.vana.xyz";
    break;
  default:
    vanaVaultURL = "https://vault.vana.xyz";
}

const generalConfig = {
  vanaURL: "https://vana.xyz",
  vanaVaultURL,
  vanaAboutURL: `${vanaVaultURL}/about`,
  vanaManifestsURL: `${vanaVaultURL}/manifesto`,
  vanaSupportEmail: "support@vanahelp.zendesk.com",

  preSignedObjectURLTTLInMilliseconds: 10 * 60 * 1000, // Valid for 10 minutes
  maxFileUploadSize: 2147483648,

  /**
   * Encryption
   */
  encryptionChunkSize: 64 * 1024 * 1024,
  chacha20Poly1305Signature: "zDKO6XYXioc",

  zipFileMimeTypes: [
    "zip",
    "application/octet-stream",
    "application/zip",
    "application/x-zip",
    "application/x-zip-compressed",
  ],

  /**
   * Stripe
   */
  stripeAPIVersion: "2020-08-27", // DO NOT CHANGE unless you have considered the consequences
};

export default {
  ...generalConfig,
  ...web3AuthConfig,
};
