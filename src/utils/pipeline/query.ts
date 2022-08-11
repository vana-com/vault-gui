import type { Database, QueryResult } from "@corsali/userdata-extractor";

/**
 * Runs a query on a sqlite database
 * @param data sqlite database
 * @param query SQL query
 * @returns matching rows
 */
const queryData = async (
  db: Database,
  query: string,
): Promise<QueryResult[]> => {
  if (!query) throw new Error("No query provided");

  const queryResults = await db.runQuery(query);

  return queryResults;
};

export { queryData };
