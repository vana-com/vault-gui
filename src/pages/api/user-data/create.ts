import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import { ApiResponse } from "src/types/apiResponse";
import { encrypt } from "src/utils/serverUtils";

/**
 * API callback for new submissions
 */
const create = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
): Promise<void> => {
  const { email } = req.query;

  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: email",
      } as ApiResponse);
    }

    // In prod, send a slack notification for new submissions
    if (
      process.env.SLACK_WEBHOOK_URL &&
      process.env.NEXT_PUBLIC_ENV === "production"
    ) {
      const hashedEmail = encrypt(email as string);
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `New Portrait submission from\n${email}`,
              },
            },
            {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "View Submission",
                  },
                  url: `https://console.cloud.google.com/storage/browser/${process.env.GCP_DATA_COLLECTIVE_BUCKET_NAME}/${email}`,
                },
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "User Gallery",
                  },
                  url: `${config.appBaseUrl}/user/${hashedEmail}`,
                },
              ],
            },
          ],
        }),
      });
    }

    return res.status(200).json({ success: true } as ApiResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      message: "Error while creating new submission",
      success: false,
    } as ApiResponse);
  }
};

export default create;
