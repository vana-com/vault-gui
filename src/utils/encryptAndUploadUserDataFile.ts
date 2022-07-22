import { encryptFileChaCha20Poly1305, uploadFile } from "src/utils";

/**
 * This the only method that encrypts and uploads user data zip files from email integrations
 *
 * @param files - The user data files to encrypt and upload
 * @param password - The password used to symmetrically encrypt
 * @param moduleName - Name of the email integration the file is for
 * @param appPubKey - Public key of the user
 * @param handleUploadProgress - callback to show user progress of upload
 * @param createUserModule - callback to create a row in users_modules table in hasura
 *
 */
const encryptAndUploadUserDataFiles = async (
  files: Array<File>,
  password: string,
  moduleName: string,
  appPubKey: string,
  handleUploadProgress: (event: any) => void,
  createUserModule: (urlToData: string, urlNumber: number) => Promise<void>,
) => {
  // Multiple files should be processed uploaded in parallel so we create arrays and use Promise.all

  // use the same password for each password
  const passwords = files.map(() => password);

  const encryptionFilePromises = files.map((file, i) =>
    encryptFileChaCha20Poly1305(file, passwords[i]),
  );

  const encryptedFilesToUpload = await Promise.all(encryptionFilePromises);

  // Upload files to object store (S3 or GCS)
  const uploadPromises = encryptedFilesToUpload.map((file) =>
    uploadFile(file, moduleName, appPubKey, handleUploadProgress),
  );

  const uploadResults = await Promise.all(uploadPromises);

  const successfulUpload = uploadResults.every(
    (result) => result?.uploadSuccessful,
  );

  if (!successfulUpload) {
    throw new Error("Unable to upload all files");
  }

  // Get the list of object URLs for the files that were uploaded
  const objectURLs = uploadResults.map((result) => result.uploadURL);

  // Associate object URL with the user in the DB.
  const mutationPromises = objectURLs.map((url, i) =>
    // url is always a string due to successfulUpload === true
    createUserModule(url as string, i + 1),
  );
  await Promise.all(mutationPromises);
};

export { encryptAndUploadUserDataFiles };
