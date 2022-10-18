import log from "loglevel";

import serverConfig from "src/config/server";

/**
 * Retrieve the contents of a file from GCS
 *
 * @param filePath
 * @param bucketName bucket to read object from; defaults to dataCommonsBucket defined in config
 */
const readGCSObject = async (
  filePath: string,
  bucketName: string = serverConfig.userDataBucket?.name,
  asJson = true,
) => {
  try {
    if (!serverConfig.googleStorage)
      throw new Error("GCP Storage could not start properly");
    if (!filePath) throw new Error("filePath is a required param");

    const gcsObject = await serverConfig.googleStorage
      .bucket(bucketName)
      .file(filePath)
      .download();

    const contents = gcsObject.toString();
    if (asJson && contents) {
      return JSON.parse(contents);
    }

    return contents;
  } catch (err: any) {
    if (err.code === 404) {
      console.log(`File not found on GCS: ${filePath}`);
      return null;
    }
    log.error("Unable to read contents of object from GCS", err);
    throw err;
  }
};

export { readGCSObject };
