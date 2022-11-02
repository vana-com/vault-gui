import { File } from "@google-cloud/storage";
import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit, User } from "src/types";
import {
  encrypt,
  getUserGallery,
  readGCSDirectory,
} from "src/utils/serverUtils";

// GCS object key prefix for "exhibits" folder
const EXHIBIT_KEY_PREFIX = "exhibits";

interface UserFiles {
  userFiles: File[];
  userEmail: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // A++ Security
  const { password } = req.query;

  // Wrong password
  if (!password || password !== process.env.HASH_EMAIL_PASSWORD) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const usersResponse = await getUsersResponse();

  return res.status(200).json(usersResponse);
};

const getUserEmails = (files: File[]) => {
  const usersFileNames = files.map((f) => f.name.split("/")[0]);
  const usersSet = new Set(usersFileNames);
  return Array.from(usersSet);
};

/**
 * Filters through GCS files and returns an array of UserFiles.
 *
 * @param files - Google Cloud Storage File[] type
 * @param userEmails - Array of user emails
 * @returns An array of UserFiles
 */
const getUserFiles = (files: File[], userEmails: string[]) => {
  const userFilesArr: UserFiles[] = [];

  // Partition all GCS exhibit files into a UserFile object
  userEmails.forEach((email) => {
    const filteredFiles = files.filter(
      (f) =>
        f.name.split("/")[0] === email &&
        f.name.split("/")[1] === EXHIBIT_KEY_PREFIX,
    );
    const userFiles = {
      userEmail: email,
      userFiles: filteredFiles,
    };
    userFilesArr.push(userFiles);
  });

  return userFilesArr;
};

const formatGCSBucketUrl = (bucket: string, userEmail: string) =>
  `https://console.cloud.google.com/storage/browser/${bucket}/${userEmail}`;

/**
 * Recursively calls the readGCSDirectory function.
 *
 * @param pageToken - The API token to fetch the next API response page
 * @returns An array of GCS File type
 */
const getAllGCSFiles = async (
  pageToken: string | undefined,
): Promise<File[]> => {
  const [files, options] = await readGCSDirectory("", "", pageToken);
  if (options !== null) {
    files.push(...(await getAllGCSFiles(options.pageToken)));
  }
  return files;
};

/**
 * Generates a User object for each user in GCS.
 *
 * @returns An array of User(s)
 */
const getUsersResponse = async (): Promise<User[]> => {
  const pageToken: string | undefined = "";

  const files = await getAllGCSFiles(pageToken);

  const userEmails = getUserEmails(files);
  const bucket = files[0].bucket.id as string;
  const userFilesArr = getUserFiles(files, userEmails);

  console.log("userEmails:", userEmails);
  console.log("number of userEmails:", userEmails.length);

  return Promise.all(
    userFilesArr.map(async (userFiles: UserFiles) => {
      const gallery = await getUserGallery(
        userFiles.userFiles,
        encrypt(userFiles.userEmail),
        true,
      );
      return {
        email: userFiles.userEmail,
        emailHash: gallery.userHash,
        exhibitNames: gallery.exhibits.map((e: Exhibit) => e.name),
        needToGenerateImages: gallery.exhibits.length === 0,
        gcsBucketUrl: formatGCSBucketUrl(bucket, userFiles.userEmail),
        errorMessage: gallery.errorMessage,
      };
    }),
  );
};
