import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  NavUser,
  Text,
  UserAccount,
  useUserContext,
  VanaLogo,
} from "src/components";

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
        <NavUser align="end" alignOffset={0} sideOffset={9}>
          <UserAccount user={user} accountLoginService="MetaMask" />
        </NavUser>
      )}

      {children}
    </div>
  );
};

export { Navbar };
