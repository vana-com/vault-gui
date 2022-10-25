import heapConfig from "./heap";
import web3AuthConfig from "./web3auth";

const generalConfig = {
  appBaseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000",
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

  // Email: anna@generating-page.com
  annaEmailHash:
    "823052d590e9672111d0b501a09d1d8cee75a59562a9628198e2816a07ec745e",
  // Email: art@generating-page.com
  artEmailHash:
    "b5a97e6fc2e860ef7bfd7628491279e4b4dd19d100a8ce24a967303141c4b68a",
  //Email: ellie@generating-page.com
  ellieEmailHash:
    "04af22fe77f4839d3d34fe0520e554cf754aa8e7a421dbc4eea0923d0af13756",
  //Email: colin@generating-page.com
  colinEmailHash:
    "f5f30e71aa3f12b8491e7455fa6bcdc0e9d95e0c6fc12e1611ee8ad6a59d3a5d",
  //Email: colin@generating-page.com
  phoebeEmailHash:
    "295f2a49f8b92e051ce7f14386da27d95c39f07641a0d365999f47178244d320",
  //Email: zach@generating-page.com
  zachEmailHash:
    "22673a90a00dcbe611747561a616642ed9745b256b5ff573ed5cce51f3088cbb",

  portraitBlurDataURL:
    "https://storage.googleapis.com/corsali-gui-assets/person.png",
};

export default {
  ...generalConfig,
  ...web3AuthConfig,
  ...heapConfig,
};
