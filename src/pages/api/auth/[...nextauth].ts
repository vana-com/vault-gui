import type { NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

import { getSecret } from "src/utils";
import TikTokProvider from "src/utils/identity/tiktokProvider";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    secret: getSecret("hasura_jwt_secret", true),
    providers: [
      TwitterProvider({
        clientId: process.env.AUTH_TWITTER_CLIENT_ID as string,
        clientSecret: process.env.AUTH_TWITTER_CLIENT_SECRET as string,
        version: "2.0",
      }),
      TikTokProvider({
        clientId: process.env.AUTH_TIKTOK_CLIENT_ID as string,
        clientSecret: process.env.AUTH_TIKTOK_CLIENT_SECRET as string,
      }),
    ],
    debug: true,
    session: {
      strategy: "jwt",
    },
    jwt: {
      secret: getSecret("hasura_jwt_secret", true),
    },
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        console.log(
          "next-auth: signIn",
          user,
          account,
          profile,
          email,
          credentials,
        );
        // return true;
        return `/store/${account?.provider}`;
      },
      async redirect({ url, baseUrl }) {
        console.log("next-auth: redirect", url, baseUrl);
        return baseUrl;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        console.log("next-auth: jwt", token, user, account, profile, isNewUser);
        return token;
      },
      async session({ session, token, user }) {
        console.log("next-auth: session", session, token, user);
        return session;
      },
    },
  } as NextAuthOptions);
}
