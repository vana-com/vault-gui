import { DeleteOptions } from "@google-cloud/storage/build/src/nodejs-common/service-object";
import log from "loglevel";

import serverConfig from "src/config/server";

/**
 * Permently deletes a GCS object.
 *
 * WARNING: This util makes NO ATTEMPT validation before deletion please
 * VALIDATE BEFORE calling this function.
 *
 * @param fileName the filename (AND path if needed) to delete
 * @param bucketName bucket to delete object from; defaults to userDataBucket defined in config
 * @param options additional options to pass to gcp
 */
const deleteGCSObject = async (
  fileName: string,
  bucketName?: string,
  options?: DeleteOptions,
) => {
  try {
    if (!serverConfig.googleStorage)
      throw new Error("GCP Storage could not start properly");
    if (!fileName || !fileName.length)
      throw new Error("fileName is a required param");

    const bucketToDeleteFrom = bucketName ?? serverConfig.userDataBucket?.name;

    console.log(
      `Deleting data from the '${bucketToDeleteFrom}' bucket w/ the following options: ${JSON.stringify(
        options ?? {},
      )}`,
    );

    const fileToDelete = fileName ?? "";

    const withOptions = options ?? {};

    await serverConfig.googleStorage
      .bucket(bucketToDeleteFrom)
      .file(fileToDelete)
      .delete(withOptions);
  } catch (err: any) {
    if (err.code === 404) {
      console.log(`File not found on GCS: ${fileName}`);
    } else {
      log.error("deleteFile(): Error --", err);
      throw err;
    }
  }
};

export { deleteGCSObject };
