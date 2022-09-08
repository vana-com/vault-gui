import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";
import { withMiddleware } from "src/middleware";
import { ApiResponse } from "src/types/apiResponse";
import { deleteGCSObject, getHasuraClient } from "src/utils/serverUtils";

interface DeleteMeResponse extends ApiResponse {
  numDeletedStoredFiles?: number;
  numDeletedUserModulesRows?: number;
  deletedUserId?: string;
}

/**
 * Hard delete of a Vault user account:
 * - Removes all user data files uploaded to GCS
 * - Removes all SQL data in Hasura
 *
 * If the user has completed fireboa, the delete fails after users_modules rows
 * are deleted
 */
const deleteMe = async (
  req: NextApiRequest,
  res: NextApiResponse<DeleteMeResponse>,
): Promise<void> => {
  const { user } = req.body;
  try {
    const adminHasuraClient = getHasuraClient();

    /**
     * Start the deletion process:
     *
     * (1) Delete file blobs from GCS (or other places in the future)
     */

    const { usersModules: storedModules } =
      await adminHasuraClient.getAllUserModules({
        userId: user.id,
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
      await adminHasuraClient.deleteUserModules({ userId: user.id });

    if (deleteUserModulesRows?.affected_rows !== storedModules.length) {
      throw new Error("Unable to delete all rows in users_modules");
    }

    // (b) Delete records from users
    const { deleteOneUser: deleteUserRow } =
      await adminHasuraClient.deleteVaultUser({
        userId: user.id,
      });

    if (deleteUserRow?.id !== user.id) {
      throw new Error("Unable to delete users row");
    }

    return res.status(200).json({
      success: true,
      numDeletedStoredFiles: passedFiles?.length,
      numDeletedUserModulesRows: deleteUserModulesRows?.affected_rows,
      deletedUserId: deleteUserRow?.id,
    } as DeleteMeResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to delete user account",
    } as DeleteMeResponse);
  }
};

export default withMiddleware("withAuthenticatedUser")(deleteMe);
