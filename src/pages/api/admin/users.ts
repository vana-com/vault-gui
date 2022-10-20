import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit, User } from "src/types";
import { encrypt, readGCSDirectory } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const users = await getUsers();

  const userResponse = getUsersResponse(users);

  console.log(JSON.stringify(userResponse, null, 2));
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json(userResponse);
};

const getUsers = async () => {
  const [files] = await readGCSDirectory();
  const usersFileNames = files.map((f) => f.name.split("/")[0]);
  const usersSet = new Set(usersFileNames);
  const users = Array.from(usersSet);
  console.log(users);
  return users;
};

const getUsersResponse = (userNames: string[]): User[] =>
  userNames.map((u: string) => {
    const exhibits: Exhibit[] = [];
    return {
      email: u,
      emailHash: encrypt(u),
      exhibits,
      needToGenerateImages: exhibits.length === 0,
      gcsBucketUrl: "",
    };
  });
