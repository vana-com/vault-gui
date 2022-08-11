import { Icon } from "@iconify/react";
import type { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Center,
  LayoutApp,
  LayoutCanvas,
  LayoutCanvasPattern,
  LoginButton,
  Stack,
  Text,
  WithIcon,
} from "src/components";

const LoginPage: NextPage = () => (
  <LayoutApp>
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
  </LayoutApp>
);

export default LoginPage;
