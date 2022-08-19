import publicKeyToAddress from "ethereum-public-key-to-address";
import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import { getSdk } from "src/graphql/generated";
import { Sdk } from "src/graphql/generated/sdk";
import { createHasuraJWT, getIdTokenPayload } from "src/utils";

/**
 * Gets the user associated with externalId in Hasura after authenticating the user.
 * If the user doesn't exist, create one
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { idToken } = req.body;
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

      if (issuer === "https://api.openlogin.com") {
        // Social Login
        walletAddress = publicKeyToAddress(
          idTokenPayload.wallets[0].public_key,
        );
        emailAddress = idTokenPayload.email;
        name = idTokenPayload.name;
      } else {
        // External Wallet Login
        walletAddress = idTokenPayload.wallets[0].address;
        emailAddress = `${new Date().getTime()}@dummy-email.com`;
        name = `Wallet User`;
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

      const user = await getUser(sdk, externalId, name, emailAddress);

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
  name: string,
  emailAddress: string,
) => {
  let user;
  const { users } = await sdk.getUserFromExternalIdOrEmail({
    emailAddress,
    externalId,
  });

  if (users?.length >= 1) {
    // Found a user
    [user] = users;

    if (
      users[0].externalId.startsWith("google-oauth2|") ||
      users[0].externalId.startsWith("auth0|")
    ) {
      // Migrate user external ID from Auth0 to Web3Auth
      await sdk.updateUserExternalId({
        userId: users[0].id,
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
    user = createOneUser;
  }

  return user;
};
