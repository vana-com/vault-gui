import type { Database } from "@corsali/userdata-extractor";
import { zipToSQLiteInstance } from "@corsali/userdata-extractor";

/**
 * Extracts a .zip file into a sqlite database
 * @param data File to extract
 * @returns sqlite database
 */
const extractData = async (
  data: File,
  serviceName: string,
): Promise<Database> => {
  // Enable webworkers inside zipjs
  const extracted = await zipToSQLiteInstance(serviceName, data, true);

  return extracted;
};

export { extractData };
