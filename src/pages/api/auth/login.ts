import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import { getSdk } from "src/graphql/generated";
import { createHasuraJWT, getIdTokenPayload } from "src/utils";

/**
 * Gets the user associated with appPubKey in Hasura after authenticating the user.
 * If the user doesn't exist, create one
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { idToken, walletAddress } = req.body;
  try {
    if (!idToken && !walletAddress) {
      return res.status(400).json({
        message: "Missing required params: idToken or walletAddress",
      });
    }

    let externalId = walletAddress;
    let emailAddress = `${new Date().getTime()}@dummy-email.com`;
    let name = `Wallet User`;
    let hasuraJwt;

    if (idToken) {
      const idTokenPayload = (await getIdTokenPayload(idToken)) as any;
      if (!idTokenPayload) {
        return res.status(401).json({
          message: "User not authenticated via Web3Auth",
        });
      }

      externalId = idTokenPayload.wallets[0]?.public_key;
      emailAddress = idTokenPayload.email;
      name = idTokenPayload.name;
      hasuraJwt = await createHasuraJWT(idTokenPayload, externalId);
    } else {
      hasuraJwt = await createHasuraJWT(undefined, externalId);
    }

    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_DOCKER_URL as string,
      {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
        },
      },
    );

    const sdk = getSdk(graphQLClient);

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

    return res.status(200).json({ user, hasuraToken: hasuraJwt });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ message: "Error while retrieving user" });
  }
};
