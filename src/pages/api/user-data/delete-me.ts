import { m } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";
import { getSdk } from "src/graphql/generated";
import { getHasuraTokenPayload } from "src/utils";

import { deleteFile } from "src/utils/gcp/deleteFile";

/**
 * Delete the file in objects store for a specific users_modules rows and set the
 * status of the associated row in users_modules is set to DELETED.
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
        deleteSuccessful: false,
        message: "Missing required parameters: hasuraToken",
      });
    }

    const hasuraTokenPayload = (await getHasuraTokenPayload(
      hasuraToken,
    )) as any;

    // Validate token & request "trusted" payload with needed identity information
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

    // Grab the "user" object that has info like the uuid
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

    /**
     * Here we actually start the "hard" deletion process. This includes:
     *  - (1) Data stored / uploaded
     *  - (2) Generated account information 
     */

    /**
     * (1) Delete file blobs from GCS (or other places in the future)
     */

    const { usersModules: modules } = await sdk.getUserModulesAll({ userId })
    const moduleLocations = modules.map((mod) => mod.urlToData);

    const urlPrefix = `https://storage.googleapis.com/${serverConfig.userDataBucket?.name}/`

    // Make paths relative
    const files = moduleLocations.map((fullPath: string) => fullPath?.replace(urlPrefix, ''))
    const filePromises = files.map((file: string) => deleteFile(file))

    const results = await Promise.allSettled(filePromises);
    const passedFiles = results.filter((p) => p.status === 'fulfilled');
    const failedFiles = results.filter((p) => p.status === 'rejected');

    // TODO: What to do when file deletion (partially) failed on the first run???
    if (failedFiles.length) {
      console.log(`${failedFiles.length}/${results} deletions from gcp failed :(`)
    }

    /**
     * (2) Delete SQL data from hasura
     */

    // (a) Delete records from user_modules
    const { deleteManyUsersModules: deleteUserModulesRows } = await sdk.deleteUserModules({ userId })

    // (b) Delete records from users
    const { deleteOneUser: deleteUserRow } = await sdk.deleteVaultUser({ userId })

    // 🎉 All done 🎉
    return res.status(200).json({
      success: true,
      deletedUploadFiles: passedFiles?.length,
      deletedUserModulesVana: deleteUserModulesRows?.affected_rows,
      deleteUserIdVana: deleteUserRow?.id
    });
  } catch (error: any) {
    log.error(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
