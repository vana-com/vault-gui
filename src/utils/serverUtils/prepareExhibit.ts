import { File, GetSignedUrlConfig } from "@google-cloud/storage";

import config from "src/config";
import serverConfig from "src/config/server";
import { Exhibit } from "src/types/exhibit";

const getExhibitName = (files: File[]): string => {
  const fileName = files[0].name;
  const splitName = fileName.split("/");
  return splitName[2];
};

const formatExhibitName = (exhibitName: string) => {
  const name = exhibitName.replace(/-/g, " ");
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

const getMaxUpdatedTime = (files: File[]): string =>
  files
    .map((f) => f.metadata.updated)
    .reduce((a, b) => (new Date(a) > new Date(b) ? a : b));

/**
 * Takes list of GCS Files and generates an Exhibit response containing signed URLs to images.
 *
 * @param files - Google Cloud Storage File[] type
 * @returns An Exhibit object
 */
export const prepareExhibit = async (files: File[]): Promise<Exhibit> => {
  const updatedAt = getMaxUpdatedTime(files);
  const exhibitName = getExhibitName(files);
  const name = formatExhibitName(exhibitName);

  // Filter out files with file size 0
  const fileNames = files.filter((f) => f.metadata.size > 0).map((f) => f.name);

  // Sort to have images with 'a_' prefix appear first
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

  // Get signed URLs for all images in exhibit
  const images = await Promise.all(
    fileNames.map(async (fileName: string) => getSignedUrl(fileName)),
  );

  return {
    name,
    updatedAt,
    images,
  };
};
