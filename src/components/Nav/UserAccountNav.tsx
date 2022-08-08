import { Icon } from "@iconify/react";
// import {
//   CheckIcon,
//   ChevronRightIcon,
//   DotFilledIcon,
//   HamburgerMenuIcon,
// } from "@radix-ui/react-icons";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

import { Group, Stack, Text, WithIcon } from "src/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "src/components/system/DropdownMenu";

import { navLinkStyle } from "./Nav.css";

const accountAvatarStyle = tw`flex items-center justify-center border rounded-full border-label text-label bg-background`;

interface Props {
  user: any;
  accountLoginService: string;
}

const UserAccountNav = ({ user, accountLoginService }: Props) => {
  console.log("user", user);

  return (
    <DropdownMenu tw="z-20">
      <DropdownMenuTrigger asChild>
        <button
          css={[accountAvatarStyle, tw`h-[32px] w-[32px]`]}
          aria-label="Your account"
          type="button"
        >
          <Text as="a" variant="base" weight="bold">
            {/* TODO: get initials from user name */}C
          </Text>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={12} align="end">
        <Stack tw="gap-2 min-w-[320px]">
          <Group tw="px-3 py-4 gap-3 items-center">
            <div css={[accountAvatarStyle, tw`h-[55px] w-[55px]`]}>
              <Text variant="large" weight="bold">
                C
              </Text>
            </div>
            <Stack tw="gap-0.5">
              <Text variant="note" weight="medium" tw="flex">
                Login:
                <Text variant="note" weight="semibold" tw="pl-1">
                  {accountLoginService}
                </Text>
              </Text>
              <Text variant="footnote" weight="medium" tw="text-labelTertiary">
                ID ends with {user.id.slice(-8)}
              </Text>
            </Stack>
          </Group>
          <hr />
          <Stack tw="gap-[2px]">
            <Text
              as="button"
              variant="base"
              weight="medium"
              css={[navLinkStyle, tw`px-3`]}
            >
              <WithIcon
                prefix={<Icon icon="heroicons-solid:logout" height="0.85em" />}
              >
                Log out
              </WithIcon>
            </Text>
            <Text
              as="button"
              variant="base"
              weight="medium"
              css={[navLinkStyle, tw`px-3`]}
              tw="text-error"
            >
              <WithIcon
                prefix={
                  <Icon icon="heroicons-solid:shield-check" height="0.85em" />
                }
              >
                Delete Vault
              </WithIcon>
            </Text>
          </Stack>
        </Stack>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { UserAccountNav };
