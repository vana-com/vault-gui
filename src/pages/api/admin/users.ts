import type { NextApiRequest, NextApiResponse } from "next";

import { getUserGallery } from "src/pages/api/[user-email]/index";
import { Exhibit, User } from "src/types";
import { readGCSDirectory } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const userEmails = await getUserEmails();

  const userResponse = await getUsersResponse(userEmails);

  console.log(JSON.stringify(userResponse, null, 2));
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json(userResponse);
};

const getUserEmails = async () => {
  const [files] = await readGCSDirectory();
  const usersFileNames = files.map((f) => f.name.split("/")[0]);
  const info = files.map((f) => f.publicUrl());
  console.log("info:", info);
  const usersSet = new Set(usersFileNames);
  const users = Array.from(usersSet);
  console.log(users);
  return users;
};

const getUsersResponse = async (userEmails: string[]): Promise<User[]> =>
  Promise.all(
    userEmails.map(async (userEmail: string) => {
      const gallery = await getUserGallery(userEmail);
      return {
        email: userEmail,
        emailHash: gallery.userId,
        exhibitNames: gallery.exhibits.map((e: Exhibit) => e.name),
        needToGenerateImages: gallery.exhibits.length === 0,
        gcsBucketUrl: "",
      };
    }),
  );
