// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text } from "src/components";
import {
  CarbonCheckmarkOutline,
  CarbonCloseOutline,
} from "src/components/Icons";
import { testPermissionList } from "src/data";
import { SharePermissionKind } from "src/types";

import { FocusStack } from "./Subelement";

interface PermissionListItemProps {
  id: string;
  text: string | React.ReactNode;
  denial?: boolean;
}

const PermissionListItem = ({ item }: { item: PermissionListItemProps }) => (
  <Group tw="items-center gap-2 text-labelTertiary">
    {item.denial ? <CarbonCloseOutline /> : <CarbonCheckmarkOutline />}
    <Text variant="body">{item.text}</Text>
  </Group>
);

const getQueryKind = (queryString: string) => {
  if (queryString === "select * from instagram_interests") {
    return SharePermissionKind.InstagramInterests;
  }
  return SharePermissionKind.InstagramInterests;
};

const getQueryPermissionsList = (queryKind: SharePermissionKind) => {
  if (queryKind === SharePermissionKind.InstagramInterests) {
    return testPermissionList;
  }
  return testPermissionList;
};

interface Props {
  query: string;
}

const PermissionList = ({ query }: Props) => {
  // FAKE DATA
  const queryKind = getQueryKind(query);
  const queryPermissions = getQueryPermissionsList(queryKind);

  return (
    <FocusStack>
      <Group tw="p-4">
        <Text variant="body" tw="flex">
          Share your&nbsp;<Text weight="bold">Instagram interests</Text>
        </Text>
      </Group>
      <hr />
      <Stack tw="p-4 gap-3">
        {queryPermissions.map((item) => (
          <PermissionListItem key={item.id} item={item} />
        ))}
      </Stack>
    </FocusStack>
  );
};

export { PermissionList };
