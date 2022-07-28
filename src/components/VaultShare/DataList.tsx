// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text } from "src/components";
import { CarbonSecurity } from "src/components/Icons";
import { testPermissionList } from "src/data";

const DataListItem = ({ children }: Props) => (
  <Group tw="items-center gap-2">
    <CarbonSecurity />
    <Text tw="text-labelSecondary">{children}</Text>
  </Group>
);

interface Props {
  children?: React.ReactNode;
}

const DataList = ({ children }: Props) => (
  <Stack tw="rounded-lg border border-separator p-4 gap-3">
    {testPermissionList.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <DataListItem key={index}>{item}</DataListItem>
    ))}
    {children}
  </Stack>
);

export { DataList };
