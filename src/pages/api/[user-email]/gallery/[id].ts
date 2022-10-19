import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit } from "src/types/exhibit";
import { readGCSDirectory } from "src/utils/serverUtils";

import { getExhibit } from "./[id]/exhibit/[exhibit-name]";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { "user-email": userEmail, id } = req.query;

  console.log("id:", id);
  console.log("user-email:", userEmail);

  const galleryId = `gallery-${id}`;
  const keyPrefix = `${userEmail}/${galleryId}`;

  const [files] = await readGCSDirectory(keyPrefix);

  const fileNames = files.map((f) => f.name);
  const exhibits = getExhibitNames(fileNames);
  const exhibitKeys = createExhibitKeys(exhibits, keyPrefix);

  const response = {
    id: galleryId,
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
    exhibits.push(splitFiles[2]);
  });
  const exhibitsSet = new Set(exhibits);
  return Array.from(exhibitsSet);
};

const getExhibits = async (exhibitKeys: string[]): Promise<Exhibit[]> =>
  Promise.all(exhibitKeys.map(async (key: string) => getExhibit(key)));

const createExhibitKeys = (exhibits: string[], keyPrefix: string): string[] =>
  exhibits.map((exhibit: string) => `${keyPrefix}/${exhibit}`);
