import type { NextApiRequest, NextApiResponse } from "next";

import { Exhibit } from "src/types";
import {
  decrypt,
  filterFiles,
  prepareExhibit,
  readGCSDirectory,
} from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Exhibit>,
): Promise<void> => {
  const { "user-email-hash": userEmailHash, "exhibit-name": exhibitName } =
    req.query;

  console.log("user-email:", userEmailHash);
  console.log("exhibit:", exhibitName);

  const decryptedUserEmail = decrypt(userEmailHash as string);
  const key = `${decryptedUserEmail}/exhibits/${exhibitName as string}`;
  const [files] = await readGCSDirectory(key);

  const filtered = filterFiles(files);

  try {
    if (filtered.length === 0) {
      const err = new Error(
        `Exhibit ${exhibitName} for user ${userEmailHash} not found or has no images`,
      );
      console.error(err);
      throw err;
    }

    const exhibit = await prepareExhibit(filtered);

    console.log(JSON.stringify(exhibit, null, 2));
    // res.setHeader("Cache-Control", "public, max-age=600");
    return res.status(200).json(exhibit);
  } catch (error) {
    console.error(error);
    // res.setHeader("Cache-Control", "public, max-age=600");
    return res
      .status(200)
      .json({ name: exhibitName as string, images: [], updatedAt: "" });
  }
};
