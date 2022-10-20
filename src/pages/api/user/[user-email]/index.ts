import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit } from "src/types/exhibit";
import { decrypt, encrypt, readGCSDirectory } from "src/utils/serverUtils";

import { getExhibit } from "./exhibit/[exhibit-name]";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { "user-email": encryptedUserEmail } = req.query;

  console.log("encrypted-email:", encryptedUserEmail);

  try {
    const userEmail = decrypt(encryptedUserEmail as string);
    const response = await getUserGallery(userEmail);

    console.log(JSON.stringify(response, null, 2));
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(404).json({ message: "404 Not Found" });
  }
};

const getExhibitNames = (files: string[]): string[] => {
  const exhibits: string[] = [];

  files.forEach((f) => {
    const splitFiles = f.split("/");
    const exhibit = splitFiles[2];
    if (exhibit.length > 0) {
      exhibits.push(exhibit);
    }
  });

  const exhibitsSet = new Set(exhibits);
  return Array.from(exhibitsSet);
};

const getExhibits = async (exhibitKeys: string[]): Promise<Exhibit[]> =>
  Promise.all(exhibitKeys.map(async (key: string) => getExhibit(key)));

const createExhibitKeys = (exhibits: string[], keyPrefix: string): string[] =>
  exhibits.map((exhibit: string) => `${keyPrefix}/exhibits/${exhibit}`);

const sortExhibitsUpdatedDesc = (exhibits: Exhibit[]): Exhibit[] =>
  exhibits.sort(
    (a: Exhibit, b: Exhibit) =>
      Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt)),
  );

export const getUserGallery = async (userEmail: string) => {
  const keyPrefix = `${userEmail}/exhibits`;
  console.log("userEmail:", userEmail);

  const [files] = await readGCSDirectory(keyPrefix);

  const fileNames = files.map((file) => file.name);
  const exhibits = getExhibitNames(fileNames);
  const exhibitKeys = createExhibitKeys(exhibits, userEmail);
  const exhibitArr = await getExhibits(exhibitKeys);

  return {
    userId: encrypt(userEmail),
    exhibits: sortExhibitsUpdatedDesc(exhibitArr),
  };
};
