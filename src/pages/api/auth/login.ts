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
  const { idToken, issuer } = req.body;
  try {
    if (!idToken || !issuer) {
      return res.status(400).json({
        message: "Missing required params: idToken or issuer",
      });
    }

    const idTokenPayload = (await getIdTokenPayload(idToken, issuer)) as any;

    if (!idTokenPayload) {
      return res.status(401).json({
        message: "User not authenticated via Web3Auth",
      });
    }

    const appPubKey = idTokenPayload?.wallets[0]?.public_key;
    const emailAddress = idTokenPayload?.email || "";
    const hasuraJwt = await createHasuraJWT(idTokenPayload);

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
      externalId: appPubKey,
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
          externalId: appPubKey,
        });
        user.externalId = appPubKey;
      }
    } else {
      // Create a new user. Generate a dummy email for users that sign in with a wallet
      const { createOneUser } = await sdk.createUser({
        name: idTokenPayload?.name as string,
        emailAddress:
          (idTokenPayload?.email as string) ||
          `${new Date().getTime()}@dummy-email.com`,
        externalId: appPubKey as string,
      });
      user = createOneUser;
    }

    return res.status(200).json({ user, hasuraToken: hasuraJwt });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ message: "Error while retrieving user" });
  }
};
