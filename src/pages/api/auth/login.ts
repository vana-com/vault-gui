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
    const hasuraJwt = await createHasuraJWT(idTokenPayload);

    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_DOCKER_URL as string,
      {
        headers: {
          Authorization: `Bearer ${hasuraJwt}`,
        },
      },
    );

    const sdk = getSdk(graphQLClient);

    const { users } = await sdk.getUserUUIDFromExternalId({
      externalId: appPubKey,
    });

    const userId = users && users.length === 1 ? users[0].id : undefined;

    let user;
    if (!userId) {
      const { createOneUser } = await sdk.createUser({
        name: idTokenPayload?.name as string,
        emailAddress: idTokenPayload?.email as string,
        externalId: appPubKey as string,
      });
      user = createOneUser;
    } else {
      [user] = users;
    }

    return res.status(200).json({ user, hasuraToken: hasuraJwt });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ message: "Error while retrieving user" });
  }
};
