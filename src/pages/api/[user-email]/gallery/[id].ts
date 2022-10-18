import type { NextApiRequest, NextApiResponse } from "next";

import { readGCSDirectory } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { "user-email": userEmail, id } = req.query;

  console.log("id:", id);
  console.log("user-email:", userEmail);

  const galleryId = `gallery-${id}`;
  const key = `${userEmail}/${galleryId}`;

  const [files] = await readGCSDirectory(key);

  const fileNames = files.map((f) => f.name);
  const exhibits = getExhibitNames(fileNames);

  const response = {
    id: galleryId,
    exhibits,
  };

  console.log(JSON.stringify(response, "", 2));
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
