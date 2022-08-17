import { Icon } from "@iconify/react";
import tw from "twin.macro";

import {
  Group,
  LogoutButton,
  navButtonStyle,
  navLinkStyle,
  Stack,
  Text,
  WithIcon,
} from "src/components";

interface Props {
  user: any;
  accountLoginService: string;
}

const UserAccount = ({ user, accountLoginService }: Props) => (
  <Stack tw="gap-2 md:min-w-[300px]">
    <Group tw="px-3 py-4 gap-3 items-center">
      <div css={[navButtonStyle, tw`h-[55px] w-[55px]`]}>
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
);

export { UserAccount };
