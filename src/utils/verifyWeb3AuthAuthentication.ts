import * as jose from "jose";

/**
 * https://web3auth.io/docs/server-side-verification/social-login-users#verifying-jwt-token-idtoken
 * Checks that user with external ID appPubKey has authenticated by looking at idToken JWT.
 *
 * @param idToken idToken JWT returned to the user's browser after they login with web
 * @param appPubKey The Web3Auth user's app public key
 * @returns JWT payload if authenticated idToken, otherwise null
 */
const verifyWeb3AuthAuthentication = async (idToken: any) => {
  try {
    const jwks = jose.createRemoteJWKSet(
      new URL("https://api.openlogin.com/jwks"),
    );
    const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
      algorithms: ["ES256"],
    });

    return jwtDecoded.payload;
  } catch (error) {
    return null;
  }
};

export { verifyWeb3AuthAuthentication };
