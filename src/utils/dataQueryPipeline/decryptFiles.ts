/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { ServiceFile } from "@corsali/userdata-extractor";

import { decryptFileChaCha20Poly1305 } from "src/utils/decryptFileChaCha20Poly1305";

/**
 * Takes a list of files to decrypt
 * @param serviceFilesEncrypted List of { service => File }, ex { instagram => data.zip.enc }
 * @param decryptionKey Password used to decrypt data
 * @returns
 */
const decryptFiles = async (
  serviceFilesEncrypted: ServiceFile[],
  decryptionKey: string,
): Promise<ServiceFile[]> => {
  const serviceFilesDecrypted: ServiceFile[] = [];
  for (const serviceFile of serviceFilesEncrypted) {
    const decrypted = await decryptSingleFile(serviceFile.file, decryptionKey);
    serviceFilesDecrypted.push({
      serviceName: serviceFile.serviceName,
      file: decrypted,
    });
  }
  return serviceFilesDecrypted;
};

/**
 * Decrypts a .enc file with a given key
 * @param encryptedFile encrypted file
 * @param decryptionKey Password used to decrypt data
 * @returns Unencrypted file (.zip)
 */
const decryptSingleFile = async (
  encryptedFile: File,
  decryptionKey: string,
): Promise<File> => {
  const decrypted = await decryptFileChaCha20Poly1305(
    encryptedFile,
    decryptionKey,
  );

  if (!decrypted) {
    // Failed to decrypt
    throw new Error("Failed to decrypt data, probably used the wrong key");
  }

  return decrypted;
};

export { decryptFiles };
