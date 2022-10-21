import heapConfig from "./heap";
import web3AuthConfig from "./web3auth";

const generalConfig = {
  vanaSupportEmail: "support@vana.com",
  vanaBetaFeedback: "https://4eyuszgyknu.typeform.com/vanarocks",
  vanaSupportedAppsFeedback: "https://4eyuszgyknu.typeform.com/vanadata",
  vanaPrivacyURL: "https://www.vana.com/privacy-policy",
  vanaPublicURL: "https://www.vana.com",
  vanaVaultURL: "https://vault.vana.com",
  vanaExploreURL: "https://explore.vana.com",

  ZENDESK_WIDGET_KEY: "ae33c673-67c2-4bb9-96a4-3b62821d9567",
  routesToHideZendeskWidget: ["/", "/share", "/login"],

  preSignedObjectURLTTLInMilliseconds: 10 * 60 * 1000, // Valid for 10 minutes
  maxFileUploadSize: 2147483648,

  vercelDomain: "vana.vercel.app",

  /**
   * Encryption
   */
  encryptionChunkSize: 64 * 1024 * 1024,
  chacha20Poly1305Signature: "zDKO6XYXioc",

  // DO NOT MODIFY: Changing this message will brick existing encrypted data without a proper migration
  encryptionKeySignatureMessage: `Sign this to retrieve your Vana encryption key.
  
  ###`,

  allowedUploadMimeTypes: ["image/jpeg", "image/png"],

  /**
   * Stripe
   */
  stripeAPIVersion: "2020-08-27", // DO NOT CHANGE unless you have considered the consequences

  adminPassword: "barack-obama-cactus",

  // Email: kahtaf@generating-page.com
  kahtafEmailHash:
    "314e2646e4da5f61774e4007d385232e2c5eb46f706a53f90f323c1403e32fe1",
  // Email: anna@generating-page.com
  annaEmailHash:
    "823052d590e9672111d0b501a09d1d8cee75a59562a9628198e2816a07ec745e",
  // Email: art@generating-page.com
  artEmailHash:
    "b5a97e6fc2e860ef7bfd7628491279e4b4dd19d100a8ce24a967303141c4b68a",
};

export default {
  ...generalConfig,
  ...web3AuthConfig,
  ...heapConfig,
};
