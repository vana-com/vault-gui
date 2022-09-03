import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";
import { getSdk } from "src/graphql/generated";
import { getHasuraTokenPayload } from "src/utils";
import { deleteGCSObject } from "src/utils/serverUtils";

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

    const { usersModules: modulesToDelete } = await sdk.getUsersModulesFromIds({
      usersModulesIds,
      userId,
    });

    /**
     * 1) Delete file blobs from GCS (or other places in the future)
     */

    const moduleLocations = modulesToDelete.map((mod) => mod.urlToData);
    const urlPrefix = `https://storage.googleapis.com/${serverConfig.userDataBucket?.name}/`;

    // Make paths relative
    const files = moduleLocations.map((fullPath: string) =>
      fullPath?.replace(urlPrefix, ""),
    );
    const filePromises = files.map((file: string) => deleteGCSObject(file));

    const results = await Promise.allSettled(filePromises);
    const failedFiles = results.filter((p) => p.status === "rejected");

    if (failedFiles.length) {
      log.error(
        `${failedFiles.length}/${results} deletions from gcp failed :(`,
      );
      throw new Error(`Could not delete ${failedFiles.length} files from gcp`);
    }

    /**
     * 2) Soft delete user module rows
     */
    const { updateManyUsersModules: updateUserModulesRows } =
      await sdk.softDeleteUserModules({
        userId,
        usersModulesIds,
      });

    if (updateUserModulesRows?.affected_rows !== modulesToDelete.length) {
      throw new Error(
        `Deleted hasura user module count did not match expected length -- affected_rows: ${updateUserModulesRows?.affected_rows},
         num modules to delete: ${modulesToDelete.length}`,
      );
    }

    return res.status(200).json({ deleteSuccessful: true });
  } catch (error: any) {
    log.error(error);
    return res.status(500).json({
      deleteSuccessful: false,
      message: "Error while deleting user data",
      error,
    });
  }
};
