import type { NextApiRequest, NextApiResponse } from "next";

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

  const [files] = await readGCSDirectory(key);

  const images = files.map((f) => f.name);

  const response = {
    name: formatExhibitName(exhibitName as string),
    galleryId,
    images,
  };

  console.log(JSON.stringify(response, null, 2));
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json(response);
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
