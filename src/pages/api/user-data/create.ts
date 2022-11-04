import sgMail from "@sendgrid/mail";
import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import serverConfig from "src/config/server";
import { ApiResponse } from "src/types/apiResponse";
import { encrypt } from "src/utils/serverUtils";

/**
 * API callback for new submissions
 */
const create = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
): Promise<void> => {
  const { email, timestamp } = req.query;
  const ts = parseInt(timestamp as string, 10);

  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: email",
      } as ApiResponse);
    }

    await createDoneFile(email as string, ts);
    await sendSlackNotification(email as string);
    await sendSubmissionEmail(email as string);

    return res.status(200).json({ success: true } as ApiResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      message: "Error while creating new submission",
      success: false,
    } as ApiResponse);
  }
};

/**
 * Uploads a 'done.txt' file to the user's <email>/uploads/ path in GCS
 * @param email
 * @param timestamp
 */
const createDoneFile = async (email: string, timestamp: number) => {
  const destinationFilename = `${email}/uploads/${timestamp}/done.txt`;
  await serverConfig.userDataBucket.file(destinationFilename).save("done");
  console.log(`${destinationFilename} uploaded`);
};

/**
 * Sends a confirmation email to user that we received their images
 * @param email
 */
const sendSubmissionEmail = async (email: string) => {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    try {
      const msg = {
        to: email,
        from: config.vanaPortraitEmail,
        template_id: config.submissionEmailTemplateId,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sgMail.send(msg);
    } catch (error) {
      console.error("Error sending submission email", error);
    }
  }
};

/**
 * In prod, send a slack notification for new submissions
 * @param email
 */
const sendSlackNotification = async (email: string) => {
  if (
    process.env.SLACK_WEBHOOK_URL &&
    process.env.NEXT_PUBLIC_ENV === "production"
  ) {
    const hashedEmail = encrypt(email as string);
    const gcsUrl = `https://console.cloud.google.com/storage/browser/${process.env.GCP_DATA_COLLECTIVE_BUCKET_NAME}/${email}`;
    const galleryUrl = `${config.appBaseUrl}/user/${hashedEmail}`;

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
              text: `New Portrait submission\nEmail: ${email}\nGCS: ${gcsUrl}\nGallery: ${galleryUrl}`,
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
                url: gcsUrl,
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "User Gallery",
                },
                url: galleryUrl,
              },
            ],
          },
        ],
      }),
    });
  }
};

export default create;
