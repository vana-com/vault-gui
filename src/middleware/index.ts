import { label } from "next-api-middleware";

import { withAuthenticatedUser } from "./withAuthenticatedUser";

/**
 * Register all middlewares with next-api-middleware
 */
const withMiddleware = label(
  {
    withAuthenticatedUser,
  },
  [], // List of middlewares to call automatically
);

export { withMiddleware };
