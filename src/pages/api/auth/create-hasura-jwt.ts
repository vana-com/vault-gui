import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import { getSdk } from "src/graphql/generated";
import { createHasuraJWT, verifyWeb3AuthAuthentication } from "src/utils";

/**
 * Creates the Hasura JWT a user needs to authenticate with Hasura.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { idToken, appPubKey } = req.body;
  try {
    if (!idToken || !appPubKey) {
      return res.status(400).json({
        message: "Missing required query param",
      });
    }

    if (!verifyWeb3AuthAuthentication(idToken, appPubKey)) {
      return res.status(401).json({
        message: "User not authenticated via Web3Auth",
      });
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

    const { users } = await sdk.getUserUUIDFromExternalId({
      externalId: appPubKey,
    });

    const { id: userId } = users && users[0];

    if (!userId) {
      // users don't exist
      log.error("Non-existant user requested Hasura JWT");
      return res.status(400).json({ error: "Invalid user" });
    }

    const hasuraJWT = await createHasuraJWT(idToken, appPubKey);

    return res.status(200).json({ hasuraJWT });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ message: "Error while retrieving user" });
  }
};
