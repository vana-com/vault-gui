import { Icon } from "@iconify/react";
import tw from "twin.macro";

import { Group, LogoutButton, Stack, Text, WithIcon } from "src/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "src/components/system/DropdownMenu";

import { navLinkStyle } from "./Nav.css";

const accountAvatarStyle = tw`flex items-center justify-center rounded-full text-label bg-background hover:bg-fillSecondary`;

interface Props {
  user: any;
  accountLoginService: string;
}

const UserAccountNav = ({ user, accountLoginService }: Props) => (
  <DropdownMenu tw="z-20">
    <DropdownMenuTrigger asChild>
      <button
        css={[accountAvatarStyle, tw`h-[40px] w-[40px]`]}
        aria-label="Your account"
        type="button"
      >
        <Icon icon="carbon:user-avatar-filled-alt" height="1.75em" />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent sideOffset={9} align="end">
      <Stack tw="gap-2 min-w-[300px]">
        <Group tw="px-3 py-4 gap-3 items-center">
          <div css={[accountAvatarStyle, tw`h-[55px] w-[55px]`]}>
            <Icon icon="carbon:user-avatar-filled-alt" height="3em" />
          </div>
          <Stack tw="gap-0.5">
            <Text variant="note" weight="medium" tw="flex">
              Login:
              <Text variant="note" weight="semibold" tw="pl-1">
                {accountLoginService}
              </Text>
            </Text>
            <Text variant="footnote" weight="medium" tw="text-labelTertiary">
              ID ends in{" "}
              <Text as="span" tw="font-mono">
                {user.id.slice(-8)}
              </Text>
            </Text>
          </Stack>
        </Group>
        <hr tw="border-separatorLight" />
        <Stack tw="gap-[2px]">
          {/* <Text
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
            </Text> */}
          <LogoutButton />
          <Text
            as="button"
            variant="base"
            weight="medium"
            css={[navLinkStyle, tw`px-3`]}
            tw="text-labelTertiary"
          >
            <WithIcon prefix={<Icon icon="carbon:renew" height="0.85em" />}>
              Delete Vault
            </WithIcon>
          </Text>
        </Stack>
      </Stack>
    </DropdownMenuContent>
  </DropdownMenu>
);

export { UserAccountNav };
