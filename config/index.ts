export default {
  vanaURL: "https://vana.xyz",
  vanaAboutURL: "https://vana.xyz/about",
  vanaManifestsURL: "https://vana.xyz/manifesto",

  preSignedObjectURLTTLInMilliseconds: 10 * 60 * 1000, // Valid for 10 minutes
  maxFileUploadSize: 2147483648,

  /**
   * Visual Judgement
   */
  visualJudgementResponseBatchSize: 10, // Batch size for how many responses at a time to write to Hasura
  fraudCheckEveryNumberOfSwipes: 50,
  swipeFraudPercentThreshold: 0.95, // If a user only swipes left or right for more than this percent of the time, the user is fraudulent
  fraudCheckMinNumberOfSwipes: 40,

  /**
   * Encryption
   */
  encryptionChunkSize: 64 * 1024 * 1024,
  userDataPublicKey: new Uint8Array(
    process.env.NEXT_PUBLIC_VANA_USER_DATA_PUBLIC_KEY?.split(",").map((ele) =>
      Number(ele),
    ),
  ),
  userDataPasswordPrefix: "user-data-password: ",
  chacha20Poly1305Signature: "zDKO6XYXioc",

  /**
   * ZIP file stripping
   */
  whitelistedFileMimeTypes: [
    "text/csv",
    "text/html",
    "text/plain",
    "application/json",
    "application/javascript",
  ],

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
