import type { NextApiRequest, NextApiResponse } from "next";

import { getUserGallery } from "src/pages/api/user/[user-email]/index";
import { Exhibit, User } from "src/types";
import { readGCSDirectory } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const userEmails = await getUserEmails();

  const usersResponse = await getUsersResponse(userEmails);

  console.log(JSON.stringify(usersResponse, null, 2));
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json(usersResponse);
};

const getUserEmails = async () => {
  const [files] = await readGCSDirectory();

  const usersFileNames = files.map((f) => f.name.split("/")[0]);
  const usersSet = new Set(usersFileNames);
  return Array.from(usersSet);
};

const getStorageBucketName = async (): Promise<string> => {
  const [files] = await readGCSDirectory();
  return files[0].bucket.id as string;
};

const formatGCSBucketUrl = (bucket: string, userEmail: string) =>
  `https://console.cloud.google.com/storage/browser/${bucket}/${userEmail}`;

const getUsersResponse = async (userEmails: string[]): Promise<User[]> => {
  const bucket = await getStorageBucketName();
  return Promise.all(
    userEmails.map(async (userEmail: string) => {
      const gallery = await getUserGallery(userEmail);
      return {
        email: userEmail,
        emailHash: gallery.userId,
        exhibitNames: gallery.exhibits.map((e: Exhibit) => e.name),
        needToGenerateImages: gallery.exhibits.length === 0,
        gcsBucketUrl: formatGCSBucketUrl(bucket, userEmail),
      };
    }),
  );
};
