import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text, useUserContext } from "src/components";
import { capitalizeString, formatModuleNameForUI } from "src/utils";

import { FocusStack } from "./Subelement";

interface PermissionItemProps {
  children: string | React.ReactNode;
}

const PermissionItem = ({ children }: PermissionItemProps) => (
  <Group tw="items-center gap-2 text-labelSecondary text-base">
    <Icon icon="carbon:checkmark-outline" />
    <Text variant="base" tw="">
      {children}
    </Text>
  </Group>
);

interface PermissionHeaderProps {
  children: string | React.ReactNode;
  index: number;
}

const PermissionHeader = ({ children, index }: PermissionHeaderProps) => (
  <div tw="sticky -top-px -mt-px bg-fillSecondary">
    {index !== 0 && <hr />}
    <div tw="h-rowItem px-insetHalf flex items-center">
      <Text weight="semibold" tw="mt-[-0.1em]">
        {children}
      </Text>
    </div>
    <hr />
  </div>
);

interface Props {
  permissionMap: { [key: string]: string[] };
}

const PermissionList = ({ permissionMap }: Props) => {
  const { user, loginType } = useUserContext();

  // TESTS
  // console.log("user", user);
  // console.log("loginType", loginType);

  return (
    <FocusStack isInset={false} css={tw`relative overflow-auto`}>
      {Object.keys(permissionMap).map((serviceName, index) => (
        <Stack tw="gap-0 relative" key={serviceName}>
          <PermissionHeader index={index}>
            {formatModuleNameForUI(serviceName)}
          </PermissionHeader>
          <Stack tw="px-insetHalf gap-2 py-[0.85em]">
            {permissionMap[serviceName]?.map((permission) => (
              <PermissionItem key={permission}>
                {capitalizeString(permission?.replaceAll("_", " "))}
              </PermissionItem>
            ))}
          </Stack>
        </Stack>
      ))}

      {/* USER DETAILS */}
      <Stack tw="gap-0 relative pb-w24">
        <PermissionHeader index={999}>Your account details</PermissionHeader>
        <Stack tw="px-insetHalf gap-2 py-[0.85em]">
          <PermissionItem>
            ID: ending{" "}
            <Text as="span" tw="font-mono">
              {user?.id.slice(-8)}
            </Text>
          </PermissionItem>
          {loginType !== "metamask" && (
            <PermissionItem>
              Email:{" "}
              {user?.emailAddress
                ? user.emailAddress
                : "Not yet added. Please add one…"}
            </PermissionItem>
          )}
        </Stack>
      </Stack>
    </FocusStack>
  );
};
export { PermissionList };
