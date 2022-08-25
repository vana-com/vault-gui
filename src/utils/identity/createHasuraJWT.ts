import * as jose from "jose";

import { getSecret } from "../getSecret";

const createHasuraJWT = async (
  idTokenPayload: jose.JWTPayload = {},
  externalId = "",
): Promise<string> => {
  const userEmail = (idTokenPayload.email as string) || "";
  let defaultRole = "worker";
  const allowedRoles = ["worker"];

  // Assign vana-org role for internal emails
  if (userEmail.endsWith("@vana.org") || userEmail.endsWith("@vana.com")) {
    defaultRole = "vana-org";
    allowedRoles.push("vana-org");
  }

  const hasuraJwtSecret = await jose.importPKCS8(
    getSecret("hasura_jwt_secret", true),
    "RS512",
  );
  const hasuraJwt = await new jose.SignJWT({
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": defaultRole,
      "x-hasura-allowed-roles": allowedRoles,
      "x-hasura-user-id": externalId,
    },
  })
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setIssuer("https://vault.vana.com/")
    .setAudience(process.env.NEXT_PUBLIC_HASURA_URL as string)
    .setExpirationTime(idTokenPayload.exp || "24h")
    .sign(hasuraJwtSecret);
  return hasuraJwt;
};
export { createHasuraJWT };
