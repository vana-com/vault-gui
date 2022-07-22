import * as jose from "jose";

const createHasuraJWT = async (
  idTokenPayload: jose.JWTPayload,
): Promise<string> => {
  const hasuraJwtSecret = await jose.importPKCS8(
    process.env.HASURA_JWT_SECRET as string,
    "RS512",
  );
  const hasuraJwt = await new jose.SignJWT({
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "admin", // TODO: Introduce roles for admin, vana-org and vault-gui
      "x-hasura-allowed-roles": ["admin"],
      "x-hasura-user-id": (idTokenPayload as any).wallets[0].public_key,
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
