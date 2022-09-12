import { GraphQLClient } from "graphql-request";

import { getSdk } from "src/graphql/generated";
import { Sdk } from "src/graphql/generated/sdk";

type HasuraAuthHeaders = {
  authorization?: string;
  "x-hasura-admin-secret"?: string;
};

/**
 * Get an admin Hasura GraphQL client
 * @param hasuraToken - Retrieve a non-admin Hasura client if provided
 * @returns
 */
const getHasuraClient = (hasuraToken = ""): Sdk => {
  const headers: HasuraAuthHeaders = {};
  if (hasuraToken) {
    headers.authorization = `Bearer ${hasuraToken}`;
  } else {
    headers["x-hasura-admin-secret"] = process.env
      .HASURA_ADMIN_SECRET as string;
  }

  const graphQLClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_HASURA_GRAPHQL_DOCKER_URL as string,
    {
      headers: {
        ...headers,
      },
    },
  );
  return getSdk(graphQLClient);
};

export { getHasuraClient };
