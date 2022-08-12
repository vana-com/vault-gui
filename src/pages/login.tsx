import { Icon } from "@iconify/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Center,
  LayoutAppNoAside,
  LayoutCanvas,
  LayoutCanvasPattern,
  LoginButton,
  Stack,
  Text,
  TitleAndMetaTags,
  useUserContext,
  WithIcon,
} from "src/components";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useUserContext();

  // After logging in, useEffect to redirect the newly logged-in user.
  useEffect(() => {
    // If there's an origin param, redirect the user back to that origin
    if (router.query?.origin && isAuthenticated) {
      router.push(
        decodeURIComponent(router.query.origin.toString()),
        undefined,
        {
          shallow: true,
        },
      );
    }
    // If there's no origin param, redirect the user home
    if (!router.query && isAuthenticated) {
      router.push("/");
    }
  }, [router, isAuthenticated]);

  // If an already logged-in user accesses this page, redirect them home.
  // This is not rendered based on any side-effect, so don't useEffect() here.
  if (router.isReady && isAuthenticated) {
    router.push("/");
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Log in to your Vault | Vana" />
      <LayoutAppNoAside>
        <LayoutCanvas>
          <LayoutCanvasPattern />
          <Center tw="min-h-[300px] relative">
            <Stack tw="gap-5 items-center">
              <Stack tw="gap-1 items-center">
                <Text variant="base" weight="semibold">
                  Log in or create a new account
                </Text>
                <Text
                  variant="note"
                  tw="text-labelSecondary flex items-center gap-1"
                >
                  <WithIcon prefix={<Icon icon="carbon:idea" />}>
                    If you have an account, use the same login method
                  </WithIcon>
                </Text>
              </Stack>
              <LoginButton />
            </Stack>
          </Center>
        </LayoutCanvas>
      </LayoutAppNoAside>
    </>
  );
};

export default LoginPage;
