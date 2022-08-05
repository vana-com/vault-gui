import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, NavbarWrapper, Text, UserAccountNav } from "src/components";
import { userAtom } from "src/state";

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  const [user] = useAtom(userAtom);

  return (
    <NavbarWrapper>
      <Group tw="items-center gap-1 text-labelTertiary">
        <NextLink passHref href="/">
          <Text as="a" variant="footnoteMeta" weight="semibold" tw="">
            My data
          </Text>
        </NextLink>
        <Icon icon="heroicons-solid:chevron-right" height="0.8em" />
        <NextLink passHref href="/">
          <Text as="a" variant="footnoteMeta" weight="semibold">
            Connect
          </Text>
        </NextLink>
      </Group>

      {/* USER AVATAR */}
      {user ? <UserAccountNav user={user} /> : "No user"}

      {children}
    </NavbarWrapper>
  );
};

export { Navbar };
