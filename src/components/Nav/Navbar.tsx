import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  DropdownMenuControlled,
  navButtonStyle,
  styledDialogTrigger,
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
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Reset DropdownMenuControlled on route change
  useEffect(() => setIsOpen(false), [asPath]);

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
        <DropdownMenuControlled
          onOpenChange={setIsOpen}
          open={isOpen}
          align="end"
          alignOffset={0}
          sideOffset={9}
          buttonNode={
            <button
              css={[
                navButtonStyle,
                tw`h-[40px] w-[40px]`,
                styledDialogTrigger({ isRounded2xl: true }),
              ]}
              aria-label="Your account"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              <Icon icon="carbon:user-avatar-filled-alt" height="1.75em" />
            </button>
          }
        >
          <UserAccount user={user} accountLoginService="MetaMask" />
        </DropdownMenuControlled>
      )}

      {children}
    </div>
  );
};

export { Navbar };
