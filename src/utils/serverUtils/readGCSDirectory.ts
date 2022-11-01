import { GetFilesOptions } from "@google-cloud/storage";
import { File } from "@google-cloud/storage/build/src/file";
import { Metadata } from "@google-cloud/storage/build/src/nodejs-common";
import log from "loglevel";

import serverConfig from "src/config/server";

/**
 * Retrieve the files/folders from a path in GCS
 *
 * @param folderPrefix
 * @param bucketName bucket to read object from; defaults to dataCommonsBucket defined in config
 */
const readGCSDirectory = async (
  folderPrefix = "",
  delimiter = "",
  pageToken = "",
  bucketName = serverConfig.userDataBucket?.name,
): Promise<[File[], GetFilesOptions, Metadata]> => {
  try {
    if (!serverConfig.googleStorage)
      throw new Error("GCP Storage could not start properly");

    const [files, options, metadata] = await serverConfig.googleStorage
      .bucket(bucketName)
      .getFiles({
        prefix: folderPrefix,
        delimiter,
        autoPaginate: false,
        maxResults: 5000,
        pageToken,
      });
    return [files, options, metadata];
  } catch (err: any) {
    if (err.code === 404) {
      console.log(`Folder not found on GCS: ${folderPrefix}`);
      return [[], {}, {}];
    }
    log.error("Unable to read contents of folder from GCS", err);
    throw err;
  }
};

export { readGCSDirectory };
