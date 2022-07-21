/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require("crypto");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

/**
 * Utility to encrypt a string, to be used in local secrets store
 */
const encryptSecret = (value) => {
  console.log("Value to encrypt: ", value);

  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    process.env.SECRET_ENCRYPTION_KEY,
    process.env.SECRET_ENCRYPTION_IV,
  );

  let encrypted = cipher.update(value, "utf8", "base64");
  encrypted += cipher.final("base64");

  console.log("Encrypted value: ", encrypted);
};

if (process.argv.length === 3) {
  encryptSecret(process.argv[2]);
} else {
  console.error(`Usage: yarn encrypt "secret"`);
}
