import {
  OAuthConfig,
  OAuthUserConfig,
} from "node_modules/next-auth/providers/oauth";
import { TokenSet, TokenSetParameters } from "openid-client";

export interface TikTokProfile {
  avatar_large_url: string;
  avatar_url_100: string;
  avatar_url: string;
  bio_description: string;
  display_name: string;
  follower_count: number;
  following_count: number;
  is_verified: boolean;
  likes_count: number;
  open_id: string;
  profile_deep_link: string;
  union_id: string;
}

export default function TikTok<P extends Record<string, any> = TikTokProfile>(
  options: OAuthUserConfig<P>,
): OAuthConfig<P> {
  return {
    id: "tiktok",
    name: "TikTok",
    type: "oauth",
    version: "2.0",
    authorization: {
      params: {
        client_key: options.clientId,
        scope: "user.info.basic,video.list",
        response_type: "code",
      },
      url: "https://www.tiktok.com/auth/authorize/",
    },
    httpOptions: {
      timeout: 6000,
    },
    token: {
      request: async ({ params }) => {
        // TikTok token request returns a 307 redirect
        // Need to use `fetch` instead of `openid-client` because `followRedirects` option is no longer available in `openid-client`
        // https://github.com/panva/node-openid-client/discussions/418
        const response = await fetch(
          `https://open-api.tiktok.com/oauth/access_token/?client_key=${options.clientId}&client_secret=${options.clientSecret}&code=${params.code}&grant_type=authorization_code`,
          { method: "POST" },
        );
        const tokens = (await response.json()).data as TokenSetParameters;
        return { tokens };
      },
    },
    // @ts-expect-error TikTokProfile isn't recognized as a valid Profile object
    userinfo: {
      request: async ({ tokens }) => {
        const tokenSet = tokens as TokenSet;
        const response = await fetch(
          `https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,avatar_url_100,avatar_large_url,display_name,bio_description,profile_deep_link,is_verified,follower_count,following_count,likes_count`,
          {
            headers: {
              Authorization: `Bearer ${tokenSet.access_token}`,
            },
          },
        );
        const user = (await response.json()).data.user as TikTokProfile;
        return user;
      },
    },
    profile(tikTokData) {
      return {
        email: null,
        image: tikTokData.avatar_url,
        id: tikTokData.open_id,
        name: tikTokData.display_name,
      };
    },
    ...options,
  };
}
