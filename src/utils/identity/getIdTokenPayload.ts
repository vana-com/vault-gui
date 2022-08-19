import * as jose from "jose";

import { getJwtPayload } from "./getJwtPayload";

/**
 * https://web3auth.io/docs/server-side-verification/social-login-users#verifying-jwt-token-idtoken
 * Retrieve the ID Token payload, issued by web3auth.
 *
 * @param idToken idToken JWT returned to the user's browser after they login with web
 * @returns idToken payload if the token is valid
 */
const getIdTokenPayload = async (
  idToken: string,
): Promise<jose.JWTPayload | null> => {
  try {
    const idTokenPayload = getJwtPayload(idToken);
    const issuer = idTokenPayload.iss || idTokenPayload.issuer;
    const jwksUrl =
      issuer === "https://api.openlogin.com"
        ? "https://api.openlogin.com/jwks"
        : "https://auth-js-backend.tor.us/jwks";
    const jwks = jose.createRemoteJWKSet(new URL(jwksUrl));
    const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
      algorithms: ["ES256"],
    });
    return jwtDecoded.payload;
  } catch (e) {
    console.error("Unable to verify idToken", e);
    return null;
  }
};

export { getIdTokenPayload };
