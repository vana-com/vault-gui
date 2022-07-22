import _sodium from "libsodium-wrappers";

import config from "src/config";

const textEncoder = new TextEncoder();

/**
 * Encrypts the inputed file with ChaCha20-Poly1305: a symmetric key encryption
 * algorithm.
 *
 * Encrypted File Format:
 * Bytes 0-10: File Signature
 * Bytes 11-26: Salt
 * Bytes 27-50: Header
 * Bytes 51+: Chunks of encrypted data of size config.encryptionChunkSize
 *
 * Wiki: https://vana.slab.com/posts/vana-connect-encryption-tq4nct7r
 * Sodium File Encryption Guide: https://libsodium.gitbook.io/doc/secret-key_cryptography/secretstream
 * @param file - The file to encrypt
 * @param password - Used to derive the encryption key for ChaCha20-Poly1305
 */
const encryptFileChaCha20Poly1305 = async (file: File, password: string) => {
  await _sodium.ready;
  const sodium = _sodium;

  // Creates a salt which is a random Uint8Array of length sodium.crypto_pwhash_SALTBYTES
  const salt = sodium.randombytes_buf(sodium.crypto_pwhash_SALTBYTES);

  // Creates a key which is an Uint8Array of length sodium.crypto_secretstream_xchacha20poly1305_KEYBYTES
  // Read more about libsodium key derivation:
  // https://libsodium.gitbook.io/doc/password_hashing/default_phf
  const derivedKey = sodium.crypto_pwhash(
    sodium.crypto_secretstream_xchacha20poly1305_KEYBYTES,
    password,
    salt,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE,
    // Key Derivation Algorithm: Version 1.3 of the Argon2id
    sodium.crypto_pwhash_ALG_ARGON2ID13,
  );

  /**
   * Initialize the ChaCha20-Poly1305 algorithm
   * state - represents the state of the encryption as plaintext chunks are pushed/streamed to the
   * algorithm
   * header - "intended to provide authenticity and integrity protection for networking or storage
   * metadata for which confidentiality is unnecessary, but authenticity is desired."
   *  https://en.wikipedia.org/wiki/Authenticated_encryption
   */

  const { header, state } =
    sodium.crypto_secretstream_xchacha20poly1305_init_push(derivedKey);

  // Signature is used to identify encrypted files (ie. it is a file signature for the first 10 bytest
  // of encrypted data)
  const SIGNATURE = new Uint8Array(
    textEncoder.encode(config.chacha20Poly1305Signature),
  );

  const fileArrayBuffer = await file.arrayBuffer();
  // TODO: convert to a stream so entire encrypted file doesn't have to be stored in RAM
  const encryptedFileBuffer = [];

  // Signature, salt, and header are appended to the file to allow for decryption and
  // authentication
  encryptedFileBuffer.push(SIGNATURE);
  encryptedFileBuffer.push(salt);
  encryptedFileBuffer.push(header);

  // Encrypt input file in chunks of CHUNK_SIZE bytes
  for (let index = 0; index < file.size; index += config.encryptionChunkSize) {
    const chunk = fileArrayBuffer.slice(
      index,
      index + config.encryptionChunkSize,
    );
    const isLastChunk = index >= file.size - config.encryptionChunkSize;

    /**
     * crypto_secretstream_xchacha20poly1305_TAG_FINAL indicates that the message marks
     * the end of the stream, and  erases the secret key used to encrypt the previous sequence.
     *
     * crypto_secretstream_xchacha20poly1305_TAG_MESSAGE
     */
    const tag = isLastChunk
      ? sodium.crypto_secretstream_xchacha20poly1305_TAG_FINAL
      : sodium.crypto_secretstream_xchacha20poly1305_TAG_MESSAGE;

    const encryptedChunk = sodium.crypto_secretstream_xchacha20poly1305_push(
      state,
      new Uint8Array(chunk),
      null,
      tag,
    );
    encryptedFileBuffer.push(new Uint8Array(encryptedChunk));
  }

  return new File(encryptedFileBuffer, `${file.name}.enc`);
};

export { encryptFileChaCha20Poly1305 };
