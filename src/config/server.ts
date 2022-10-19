import { Storage } from "@google-cloud/storage";

import { getSecret } from "../utils/getSecret";

const googleCredentials = JSON.parse(getSecret("google_credentials"));
const googleStorage = new Storage({
  projectId: googleCredentials.project_id,
  credentials: {
    client_email: googleCredentials.client_email,
    private_key: googleCredentials.private_key,
  },
});

const userDataBucket = googleStorage.bucket(
  process.env.GCP_DATA_COLLECTIVE_BUCKET_NAME || "",
);

const vercelPreviewUrlRegex =
  /https:\/\/vault-[0-9A-Za-z]{9}-vana\.vercel\.app/;

export default {
  /**
   * GCP
   */
  googleCredentials,
  googleStorage,
  userDataBucket,
  vercelPreviewUrlRegex,
};
