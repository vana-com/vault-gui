import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "../../config/server";
import { getSdk } from "../../graphql/generated";
import { verifyWeb3AuthAuthentication } from "../../utils";

/**
 * Delete the file in objects store for a specific users_modules rows and set the
 * status of the associated row in users_modules is set to DELETED.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { idToken, appPubKey, usersModulesIds } = req.body;
  try {
    if (!idToken || !appPubKey) {
      return res.status(400).json({
        deleteSuccessful: false,
        message: "Missing required query param",
      });
    }

    if (!verifyWeb3AuthAuthentication(idToken, appPubKey)) {
      return res.status(401).json({
        deleteSuccessful: false,
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
      // No id can be found for the user
      return res
        .status(400)
        .json({ error: "Invalid user", deleteSuccessful: false });
    }

    const { usersModules } = await sdk.getUsersModulesFromIds({
      usersModulesIds,
      userId,
    });

    const usersModulesIdsToSoftDelete = [];
    const filesDeleted = [];
    for (let i = 0; i < usersModules.length; i++) {
      const { urlToData } = usersModules[i];
      const urlParts = urlToData.split(`${serverConfig.userDataBucket.name}/`);
      if (urlParts.length === 2) {
        const fileName = urlParts[1];
        const file = serverConfig.userDataBucket.file(fileName);
        // eslint-disable-next-line no-await-in-loop
        const [response] = await file.delete();

        if (response.statusCode >= 200 && response.statusCode < 300) {
          usersModulesIdsToSoftDelete.push(usersModules[i].id);
          filesDeleted.push(fileName);
        }
      }
    }

    console.log("usersModulesIdsToSoftDelete", usersModulesIdsToSoftDelete);

    await sdk.softDeleteUserModules({
      userId,
      usersModulesIds: usersModulesIdsToSoftDelete,
    });

    return res.status(200).json({ filesDeleted, deleteSuccessful: true });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ deleteSuccessful: false });
  }
};
