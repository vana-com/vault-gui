import {
  GetSignedUrlConfig,
} from "@google-cloud/storage";
import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";

/**
 * Return a short-lived URL to allow uploading to a Google Cloud Storage bucket
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { unsignedURL } = req.body;

  // https://storage.googleapis.com/vana-userdata-development/027fdca260cf006008997a606057b7fcf728b80ef313b4cab45942d4793d958dff/instagram/1344556800-228-joe.in.nyc_20220701.zip.enc

  try {

    console.log('im dumb');

    // Stupidly strip the file url to get the filename
    const fileName = (unsignedURL as string).replace('https://storage.googleapis.com/vana-userdata-development/', '')
    
    // These options will allow temporary read access to the file
    const options = {
      version: "v4",
      action: "read",
      expires: Date.now() + 1 * 60 * 1000, // 1 minute
    } as GetSignedUrlConfig;

    // Get a v4 signed URL for reading the file
    const [ signedUrl ] = await serverConfig.userDataBucket.file(fileName).getSignedUrl(options);

    console.log('signedUrl', signedUrl);

    return res.status(200).json({signedUrl})
  } catch (error) {
    log.error(error);
    return res
      .status(500)
      .json({ message: "Error while generating signed URL" });
  }
};
