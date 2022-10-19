import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit } from "src/types/exhibit";
import { decrypt, readGCSDirectory } from "src/utils/serverUtils";

import { getExhibit } from "./exhibit/[exhibit-name]";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { "user-email": userEmail, id } = req.query;

  console.log("id:", id);
  console.log("user-email:", userEmail);

  const decryptedUserEmail = decrypt(userEmail as string);
  console.log("decryptedUserEmail:", decryptedUserEmail);

  const [files] = await readGCSDirectory(decryptedUserEmail);

  const fileNames = files.map((file) => file.name);
  const exhibits = getExhibitNames(fileNames);
  const exhibitKeys = createExhibitKeys(exhibits, decryptedUserEmail);

  const response = {
    id: userEmail,
    exhibits: await getExhibits(exhibitKeys),
  };

  console.log(JSON.stringify(response, null, 2));
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json(response);
};

const getExhibitNames = (files: string[]): string[] => {
  const exhibits: string[] = [];

  files.forEach((f) => {
    const splitFiles = f.split("/");
    exhibits.push(splitFiles[1]);
  });

  const exhibitsSet = new Set(exhibits);
  const exhibitsArr = Array.from(exhibitsSet);
  return exhibitsArr.filter(
    (name: string) => !name.startsWith("uploaded-image"),
  );
};

const getExhibits = async (exhibitKeys: string[]): Promise<Exhibit[]> =>
  Promise.all(exhibitKeys.map(async (key: string) => getExhibit(key)));

const createExhibitKeys = (exhibits: string[], keyPrefix: string): string[] =>
  exhibits.map((exhibit: string) => `${keyPrefix}/${exhibit}`);
