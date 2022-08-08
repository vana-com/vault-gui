import { encryptFileChaCha20Poly1305, uploadFile } from "src/utils";

import { IWalletProvider } from "./identity/walletProvider";

/**
 * This the only method that encrypts and uploads user data zip files from email integrations
 *
 * @param files - The user data files to encrypt and upload
 * @param password - The password used to symmetrically encrypt
 * @param moduleName - Name of the email integration the file is for
 * @param externalId - Hasura external ID of the user
 * @param handleUploadProgress - callback to show user progress of upload
 * @param createUserModule - callback to create a row in users_modules table in hasura
 *
 */
const encryptAndUploadUserDataFiles = async (
  files: Array<File>,
  moduleName: string,
  externalId: string,
  walletProvider: IWalletProvider | null,
  handleUploadProgress: (event: any) => void,
  createUserModule: (urlToData: string, urlNumber: number) => Promise<void>,
) => {
  // Multiple files should be processed uploaded in parallel so we create arrays and use Promise.all

  const passwords = files.map(() => Math.random().toString(36));
  const encryptedPasswords = await Promise.all(
    passwords.map(
      async (p) => (await walletProvider?.encryptMessage(p)) as string,
    ),
  );

  const encryptionFilePromises = files.map((file, i) =>
    encryptFileChaCha20Poly1305(file, passwords[i]),
  );

  const encryptedFilesToUpload = await Promise.all(encryptionFilePromises);

  // Upload files to object store (S3 or GCS)
  const uploadPromises = encryptedFilesToUpload.map((file, i) =>
    uploadFile(
      file,
      moduleName,
      externalId,
      encryptedPasswords[i],
      handleUploadProgress,
    ),
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
