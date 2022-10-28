import type { NextApiRequest, NextApiResponse } from "next";

import { encrypt } from "src/utils/serverUtils";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { emailToHash, password } = req.query;

  // Wrong password
  if (password !== process.env.HASH_EMAIL_PASSWORD) {
    return res.status(200).json({ hash: "" });
  }

  const decryptedUserEmail = encrypt(emailToHash as string);
  return res.status(200).json({ hash: decryptedUserEmail });
};
