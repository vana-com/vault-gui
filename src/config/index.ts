import heapConfig from "./heap";
import web3AuthConfig from "./web3auth";

const generalConfig = {
  vanaSupportEmail: "support@vana.com",
  vanaBetaFeedback: "https://4eyuszgyknu.typeform.com/vanarocks",
  vanaSupportedAppsFeedback: "https://4eyuszgyknu.typeform.com/vanadata",
  vanaPrivacyURL: "https://www.vana.com/privacy-policy",
  vanaPublicURL: "https://www.vana.com",

  preSignedObjectURLTTLInMilliseconds: 10 * 60 * 1000, // Valid for 10 minutes
  maxFileUploadSize: 2147483648,

  vercelDomain: "vana.vercel.app",

  /**
   * Encryption
   */
  encryptionChunkSize: 64 * 1024 * 1024,
  chacha20Poly1305Signature: "zDKO6XYXioc",

  // Do not modify. Changing this message will brick existing encrypted data without a proper migration
  encryptionKeySignatureMessage: `Sign this to retrieve your Vana encryption key.
  
  ###`,

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
  ...heapConfig,
};
