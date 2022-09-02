import crypto from "crypto";
import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import { getSdk, Users } from "src/graphql/generated";
import { Sdk } from "src/graphql/generated/sdk";
import { createHasuraJWT, getIdTokenPayload } from "src/utils";

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

      const user = await getUser(
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

/**
 * Get an existing user or create a new one
 * @param sdk
 * @param externalId
 * @param name
 * @param emailAddress
 * @returns User
 */
const getUser = async (
  sdk: Sdk,
  externalId: string,
  publicKey: string,
  name: string,
  emailAddress: string,
  loginType: string,
) => {
  let user: Users;
  const { users } = await sdk.getUserFromExternalIdOrEmail({
    emailAddress,
    externalId,
  });

  if (users?.length >= 1) {
    // Found a user
    user = users[0] as Users;

    if (
      user.externalId.startsWith("google-oauth2|") ||
      user.externalId.startsWith("auth0|")
    ) {
      // Migrate user external ID from Auth0 to Web3Auth
      await sdk.updateUserExternalId({
        userId: user.id,
        externalId,
      });
      user.externalId = externalId;
    }
  } else {
    // Create a new user. Generate a dummy email for users that sign in with a wallet
    const { createOneUser } = await sdk.createUser({
      name,
      emailAddress,
      externalId,
    });
    user = createOneUser as Users;
  }

  // Create user supplementary information if none exists
  if (!user.userSupplementary) {
    // Public key is only available for social logins (torus wallets)
    const socialLoginMethod = publicKey ? loginType : null;
    const walletType = publicKey ? "torus" : loginType;
    const userSecret = crypto.randomBytes(32).toString("hex");
    const userSupplementary = {
      publicKey,
      socialLoginMethod,
      userId: user.id,
      userSecret,
      walletAddress: externalId,
      walletChain: config.WEB_3_AUTH_ETHEREUM_CHAIN_ID,
      walletType,
    };
    const { createOneUserSupplementary } = await sdk.createUserSupplementary(
      userSupplementary,
    );
    return createOneUserSupplementary?.user;
  }

  return user;
};
