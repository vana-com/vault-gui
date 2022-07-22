const createHasuraJWT = async (idToken: any, appPubKey: string) =>
  ({
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "vana-org",
      "x-hasura-allowed-roles": ["worker", "vana-org"],
      "x-hasura-user-id": "google-oauth2|xxxxxxxxx",
    },
    iss: "https://auth.vana.xyz/",
    sub: "google-oauth2|xxxxxxxx",
    aud: [
      "https://hasura.vana.xyz/",
      "https://corsali-production.us.auth0.com/userinfo",
    ],
    iat: 1658180783,
    exp: 1658267183,
    azp: "xxxxxxxx",
    scope: "openid profile email",
    idToken,
    appPubKey,
  }.toString());

export { createHasuraJWT };
