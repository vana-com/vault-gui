import { GetSignedUrlConfig } from "@google-cloud/storage";
import type { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import serverConfig from "src/config/server";
import { Exhibit } from "src/types/exhibit";
import { decrypt, readGCSDirectory } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { "user-email": userEmail, "exhibit-name": exhibitName } = req.query;

  console.log("user-email:", userEmail);
  console.log("exhibit:", exhibitName);

  const decryptedUserEmail = decrypt(userEmail as string);
  const key = `${decryptedUserEmail}/exhibits/${exhibitName}`;

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
  const splitName = name.split(" ");
  const titleCaseName = splitName.map(
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return titleCaseName.join(" ");
};

const getSignedUrl = async (fileName: string) => {
  const options = {
    version: "v4",
    action: "read",
    expires: Date.now() + config.preSignedObjectURLTTLInMilliseconds,
  } as GetSignedUrlConfig;

  // Get a v4 signed URL for reading the file
  const [signedUrl] = await serverConfig.userDataBucket
    .file(fileName)
    .getSignedUrl(options);

  return signedUrl;
};

export const getExhibit = async (exhibitKey: string): Promise<Exhibit> => {
  const [files, metadata] = await readGCSDirectory(exhibitKey);

  const { items } = metadata;

  // Get array of booleans for files with file size > 0
  const isNonZeroSize = items.map((item: any) => Number(item.size) > 0);

  const updatedAt = getMaxUpdatedTime(items);
  const exhibitName = exhibitKey.split("/").pop();

  // Filter out files with file size 0
  const fileNames = files
    .map((f) => f.name)
    .filter((_, idx) => isNonZeroSize[idx]);
  const images = await Promise.all(
    fileNames.map(async (fileName: string) => getSignedUrl(fileName)),
  );

  return {
    name: formatExhibitName(exhibitName as string),
    updatedAt,
    images,
  };
};

const getMaxUpdatedTime = (items: any[]) =>
  items
    .map((i) => i.updated)
    .reduce((a, b) => (new Date(a) > new Date(b) ? a : b));
