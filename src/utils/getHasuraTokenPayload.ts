import * as jose from "jose";

import { getSecret } from "./getSecret";

/**
 * Retrieve the Hasura Token payload, issued by Vault.
 *
 * @param hasuraToken Hasura JWT
 * @returns Hasura token payload if the token is valid
 */
const getHasuraTokenPayload = async (
  hasuraToken: string,
): Promise<jose.JWTPayload | null> => {
  try {
    const hasuraJwtSecret = await jose.importPKCS8(
      getSecret("hasura_jwt_secret", true),
      "RS512",
    );
    const jwtDecoded = await jose.jwtVerify(hasuraToken, hasuraJwtSecret);
    return jwtDecoded.payload;
  } catch (e) {
    console.error("Unable to verify Hasura token", e);
    return null;
  }
};

export { getHasuraTokenPayload };
