import { Icon } from "@iconify/react";
import tw from "twin.macro";

import {
  Group,
  LogoutButton,
  Stack,
  styledNavButton,
  Text,
} from "src/components";

interface Props {
  user: any;
  accountLoginService?: string;
}

const UserAccount = ({ user, accountLoginService }: Props) => (
  <Stack tw="gap-2 md:min-w-[300px] pb-2 md:pb-0">
    <Group tw="px-3 py-4 gap-3 items-center cursor-auto">
      <div css={[styledNavButton, tw`h-[55px] w-[55px]`]}>
        <Icon icon="carbon:user-avatar-filled-alt" height="3em" />
      </div>
      <Stack tw="gap-0.5">
        {accountLoginService && (
          <Text variant="note" weight="medium" tw="flex">
            Login:
            <Text variant="note" weight="semibold" tw="pl-1">
              {accountLoginService[0].toUpperCase() +
                accountLoginService.slice(1)}
            </Text>
          </Text>
        )}
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
      <LogoutButton />
      {/* TODO: reinstate when delete account function is ready */}
      {/* <hr tw="border-separatorLight" />
      <Text
        as="button"
        variant="base"
        weight="medium"
        css={[styledNavLink, tw`w-full px-3`]}
        tw="text-labelTertiary"
      >
        <WithIcon prefix={<Icon icon="carbon:renew" height="0.85em" />}>
          Delete Vault
        </WithIcon>
      </Text> */}
    </Stack>
  </Stack>
);

export { UserAccount };
