import { File } from "@google-cloud/storage";

import { Exhibit, Gallery } from "src/types";
import { prepareExhibit } from "src/utils/serverUtils";

const getExhibitNames = (files: string[]): string[] => {
  const exhibits: string[] = [];

  files.forEach((f) => {
    const splitFiles = f.split("/");
    const exhibit = splitFiles[2];

    if (exhibit !== undefined && exhibit.length > 0) {
      exhibits.push(exhibit);
    }
  });

  const exhibitsSet = new Set(exhibits);
  return Array.from(exhibitsSet);
};

const getExhibits = async (
  exhibitFiles: File[][],
  skipPreSignedUrls = false,
): Promise<Exhibit[]> =>
  Promise.all(
    exhibitFiles.map(async (fileArr: File[]) =>
      prepareExhibit(fileArr, skipPreSignedUrls),
    ),
  );

const sortExhibitsUpdatedDesc = (exhibits: Exhibit[]): Exhibit[] =>
  exhibits.sort(
    (a: Exhibit, b: Exhibit) =>
      Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt)),
  );

/**
 * Filters through GCS files belonging to a particular user, partitions the files by exhibit, and returns list of exhibits.
 *
 * @param files - Google Cloud Storage File[] type
 * @param userHash - Hash of the user email
 * @returns An Gallery object containing list of Exhibit(s)
 */
export const getUserGallery = async (
  files: File[],
  userHash: string,
  skipPreSignedUrls = false,
): Promise<Gallery> => {
  try {
    const fileNames = files.map((file) => file.name);
    // Get all unique exhibit names for collection of user files
    const exhibitNames = getExhibitNames(fileNames);
    const exhibitFiles: File[][] = [];

    // Filter all the files and group them by their exhibit
    exhibitNames.forEach((exhibitName) => {
      const filteredFiles = files.filter(
        (f) => f.name.split("/")[2] === exhibitName,
      );
      exhibitFiles.push(filteredFiles);
    });

    const exhibitArr = await getExhibits(exhibitFiles, skipPreSignedUrls);

    return {
      userHash,
      errorMessage: "",
      exhibits: sortExhibitsUpdatedDesc(exhibitArr),
    };
  } catch (error) {
    console.error(`Error in getUserGallery for user ${userHash}`);

    let errorMessage;
    if (error instanceof Error) {
      console.error(error.stack);
      errorMessage = error.message;
    }

    return {
      userHash,
      errorMessage,
      exhibits: [],
    };
  }
};
