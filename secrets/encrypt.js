/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require("crypto");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

/**
 * Utility to encrypt a string, to be used in local secrets store
 */
const encryptSecret = (value, encoding) => {
  console.log("Value to encrypt: ", value);

  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    process.env.SECRET_ENCRYPTION_KEY,
    process.env.SECRET_ENCRYPTION_IV,
  );

  let encrypted = cipher.update(value, "utf8", encoding);
  encrypted += cipher.final(encoding);

  console.log("Encrypted value: ", encrypted);
};

if (process.argv.length === 3) {
  encryptSecret(process.argv[2], "base64");
} else if (process.argv.length === 4) {
  encryptSecret(process.argv[2], process.argv[3]);
} else {
  console.error(`Usage: yarn encrypt "secret"`);
}
