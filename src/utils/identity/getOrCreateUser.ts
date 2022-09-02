import crypto from "crypto";

import config from "src/config";
import { Users } from "src/graphql/generated";
import { Sdk } from "src/graphql/generated/sdk";

/**
 * Get an existing user or create a new one
 * @param sdk
 * @param externalId
 * @param name
 * @param emailAddress
 * @returns User
 */
const getOrCreateUser = async (
  sdk: Sdk,
  externalId: string,
  publicKey: string,
  name: string,
  emailAddress: string,
  loginType: string,
) => {
  let user: Users;
  const { users } = await sdk.getUserFromExternalIdOrEmail({
    emailAddress,
    externalId,
  });

  if (users?.length >= 1) {
    // Found a user
    user = users[0] as Users;

    if (
      user.externalId.startsWith("google-oauth2|") ||
      user.externalId.startsWith("auth0|")
    ) {
      // Migrate user external ID from Auth0 to Web3Auth
      await sdk.updateUserExternalId({
        userId: user.id,
        externalId,
      });
      user.externalId = externalId;
    }
  } else {
    // Create a new user. Generate a dummy email for users that sign in with a wallet
    const { createOneUser } = await sdk.createUser({
      name,
      emailAddress,
      externalId,
    });
    user = createOneUser as Users;
  }

  // Create user supplementary information if none exists
  if (!user.userSupplementary) {
    // Public key is only available for social logins (torus wallets)
    const socialLoginMethod = publicKey ? loginType : null;
    const walletType = publicKey ? "torus" : loginType;
    const userSecret = crypto.randomBytes(32).toString("hex");
    const userSupplementary = {
      publicKey,
      socialLoginMethod,
      userId: user.id,
      userSecret,
      walletAddress: externalId,
      walletChain: config.WEB_3_AUTH_ETHEREUM_CHAIN_ID,
      walletType,
    };
    const { createOneUserSupplementary } = await sdk.createUserSupplementary(
      userSupplementary,
    );
    return createOneUserSupplementary?.user;
  }

  return user;
};

export { getOrCreateUser };
