import { whitelistUrl } from "@toruslabs/openlogin";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import config from "src/config/";
// import serverConfig from "src/config/server";

// const ALLOWED_ORIGINS = [serverConfig.vercelPreviewUrlRegex];

/**
 * Creates a signature for any of the whitelisted origins above for Web3Auth
 * Allows us to control whitelisted origins through code, rather than through the Web3Auth console
 * https://github.com/orgs/Web3Auth/discussions/351
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { origin } = req.headers;
  if (!origin) {
    return res.status(400).json({
      message: "Request origin must be provided through origin header",
    });
  }

  // TODO: re-enable this
  // if (ALLOWED_ORIGINS.some((o) => o.test(origin))) {
  try {
    const signature = await whitelistUrl(
      config.WEB_3_AUTH_CLIENT_ID,
      config.WEB_3_AUTH_CLIENT_SECRET,
      origin,
    );
    return res.status(200).json({ origin, signature });
  } catch (error) {
    log.error(error);
    return res
      .status(500)
      .json({ message: "Error getting signature for origin" });
  }
  // } else {
  //   return res
  //     .status(500)
  //     .json({ message: `Unable to create signature for origin ${origin}` });
  // }
};
