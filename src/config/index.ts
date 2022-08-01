import web3AuthConfig from "./web3auth";

const generalConfig = {
  vanaURL: "https://vana.xyz",
  vanaVaultURL: "https://vault.vana.xyz",
  vanaAboutURL: "https://vana.xyz/about",
  vanaManifestsURL: "https://vana.xyz/manifesto",
  vanaSupportEmail: "support@vanahelp.zendesk.com",

  preSignedObjectURLTTLInMilliseconds: 10 * 60 * 1000, // Valid for 10 minutes
  maxFileUploadSize: 2147483648,

  /**
   * Encryption
   */
  encryptionChunkSize: 64 * 1024 * 1024,
  userDataPasswordPrefix: "user-data-password: ",
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
