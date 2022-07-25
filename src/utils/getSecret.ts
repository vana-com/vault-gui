import crypto from "crypto";
import developmentCredentials from "secrets/development";
import productionCredentials from "secrets/production";
import stagingCredentials from "secrets/staging";

const localSecrets = {
  development: developmentCredentials,
  staging: stagingCredentials,
  production: productionCredentials,
}[process.env.NEXT_PUBLIC_ENV || "development"];

/**
 * Returns an encrypted secret from local secret store
 * @param key Key to retrieve in secret store
 * @param replaceNewlines If the secret contains \n, should it be replaced with a newline?
 * @returns decrypted secret
 */
const getSecret = (key: string, replaceNewlines = false): string => {
  if (
    localSecrets &&
    localSecrets[key as keyof typeof localSecrets] === undefined
  ) {
    throw new Error(`Secret not found for key ${key}`);
  }

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    process.env.SECRET_ENCRYPTION_KEY as crypto.CipherKey,
    process.env.SECRET_ENCRYPTION_IV as crypto.BinaryLike,
  );
  let decrypted = decipher.update(
    (localSecrets && localSecrets[key as keyof typeof localSecrets]) ||
      developmentCredentials[key as keyof typeof localSecrets],
    "base64",
    "utf8",
  );
  decrypted += decipher.final("utf8");

  if (replaceNewlines) {
    decrypted = decrypted.replace(
      /\\n/g,
      `
    `,
    );
  }

  return decrypted;
};

export { getSecret };
