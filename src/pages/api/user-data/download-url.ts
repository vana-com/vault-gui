import { GetSignedUrlConfig } from "@google-cloud/storage";
import { GraphQLClient } from "graphql-request";
import log from "loglevel";
import { NextApiRequest, NextApiResponse } from "next";

import config from "src/config";
import serverConfig from "src/config/server";
import { getSdk } from "src/graphql/generated";
import { getHasuraTokenPayload } from "src/utils";

/**
 * Return a short-lived URL to allow downloading the user data.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { hasuraToken, userModuleId } = req.body;
  try {
    if (!hasuraToken || !userModuleId) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: hasuraToken or usersModuleId",
      });
    }

    const hasuraTokenPayload = (await getHasuraTokenPayload(
      hasuraToken,
    )) as any;

    if (!hasuraTokenPayload) {
      return res.status(401).json({
        success: false,
        message: "User does not have a valid Hasura token. Please login again.",
      });
    }

    const externalId =
      hasuraTokenPayload["https://hasura.io/jwt/claims"]["x-hasura-user-id"];

    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_DOCKER_URL as string,
      {
        headers: {
          Authorization: `Bearer ${hasuraToken}`,
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
      return res.status(400).json({ error: "Invalid user", success: false });
    }

    const { usersModules } = await sdk.getUsersModulesFromIds({
      usersModulesIds: [userModuleId],
      userId,
    });

    if (usersModules && usersModules.length > 0) {
      const { urlToData } = usersModules[0];
      const urlParts = urlToData.split(`${serverConfig.userDataBucket.name}/`);
      if (urlParts.length === 2) {
        const fileName = urlParts[1];

        // These options will allow temporary read access to the file
        const options = {
          version: "v4",
          action: "read",
          expires: Date.now() + config.preSignedObjectURLTTLInMilliseconds,
        } as GetSignedUrlConfig;

        // Get a v4 signed URL for reading the file
        const [signedUrl] = await serverConfig.userDataBucket
          .file(fileName)
          .getSignedUrl(options);

        return res.status(200).json({ signedUrl, success: true });
      }
    }
    return res
      .status(404)
      .json({ message: "User module not found", success: false });
  } catch (error) {
    log.error(error);
    return res
      .status(500)
      .json({ message: "Error while generating signed URL", success: false });
  }
};
