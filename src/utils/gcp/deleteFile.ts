import { DeleteOptions } from "@google-cloud/storage/build/src/nodejs-common/service-object";
import log from "loglevel";

import serverConfig from "src/config/server";

/**
 * Permently deletes a file from gcp
 * WARNING: This makes NO ATTEMPT at any sort of auth/validation/entitlement. It also uses a "godmode" user so 
 * please take extreme caution when using this endpoint and VALIDATE BEFORE calling this function
 * @param fileName the filename (AND path if needed) to delete
 * @param bucketName bucket to delete from; defaults to bucket in config
 * @param options additional options to pass to gcp
 */
const deleteFile = async (fileName: string, bucketName?: string, options?: DeleteOptions) => {
  try {
    if(!serverConfig.googleStorage) throw new Error("GCP Storage could not start properly")
    if(!fileName || !fileName.length) throw new Error("fileName is a required param")
    
    const bucketToDeleteFrom = bucketName ?? serverConfig.userDataBucket?.name
    console.log(`Deleting data from the '${bucketToDeleteFrom}' bucket w/ the following options: ${JSON.stringify(options ?? {})}`) 

    const fileToDelete = fileName ?? ""

    const withOptions = options ?? {}

    const [result] = await serverConfig.googleStorage
      .bucket(bucketToDeleteFrom)
      .file(fileToDelete)
      .delete(withOptions)

    return result
  } catch (err: any) {
    log.error('deleteFile(): Error --', err)
    throw err;
  }
};

export { deleteFile }
