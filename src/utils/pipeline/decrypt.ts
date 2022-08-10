import { decryptFileChaCha20Poly1305 } from "src/utils/decryptFileChaCha20Poly1305";

/**
 * Decrypts a .enc file with a given key
 * @param encryptedFile encrypted file
 * @param key used to decrypt data
 * @returns Unencrypted file (.zip)
 */
const decryptData = async (encryptedFile: File, key: any): Promise<File> => {
  const decrypted = await decryptFileChaCha20Poly1305(encryptedFile, key);

  if (!decrypted) {
    // Failed to decrypt
    throw new Error("Failed to decrypt data, probably used the wrong key");
  }

  return decrypted;
};

export { decryptData };
