// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text } from "src/components";
import { CarbonSecurity } from "src/components/Icons";

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
    <DataListItem>
      Hey I&apos;m a data share item you&apos;re confirming access to
    </DataListItem>
    <DataListItem>Hey don&apos;t forget about me baby</DataListItem>
    <DataListItem>
      Hey I&apos;m also data share item you&apos;re confirming access to
    </DataListItem>
    {children}
  </Stack>
);

export { DataList };
