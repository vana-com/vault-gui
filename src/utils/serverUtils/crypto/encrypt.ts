import { cipher, encoding } from ".";

export const encrypt = (text: string) => {
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString(encoding);
};
