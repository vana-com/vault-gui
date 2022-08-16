import { Icon } from "@iconify/react";
import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from "twin.macro";

import { Text, UserAccount, useUserContext, VanaLogo } from "src/components";
import { DropdownDefault } from "src/components/system/DropdownMenu";

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  const { user } = useUserContext();

  return (
    <div tw="px-inset flex justify-between items-center h-navH">
      <NextLink passHref href="/">
        <div tw="flex items-center gap-2.5 h-navH cursor-pointer">
          <VanaLogo
            boxSize="1.5em"
            tw="bg-label text-background rounded-[4px]"
          />
          <Text variant="footnoteMeta" weight="heavy" tw="text-label">
            Vault
          </Text>
        </div>
      </NextLink>

      {/* USER AVATAR */}
      {user && (
        <DropdownDefault
          variant="full"
          align="end"
          alignOffset={0}
          sideOffset={9}
          ariaLabel="Your account"
          icon={<Icon icon="carbon:user-avatar-filled-alt" height="1.75em" />}
        >
          <UserAccount user={user} accountLoginService="MetaMask" />
        </DropdownDefault>
      )}

      {children}
    </div>
  );
};

export { Navbar };
