import web3AuthConfig from "./web3auth";

const generalConfig = {
  vanaSupportEmail: "support@vana.com",
  vanaBetaFeedback: "https://4eyuszgyknu.typeform.com/vanarocks",
  vanaSupportedAppsFeedback: "https://4eyuszgyknu.typeform.com/vanadata",
  vanaPrivacyURL: "https://www.vana.xyz/privacy-policy",

  preSignedObjectURLTTLInMilliseconds: 10 * 60 * 1000, // Valid for 10 minutes
  maxFileUploadSize: 2147483648,

  vercelDomain: "vana.vercel.app",

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
