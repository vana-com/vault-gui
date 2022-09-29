import { NextApiRequest, NextApiResponse } from "next";
import type { Middleware } from "next-api-middleware";

import { ApiResponse } from "src/types/apiResponse";
import { getHasuraTokenPayload } from "src/utils";
import { getHasuraClient } from "src/utils/serverUtils";

export const withAuthenticatedUser: Middleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next,
) => {
  const { authorization } = req.headers;
  const hasuraToken = authorization?.replace("Bearer ", "");

  // Make sure we have a valid auth token
  if (!hasuraToken) {
    return res.status(400).json({
      success: false,
      error: "Missing required Authorization header",
    } as ApiResponse);
  }

  const hasuraTokenPayload = (await getHasuraTokenPayload(hasuraToken)) as any;

  // Validate token & request "trusted" payload with needed identity information
  if (!hasuraTokenPayload) {
    return res.status(401).json({
      success: false,
      error: "User does not have a valid Hasura token. Please login again.",
    } as ApiResponse);
  }

  const sdk = getHasuraClient(hasuraToken);

  // Retrieve the external ID from the hasura token
  const externalId =
    hasuraTokenPayload["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
  const { users } = await sdk.getUserFromExternalIdOrEmail({
    externalId,
    emailAddress: "",
  });

  if (!users || users[0]) {
    // No id can be found for the user
    return res
      .status(400)
      .json({ error: "Unable to find a user", success: false } as ApiResponse);
  }

  req.body = { user: users[0], hasuraClient: sdk, ...req.body };
  return next();
};
