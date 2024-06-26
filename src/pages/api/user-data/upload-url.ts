import { GenerateSignedPostPolicyV4Options } from "@google-cloud/storage";
import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import serverConfig from "src/config/server";
import { withMiddleware } from "src/middleware";
import { ApiResponse } from "src/types/apiResponse";
import { generateUserDataObjectName } from "src/utils/generateUserDataObjectName";

interface UploadUrlResponse extends ApiResponse {
  fullFileName?: string;
}

/**
 * Return a short-lived URL to allow uploading to a Google Cloud Storage bucket
 */
const uploadUrl = async (
  req: NextApiRequest,
  res: NextApiResponse<UploadUrlResponse>,
): Promise<void> => {
  const { fileName, moduleName, user } = req.body;

  try {
    if (fileName && moduleName) {
      const fullFileName = generateUserDataObjectName(
        fileName as string,
        user.externalId,
        moduleName as string,
      );
      const file = serverConfig.userDataBucket.file(fullFileName);
      const options = {
        expires: Date.now() + config.preSignedObjectURLTTLInMilliseconds,
        conditions: [["content-length-range", 1, config.maxFileUploadSize]],
        fields: {
          // Save module name as metadata, so we can identify which module this file belongs to
          "x-goog-meta-module-name": moduleName,
        },
      } as GenerateSignedPostPolicyV4Options;

      const [response] = await file.generateSignedPostPolicyV4(options);
      return res.status(200).json({
        success: true,
        fullFileName,
        ...response,
      } as UploadUrlResponse);
    }

    return res.status(400).json({
      success: false,
      message: "Missing required body param",
    } as UploadUrlResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while generating upload URL",
    } as UploadUrlResponse);
  }
};

export default withMiddleware("withAuthenticatedUser")(uploadUrl);
