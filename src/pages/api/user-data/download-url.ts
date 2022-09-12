import { GetSignedUrlConfig } from "@google-cloud/storage";
import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import serverConfig from "src/config/server";
import { withMiddleware } from "src/middleware/";
import { ApiResponse } from "src/types/apiResponse";

interface DownloadUrlResponse extends ApiResponse {
  signedUrl?: string;
}

/**
 * Return a short-lived URL to allow downloading the user data.
 */
const downloadUrl = async (
  req: NextApiRequest,
  res: NextApiResponse<DownloadUrlResponse>,
): Promise<void> => {
  const { hasuraClient, userModuleId, user } = req.body;
  try {
    if (!userModuleId) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: userModuleId",
      } as DownloadUrlResponse);
    }

    const { usersModules } = await hasuraClient.getUsersModulesFromIds({
      usersModulesIds: [userModuleId],
      userId: user.id,
    });

    if (usersModules && usersModules.length > 0) {
      const { urlToData } = usersModules[0];
      const urlParts = urlToData.split(`${serverConfig.userDataBucket.name}/`);
      if (urlParts.length === 2) {
        const fileName = urlParts[1];

        // These options will allow temporary read access to the file
        const options = {
          version: "v4",
          action: "read",
          expires: Date.now() + config.preSignedObjectURLTTLInMilliseconds,
        } as GetSignedUrlConfig;

        // Get a v4 signed URL for reading the file
        const [signedUrl] = await serverConfig.userDataBucket
          .file(fileName)
          .getSignedUrl(options);

        return res
          .status(200)
          .json({ signedUrl, success: true } as DownloadUrlResponse);
      }
    }
    return res.status(404).json({
      message: "User module not found",
      success: false,
    } as DownloadUrlResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      message: "Error while generating signed URL",
      success: false,
    } as DownloadUrlResponse);
  }
};

export default withMiddleware("withAuthenticatedUser")(downloadUrl);
