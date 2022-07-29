import * as jose from "jose";

/**
 * https://web3auth.io/docs/server-side-verification/social-login-users#verifying-jwt-token-idtoken
 * Retrieve the ID Token payload, issued by web3auth.
 *
 * @param idToken idToken JWT returned to the user's browser after they login with web
 * @param issuer The issuer of the token
 * @returns idToken payload if the token is valid
 */
const getIdTokenPayload = async (
  idToken: string,
  issuer = "openlogin",
): Promise<jose.JWTPayload | null> => {
  let jwksUrl = "";
  switch (issuer) {
    case "openlogin":
      jwksUrl = "https://api.openlogin.com/jwks";
      break;
    case "wallet-connect-v1":
      jwksUrl = "https://auth-js-backend.tor.us/jwks";
      break;
    default:
      throw new Error(
        `Unable to verify ID Token, unsupported issuer ${issuer}`,
      );
  }

  try {
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
