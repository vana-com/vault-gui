import config from "src/config";
import { appendToSheet, encrypt } from "src/utils/serverUtils";

const spreadsheetId: string | undefined = process.env.GOOGLE_SHEET_ID;

/**
 * Adds submission to the gsheet
 * @param newSubmission submission object containing submission info
 * @returns
 */
export const addNewSubmission = async (email: string) => {
  const d = new Date(Date.now());
  const date = `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;
  const hashedEmail = encrypt(email as string);
  const gcsUrl = `https://console.cloud.google.com/storage/browser/${process.env.GCP_DATA_COLLECTIVE_BUCKET_NAME}/${email}`;
  const galleryUrl = `${config.appBaseUrl}/user/${hashedEmail}`;

  const values = [
    date,
    "",
    "",
    "",
    "",
    email,
    "",
    gcsUrl,
    "",
    galleryUrl,
    "",
    "",
    "",
  ];

  console.log(`data to upload: ${values}`);

  console.log("updating gsheet...");
  return appendToSheet(spreadsheetId as string, [values], "A:G");
};
