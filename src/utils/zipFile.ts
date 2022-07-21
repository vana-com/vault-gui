import * as zip from "@zip.js/zip.js";

import config from "../config";

/**
 * Class used for managing Zip files.
 *
 * Once a zip file is imported, it is turned into a file system,
 * so easy file operations can be performed on the individual
 * files inside the zip.
 */
export class ZipFile {
  fileSystem: zip.FS;

  file: File;

  constructor(file: File) {
    this.file = file;
    this.fileSystem = new zip.fs.FS();
  }

  /**
   * @returns Root of the file system
   */
  getRoot(): zip.ZipDirectoryEntry {
    return this.fileSystem.root;
  }

  /**
   * Remove a file from the file system
   * @param entry file or directory to remove
   */
  remove(entry: zip.ZipEntry): void {
    this.fileSystem.remove(entry);
  }

  /**
   * Export current file system as a zip file
   * @param options zip.fs options object
   * @returns a zip file
   */
  async exportAsFile(
    options: zip.ZipDirectoryEntryExportOptions,
  ): Promise<File> {
    const blob = await this.getRoot().exportBlob(options);
    return new File([blob], this.file.name);
  }

  /**
   * Create a file system from a zip file
   * @param options zip.fs options object
   */
  async importFileSystem(
    options: zip.ZipDirectoryEntryExportOptions,
  ): Promise<void> {
    await this.getRoot().importBlob(this.file, options);
  }

  /**
   * Remove any unwanted files from file system
   */
  sanitizeFiles(): void {
    const entriesToRemove: zip.ZipEntry[] = [];
    this.collectFilesToRemove(this.getRoot(), entriesToRemove);
    entriesToRemove.map((entry) => this.remove(entry));
  }

  /**
   * Recursively iterate through files in the file system,
   * building a list of files that are not whitelisted
   * @param zipEntry - Root directory within filesystem of where to start looking from
   * @param entriesToRemove - Current list of filesystem entries to remove
   */
  private collectFilesToRemove(
    zipEntry: zip.ZipEntry,
    entriesToRemove: Array<zip.ZipEntry>,
  ): void {
    if (zipEntry instanceof zip.fs.ZipDirectoryEntry) {
      zipEntry.children.map((zipEntryChild) =>
        this.collectFilesToRemove(zipEntryChild, entriesToRemove),
      );
    } else if (zipEntry instanceof zip.fs.ZipFileEntry) {
      const fileMimeType = zip.getMimeType(zipEntry.name);
      if (!config.whitelistedFileMimeTypes.includes(fileMimeType)) {
        entriesToRemove.push(zipEntry);
      }
    }
  }
}
