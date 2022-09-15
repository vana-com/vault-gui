import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  DropdownMenuControlled,
  Link,
  styledNavButton,
  styledTrigger,
  Text,
  UserAccount,
  useUserContext,
  VanaLogo,
} from "src/components";
import config from "src/config";

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  const { user, loginType } = useUserContext();
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
          <Text
            variant="footnoteMeta"
            weight="heavy"
            tw="text-label flex gap-1"
          >
            <span>Vault</span>
            <span tw="text-labelTertiary font-bold">Beta</span>
          </Text>
        </div>
      </NextLink>

      {/* VANA LINK if not logged in */}
      {!user && (
        <Text variant="note" weight="medium">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={config.vanaPublicURL}
            underline={false}
            tw="flex items-center gap-0.5 transition-colors hover:text-labelSecondary"
          >
            <span>by Vana</span>
            <Icon icon="carbon:arrow-up-right" width="0.7em" />
          </Link>
        </Text>
      )}

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
                styledNavButton,
                tw`h-[40px] w-[40px] rounded-full`,
                styledTrigger,
              ]}
              aria-label="Your account"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              <Icon icon="carbon:user-avatar-filled-alt" height="1.75em" />
            </button>
          }
        >
          <UserAccount user={user} accountLoginService={loginType || ""} />
        </DropdownMenuControlled>
      )}

      {children}
    </div>
  );
};

export { Navbar };
