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
  const { "user-email-hash": userEmailHash, "exhibit-name": exhibitName } =
    req.query;

  console.log("user-email:", userEmailHash);
  console.log("exhibit:", exhibitName);

  const decryptedUserEmail = decrypt(userEmailHash as string);
  const key = `${decryptedUserEmail}/exhibits/${exhibitName}`;

  try {
    const exhibit = await getExhibit(key);

    console.log(JSON.stringify(exhibit, null, 2));
    res.setHeader("Cache-Control", "public, max-age=600");
    return res.status(200).json(exhibit);
  } catch (error) {
    console.error(error);
    res.setHeader("Cache-Control", "public, max-age=600");
    return res.status(404).json({ message: "404 Not Found" });
  }
};

const formatExhibitName = (exhibitName: string) => {
  let name;
  if (exhibitName.startsWith("exhibit-")) {
    name = exhibitName.replace("exhibit-", "");
  } else {
    name = exhibitName;
  }
  name = name.replace(/-/g, " ");
  const splitName = name.split(" ");
  const titleCaseName = splitName.map(
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  console.log("titleCaseName", titleCaseName);
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

  if (files.length === 0) {
    throw new Error("Exhibit not found or has no images");
  }

  const { items } = metadata;

  // Get array of booleans for files with file size > 0
  const isNonZeroSize = items.map((item: any) => Number(item.size) > 0);

  const updatedAt = getMaxUpdatedTime(items);
  const exhibitName = exhibitKey.split("/").pop();

  // Filter out files with file size 0
  const fileNames = files
    .map((f) => f.name)
    .filter((_, idx) => isNonZeroSize[idx]);
  fileNames.sort((a, b) => {
    if (a.includes("/a_")) {
      return -1;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  console.log("fileName:", fileNames);
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
