import { GenerateSignedPostPolicyV4Options } from "@google-cloud/storage";
import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import serverConfig from "src/config/server";
import { generateUserDataObjectName } from "src/utils/generateUserDataObjectName";

/**
 * Return a short-lived URL to allow uploading to a Google Cloud Storage bucket
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { fileName, moduleName, appPubKey, encryptedPassword } = req.query;

  console.log("req.query", req.query);
  try {
    if (fileName && moduleName && appPubKey) {
      const fullFileName = generateUserDataObjectName(
        fileName as string,
        appPubKey as string,
        moduleName as string,
      );
      const file = serverConfig.userDataBucket.file(fullFileName);
      const options = {
        expires: Date.now() + config.preSignedObjectURLTTLInMilliseconds,
        conditions: [["content-length-range", 1, config.maxFileUploadSize]],
        fields: {
          // Save module name as metadata, so we can identify which module this file belongs to
          "x-goog-meta-module-name": moduleName,
          ...(encryptedPassword && {
            "x-goog-meta-encrypted-password": encryptedPassword,
          }),
        },
      } as GenerateSignedPostPolicyV4Options;

      const [response] = await file.generateSignedPostPolicyV4(options);
      return res.status(200).json({ fullFileName, ...response });
    }

    return res.status(400).json({
      success: false,
      message: "Missing required query param",
    });
  } catch (error) {
    log.error(error);
    return res.status(500).json({});
  }
};
