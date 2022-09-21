import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text } from "src/components";
import { capitalizeString } from "src/utils";

import { FocusStack } from "./Subelement";

interface PermissionItemProps {
  text: string | React.ReactNode;
}

const PermissionItem = ({ text }: PermissionItemProps) => (
  <Group tw="items-center gap-2 text-labelTertiary">
    <Icon icon="carbon:checkmark-outline" />
    <Text variant="body">{text}</Text>
  </Group>
);

interface Props {
  permissionMap: { [key: string]: string[] };
}

const PermissionList = ({ permissionMap }: Props) => (
  <FocusStack>
    {Object.keys(permissionMap).map((serviceName) => (
      <Stack tw="p-4 gap-3" key={serviceName}>
        <Text weight="bold" tw="block">
          {capitalizeString(serviceName)}
        </Text>
        <hr />
        {permissionMap[serviceName]?.map((permission) => (
          <PermissionItem
            key={permission}
            text={capitalizeString(permission?.replaceAll("_", " "))}
          />
        ))}
      </Stack>
    ))}
  </FocusStack>
);
export { PermissionList };
