import { ZipFile } from "./zipFile";

/**
 * Extract zip contents in memory, and strip out any file types that are not allowed
 * @returns An array of sanitized files
 */
const stripZipFiles = async (files: Array<File>): Promise<Array<File>> => {
  const sanitizedFiles: Array<File> = [];
  for (let i = 0; i < files.length; i++) {
    const zipFile = new ZipFile(files[i]);
    // eslint-disable-next-line no-await-in-loop
    await zipFile.importFileSystem({ filenameEncoding: "utf-8" });
    zipFile.sanitizeFiles();
    // eslint-disable-next-line no-await-in-loop
    const strippedFile = await zipFile.exportAsFile({ bufferedWrite: true });
    sanitizedFiles.push(strippedFile);
  }
  return sanitizedFiles;
};

export { stripZipFiles };
