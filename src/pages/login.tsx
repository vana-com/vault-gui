import { Icon } from "@iconify/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Center,
  LayoutCanvas,
  LayoutCanvasPattern,
  LayoutPage,
  Link,
  LoginButton,
  Stack,
  Text,
  TitleAndMetaTags,
  useUserContext,
} from "src/components";
import config from "src/config";

const textWithIcnStyle = tw`text-labelSecondary flex items-start md:items-center md:justify-center text-center gap-0.5 md:gap-1.5 w-4/6 md:w-full mx-auto`;

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUserContext();
  console.log("router query", router.query?.origin);
  console.log(
    "Login Page",
    `isAuthenticated: ${isAuthenticated}`,
    `isLoading: ${isLoading}`,
  );

  // After logging in, useEffect to redirect the newly logged-in user
  useEffect(() => {
    // If isAuthenticated and there's an origin param, redirect to that origin
    if (router.query?.origin && isAuthenticated) {
      router.push(
        decodeURIComponent(router.query.origin.toString()),
        undefined,
        {
          shallow: true,
        },
      );
    }
    // For all other situations where the user isAuthenticated, redirect home
    if (router.asPath === "/login" && isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <TitleAndMetaTags color="black" title="Log in to your Vault | Vana" />
      <LayoutPage showAsAuthenticated={false}>
        <LayoutCanvas>
          <LayoutCanvasPattern />
          <Center tw="min-h-[300px] relative">
            <Stack tw="gap-5 items-center">
              <Stack tw="gap-1 items-center">
                <Text variant="base" weight="semibold">
                  Log in or create a new account
                </Text>
                <Text variant="note" css={textWithIcnStyle}>
                  <div tw="flex items-center transform mobile:translate-y-0.5">
                    <Icon icon="carbon:idea" tw="inline" />
                  </div>
                  <div tw="">
                    If you already have an account, use the same login method.
                  </div>
                </Text>
                <Text variant="note" css={textWithIcnStyle}>
                  <div tw="flex items-center transform mobile:translate-y-0.5">
                    <Icon icon="carbon:checkmark-outline" tw="inline" />
                  </div>
                  <div>
                    If you don&apos;t have an account,{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.vanaPublicURL}
                    >
                      Vana
                    </Link>{" "}
                    will create one for you.
                  </div>
                </Text>
              </Stack>
              <LoginButton />
            </Stack>
          </Center>
        </LayoutCanvas>
      </LayoutPage>
    </>
  );
};

export default LoginPage;
