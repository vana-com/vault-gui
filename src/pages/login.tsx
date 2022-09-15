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
  LoginButton,
  SignupLink,
  Stack,
  Text,
  TitleAndMetaTags,
  useUserContext,
} from "src/components";

const textWithIconStyle = tw`text-labelSecondary flex items-center md:items-center md:justify-center text-center gap-1 md:gap-1.5`;

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
                <Text variant="large" weight="bold">
                  Log in
                </Text>
                <Text variant="note" css={textWithIconStyle}>
                  <Icon icon="carbon:idea" />
                  <div tw="">Remember to use the same login method</div>
                </Text>
              </Stack>
              <LoginButton />

              {/* SIGN-UP */}
              <Text variant="note" css={textWithIconStyle}>
                No account? <SignupLink />
              </Text>
            </Stack>
          </Center>
        </LayoutCanvas>
      </LayoutPage>
    </>
  );
};

export default LoginPage;
