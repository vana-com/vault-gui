import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import { Users } from "src/graphql/generated";
import { ApiResponse } from "src/types/apiResponse";
import { createHasuraJWT, getIdTokenPayload } from "src/utils";
import { getOrCreateUser } from "src/utils/serverUtils";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const publicKeyToAddress = require("ethereum-public-key-to-address");

interface LoginResponse extends ApiResponse {
  user?: Users;
  hasuraToken?: string;
}

/**
 * Gets the user associated with externalId in Hasura after authenticating the user.
 * If the user doesn't exist, create one
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>,
): Promise<void> => {
  const { idToken, loginType } = req.body;
  try {
    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "Missing required params: idToken",
      } as LoginResponse);
    }

    const idTokenPayload = (await getIdTokenPayload(idToken)) as any;
    if (!idTokenPayload) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated via Web3Auth",
      } as LoginResponse);
    }

    if (idTokenPayload.wallets?.length > 0) {
      const issuer = idTokenPayload.iss || idTokenPayload.issuer;
      let emailAddress;
      let name;
      let walletAddress;
      let publicKey;

      if (issuer === config.ISSUER_OPENLOGIN) {
        // Social Login
        publicKey = idTokenPayload.wallets[0].public_key;
        walletAddress = publicKeyToAddress(publicKey);
        emailAddress = idTokenPayload.email;
        name = idTokenPayload.name;
      } else {
        // External Wallet Login
        walletAddress = idTokenPayload.wallets[0].address;
        emailAddress = `${new Date().getTime()}@dummy-email.com`;
        name = `${loginType} user`;
      }

      const externalId = walletAddress.toLowerCase();
      const hasuraJwt = await createHasuraJWT(idTokenPayload, externalId);

      const user = await getOrCreateUser(
        externalId,
        publicKey,
        name,
        emailAddress,
        loginType,
      );

      return res
        .status(200)
        .json({ success: true, user, hasuraToken: hasuraJwt } as LoginResponse);
    }

    return res.status(500).json({
      success: false,
      message: "Unable to authenticate user",
    } as LoginResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while retrieving user",
    } as LoginResponse);
  }
};
