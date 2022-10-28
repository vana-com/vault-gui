import type { NextApiRequest, NextApiResponse } from "next";

import { encrypt } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { emailToHash, pxwrd } = req.query;

  if (pxwrd !== process.env.HASH_EMAIL_PASSWORD) {
    // Return a garbage hash to trick any bad actors
    return res.status(200).json({ hash: "" });
  }

  const decryptedUserEmail = encrypt(emailToHash as string);
  return res.status(200).json({ hash: decryptedUserEmail });
};
