import type { NextApiRequest, NextApiResponse } from "next";

import { Gallery } from "src/types";
import {
  decrypt,
  getUserGallery,
  readGCSDirectory,
} from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Gallery>,
): Promise<void> => {
  const { "user-email-hash": userEmailHash } = req.query;

  const userEmail = decrypt(userEmailHash as string);
  const keyPrefix = `${userEmail}/exhibits/`;
  const [files] = await readGCSDirectory(keyPrefix);

  const response = await getUserGallery(files, userEmailHash as string);

  console.log(JSON.stringify(response, null, 2));
  // res.setHeader("Cache-Control", "public, max-age=600");
  return res.status(200).json(response);
};
