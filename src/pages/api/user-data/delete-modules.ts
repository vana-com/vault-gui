import log from "loglevel";
import type { NextApiRequest, NextApiResponse } from "next";

import serverConfig from "src/config/server";
import { withMiddleware } from "src/middleware";
import { ApiResponse } from "src/types/apiResponse";
import { deleteGCSObject, getHasuraClient } from "src/utils/serverUtils";

/**
 * Delete the file in objects store for a specific users_modules rows and set the
 * status of the associated row in users_modules is set to DELETED.
 */
const deleteModules = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
): Promise<void> => {
  const { user, usersModulesIds } = req.body;
  try {
    if (!usersModulesIds) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: usersModulesIds",
      } as ApiResponse);
    }

    const adminHasuraClient = getHasuraClient();
    const { usersModules: modulesToDelete } =
      await adminHasuraClient.getUsersModulesFromIds({
        usersModulesIds,
        userId: user.id,
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
      await adminHasuraClient.softDeleteUserModules({
        userId: user.id,
        usersModulesIds,
      });

    if (updateUserModulesRows?.affected_rows !== modulesToDelete.length) {
      throw new Error(
        `Deleted hasura user module count did not match expected length -- affected_rows: ${updateUserModulesRows?.affected_rows},
         num modules to delete: ${modulesToDelete.length}`,
      );
    }

    return res.status(200).json({ success: true } as ApiResponse);
  } catch (error) {
    log.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting user data",
    } as ApiResponse);
  }
};

export default withMiddleware("withAuthenticatedUser")(deleteModules);
