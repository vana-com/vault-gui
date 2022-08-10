interface SQLiteQueryResult {
  queryString: string;
  queryResult: string[];
}

/**
 * Runs a query on a sqlite database
 * @param data sqlite database
 * @param query SQL query
 * @returns matching rows
 */
const queryData = async (db: any, query: string) => {
  if (!query) throw new Error("No query provided");

  const queryResults: SQLiteQueryResult[] = await db.runQuery(query);

  return queryResults;
};

export { queryData };
export type { SQLiteQueryResult };
