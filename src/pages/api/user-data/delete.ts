import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";
import { getSdk } from "src/graphql/generated";
import { getHasuraTokenPayload } from "src/utils";

/**
 * Delete the file in objects store for a specific users_modules rows and set the
 * status of the associated row in users_modules is set to DELETED.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { hasuraToken, usersModulesIds } = req.body;
  try {
    if (!hasuraToken || !usersModulesIds) {
      return res.status(400).json({
        deleteSuccessful: false,
        message: "Missing required parameters: hasuraToken or usersModulesIds",
      });
    }

    const hasuraTokenPayload = (await getHasuraTokenPayload(
      hasuraToken,
    )) as any;

    if (!hasuraTokenPayload) {
      return res.status(401).json({
        deleteSuccessful: false,
        message: "User does not have a valid Hasura token. Please login again.",
      });
    }

    const externalId =
      hasuraTokenPayload["https://hasura.io/jwt/claims"]["x-hasura-user-id"];

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
      externalId,
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
        try {
          // eslint-disable-next-line no-await-in-loop
          const [response] = await file.delete();

          if (response.statusCode >= 200 && response.statusCode < 300) {
            usersModulesIdsToSoftDelete.push(usersModules[i].id);
            filesDeleted.push(fileName);
          }
        } catch (e: any) {
          if (e.code === 404) {
            console.warn(`File not found on GCS: ${fileName}`);
            usersModulesIdsToSoftDelete.push(usersModules[i].id);
            filesDeleted.push(fileName);
          } else {
            console.error("Error deleting file", e);
          }
        }
      }
    }

    console.log("usersModulesIdsToSoftDelete", usersModulesIdsToSoftDelete);

    await sdk.softDeleteUserModules({
      userId,
      usersModulesIds: usersModulesIdsToSoftDelete,
    });

    return res.status(200).json({ filesDeleted, deleteSuccessful: true });
  } catch (error: any) {
    log.error(error);
    return res.status(500).json({
      deleteSuccessful: false,
      message: "Error while deleting user data",
    });
  }
};
