import crypto from "crypto";

const algorithm = process.env.ALGORITHM as string;
const secretKey = process.env.SECRET_ENCRYPTION_KEY as crypto.CipherKey;
const iv = process.env.SECRET_ENCRYPTION_IV as crypto.BinaryLike;
const encoding = "hex";

export const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString(encoding);
};

export const decrypt = (text: string) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(text, encoding)),
    decipher.final(),
  ]);
  return decrpyted.toString();
};
