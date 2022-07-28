import _sodium from "libsodium-wrappers";

import config from "../config";

const textDecoder = new TextDecoder();

/**
 *
 * Encrypted File Format:
 * Bytes 0-10: File Signature
 * Bytes 11-26: Salt
 * Bytes 27-50: Header
 * Bytes 51+: Chunks of encrypted data of size config.encryptionChunkSize
 *
 * @param encryptedFile - The encrypted file to decrypt
 * @param password - The plaintext password used to encrypt the file
 * @returns - The plaintext file or null if encryption is unsuccessful
 */
const decryptFileChaCha20Poly1305 = async (
  encryptedFile: File,
  password: string,
) => {
  await _sodium.ready;
  const sodium = _sodium;
  const [signature, saltArrayBuffer, headerArrayBuffer] = await Promise.all([
    encryptedFile.slice(0, 11).arrayBuffer(), // signature
    encryptedFile.slice(11, 27).arrayBuffer(), // salt
    encryptedFile.slice(27, 51).arrayBuffer(), // header
  ]);

  const salt = new Uint8Array(saltArrayBuffer);
  const header = new Uint8Array(headerArrayBuffer);

  const decodedSignature = textDecoder.decode(signature);
  if (decodedSignature !== config.chacha20Poly1305Signature) {
    console.log(
      `Signature ${decodedSignature} doesn't match the expected ChaCha20-Poly1305 signature`,
    );
    return null;
  }

  try {
    const derivedKey = sodium.crypto_pwhash(
      sodium.crypto_secretstream_xchacha20poly1305_KEYBYTES,
      password,
      salt,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_ALG_ARGON2ID13,
    );

    // Initialize decryption state
    const state = sodium.crypto_secretstream_xchacha20poly1305_init_pull(
      header,
      derivedKey,
    );

    // TODO: convert to a stream so entire encrypted file doesn't have to be stored in RAM
    const decryptedFileBuffer = [];
    const encryptedArrayBuffer = await encryptedFile.arrayBuffer();

    // decrypt file in chucks one at a time starting at index 51 which is the first byte of
    // the encrypted data
    for (
      let index = 51;
      index < encryptedFile.size;
      index +=
        config.encryptionChunkSize +
        sodium.crypto_secretstream_xchacha20poly1305_ABYTES
    ) {
      const chunk = encryptedArrayBuffer.slice(
        index,
        index +
          config.encryptionChunkSize +
          sodium.crypto_secretstream_xchacha20poly1305_ABYTES,
      );

      const result = sodium.crypto_secretstream_xchacha20poly1305_pull(
        state,
        new Uint8Array(chunk),
      );

      if (result.message) {
        decryptedFileBuffer.push(result.message);
      } else {
        throw new Error(`Error decrypting file starting at index ${index}`);
      }
    }

    return new File(
      decryptedFileBuffer,
      encryptedFile.name.substring(0, encryptedFile.name.length - 4),
    );
  } catch (error: any) {
    console.log(error.toString());
    return null;
  }
};

export { decryptFileChaCha20Poly1305 };
