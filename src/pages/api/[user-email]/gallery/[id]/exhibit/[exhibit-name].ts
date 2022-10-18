import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit } from "src/types/exhibit";
import { readGCSDirectory } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    "user-email": userEmail,
    "exhibit-name": exhibitName,
    id,
  } = req.query;

  console.log("id:", id);
  console.log("user-email:", userEmail);
  console.log("exhibit-name", exhibitName);

  const galleryId = `gallery-${id}`;
  const key = `${userEmail}/${galleryId}/${exhibitName}`;

  const exhibit = await getExhibit(key);

  console.log(JSON.stringify(exhibit, null, 2));
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json(exhibit);
};

const formatExhibitName = (exhibitName: string) => {
  let name;
  if (exhibitName.startsWith("exhibit-")) {
    name = exhibitName.replace("exhibit-", "");
  } else {
    name = exhibitName;
  }

  name = name.replace("-", " ");
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getExhibit = async (exhibitKey: string): Promise<Exhibit> => {
  const [files] = await readGCSDirectory(exhibitKey);
  const exhibitName = exhibitKey.split("/").pop();

  const images = files.map((f) => f.name);

  return {
    name: formatExhibitName(exhibitName as string),
    images,
  };
};
