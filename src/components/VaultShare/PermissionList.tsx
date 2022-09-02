import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text } from "src/components";
import { InstagramInterestsCopy, TestUnknownCopy } from "src/data";
import { ShareKind, ShareService } from "src/types";
import { capitalizeString } from "src/utils";

import { FocusStack } from "./Subelement";

interface PermissionItemProps {
  id: string;
  text: string | React.ReactNode;
  denial?: boolean;
}

const PermissionItem = ({ item }: { item: PermissionItemProps }) => (
  <Group tw="items-center gap-2 text-labelTertiary">
    <Icon
      icon={item.denial ? "carbon:close-outline" : "carbon:checkmark-outline"}
    />
    <Text variant="body">{item.text}</Text>
  </Group>
);

// Determine the ShareKind from the given service name + query.
// NB: we only return Instagram interests only for now.
const getShareKind = (
  queryString: string,
  serviceName: ShareService,
): ShareKind => {
  if (
    serviceName === ShareService.INSTAGRAM &&
    queryString.includes("interests")
  ) {
    return ShareKind.INSTAGRAM_INTERESTS;
  }
  return ShareKind.UNKNOWN;
};

interface ShareCopyProps {
  heading: string;
  permissions: PermissionItemProps[];
}

const getShareCopy = (shareKind: ShareKind): ShareCopyProps => {
  switch (shareKind) {
    case ShareKind.INSTAGRAM_INTERESTS:
      return InstagramInterestsCopy;
    default:
      return TestUnknownCopy;
  }
};

interface Props {
  query: string;
  serviceName: ShareService;
}

const PermissionList = ({ query, serviceName }: Props) => {
  const shareKind = getShareKind(query, serviceName);
  const shareCopy = getShareCopy(shareKind);

  return (
    <FocusStack>
      <Group tw="p-4">
        <Text variant="body" tw="flex">
          Share your&nbsp;
          <Text weight="bold">
            {capitalizeString(serviceName)} {shareCopy.heading}
          </Text>
        </Text>
      </Group>
      <hr />
      <Stack tw="p-4 gap-3">
        {shareCopy.permissions.map((item) => (
          <PermissionItem key={item.id} item={item} />
        ))}
      </Stack>
    </FocusStack>
  );
};

export { PermissionList };
