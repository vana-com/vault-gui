import * as jose from "jose";

/**
 * https://web3auth.io/docs/server-side-verification/social-login-users#verifying-jwt-token-idtoken
 * Checks that user with external ID appPubKey has authenticated by looking at idToken JWT.
 *
 * @param idToken idToken JWT returned to the user's browser after they login with web
 * @param appPubKey The Web3Auth user's app public key
 * @returns true if idToken JWT is valid and is for appPubKey, false otherwise
 */
const verifyWeb3AuthAuthentication = async (
  idToken: any,
  appPubKey: string,
) => {
  const jwks = jose.createRemoteJWKSet(
    new URL("https://api.openlogin.com/jwks"),
  );
  const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
    algorithms: ["ES256"],
  });
  return (jwtDecoded.payload as any).wallets[0].public_key === appPubKey;
};

export { verifyWeb3AuthAuthentication };
