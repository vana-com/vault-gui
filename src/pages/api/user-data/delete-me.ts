import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";
import { getSdk } from "src/graphql/generated";
import { deleteGCSObject, getHasuraTokenPayload } from "src/utils";

/**
 * Hard delete of a Vault user account:
 * - Removes all user data files uploaded to GCS
 * - Removes all SQL data in Hasura
 *
 * If the user has completed fireboa, the delete fails after users_modules rows
 * are deleted
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { hasuraToken } = req.body;
  try {
    // Make sure they have passed in an auth token
    if (!hasuraToken) {
      return res.status(400).json({
        success: false,
        error: "Missing required parameters: hasuraToken",
      });
    }

    const hasuraTokenPayload = (await getHasuraTokenPayload(
      hasuraToken,
    )) as any;

    // Validate token & request "trusted" payload with needed identity information
    if (!hasuraTokenPayload) {
      return res.status(401).json({
        success: false,
        error: "User does not have a valid Hasura token. Please login again.",
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

    // Grab the "user" object that has info like the uuid
    const { users } = await sdk.getUserUUIDFromExternalId({
      externalId,
    });

    const { id: userId } = users && users[0];

    if (!userId) {
      // No id can be found for the user
      return res.status(400).json({ error: "Invalid user", success: false });
    }

    /**
     * Start the deletion process:
     *
     * (1) Delete file blobs from GCS (or other places in the future)
     */

    const { usersModules: storedModules } = await sdk.getAllUserModules({
      userId,
    });
    const moduleLocations = storedModules.map((mod) => mod.urlToData);

    const urlPrefix = `https://storage.googleapis.com/${serverConfig.userDataBucket?.name}/`;

    // Make paths relative
    const files = moduleLocations.map((fullPath: string) =>
      fullPath?.replace(urlPrefix, ""),
    );
    const filePromises = files.map((file: string) => deleteGCSObject(file));

    const results = await Promise.allSettled(filePromises);
    const passedFiles = results.filter((p) => p.status === "fulfilled");
    const failedFiles = results.filter((p) => p.status === "rejected");

    if (failedFiles.length) {
      log.error(
        `${failedFiles.length}/${results} deletions from gcp failed :(`,
      );
      throw new Error(`Could not delete ${failedFiles.length} files from gcp`);
    }

    /**
     * (2) Delete SQL data from hasura
     */

    // (a) Delete records from users_modules
    const { deleteManyUsersModules: deleteUserModulesRows } =
      await sdk.deleteUserModules({ userId });

    if (deleteUserModulesRows?.affected_rows !== storedModules.length) {
      throw new Error("Unable to delete all rows in users_modules");
    }

    // (b) Delete records from users
    const { deleteOneUser: deleteUserRow } = await sdk.deleteVaultUser({
      userId,
    });

    if (deleteUserRow?.id !== userId) {
      throw new Error("Unable to delete users row");
    }

    return res.status(200).json({
      success: true,
      numDeletedStoredFiles: passedFiles?.length,
      numDeletedUserModulesRows: deleteUserModulesRows?.affected_rows,
      deletedUserId: deleteUserRow?.id,
    });
  } catch (error: any) {
    log.error(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
