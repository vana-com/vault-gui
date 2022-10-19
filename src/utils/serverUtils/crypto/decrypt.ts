import { decipher, encoding } from ".";

export const decrypt = (text: string) => {
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(text, encoding)),
    decipher.final(),
  ]);
  return decrpyted.toString();
};
