import crypto from "crypto";

const algorithm = process.env.ALGORITHM as string;
const secretKey = process.env.SECRET_ENCRYPTION_KEY as crypto.CipherKey;
const iv = process.env.SECRET_ENCRYPTION_IV as crypto.BinaryLike;

export const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
export const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
export const encoding = "hex";
export * from "./decrypt";
export * from "./encrypt";
