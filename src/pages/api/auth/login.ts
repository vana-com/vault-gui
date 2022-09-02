import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import { getSdk } from "src/graphql/generated";
import { createHasuraJWT, getIdTokenPayload, getOrCreateUser } from "src/utils";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const publicKeyToAddress = require("ethereum-public-key-to-address");

/**
 * Gets the user associated with externalId in Hasura after authenticating the user.
 * If the user doesn't exist, create one
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { idToken, loginType } = req.body;
  try {
    if (!idToken) {
      return res.status(400).json({
        message: "Missing required params: idToken",
      });
    }

    const idTokenPayload = (await getIdTokenPayload(idToken)) as any;
    if (!idTokenPayload) {
      return res.status(401).json({
        message: "User not authenticated via Web3Auth",
      });
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

      const graphQLClient = new GraphQLClient(
        process.env.NEXT_PUBLIC_HASURA_GRAPHQL_DOCKER_URL as string,
        {
          headers: {
            "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
          },
        },
      );
      const sdk = getSdk(graphQLClient);

      const user = await getOrCreateUser(
        sdk,
        externalId,
        publicKey,
        name,
        emailAddress,
        loginType,
      );

      return res.status(200).json({ user, hasuraToken: hasuraJwt });
    }

    return res.status(500).json({
      message: "Unable to authenticate user",
    });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ message: "Error while retrieving user" });
  }
};
