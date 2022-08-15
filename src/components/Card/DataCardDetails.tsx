// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Stack, Text } from "src/components";
import { testModules } from "src/data";
// import { Module } from "src/types";

// interface Props {
//   module?: Module;
//   id: string;
//   isStored?: boolean;
// }

// TODO: supply further module details…
// const { fileName, fileSize, lastUpdated } = module;
const DataCardDetails = () => (
  <Stack tw="gap-0.5">
    <Text variant="note" weight="semibold" tw="text-label text-left">
      {testModules[0].fileName}
    </Text>
    {/* <Text variant="note" weight="semibold" tw="text-label text-left">
      {id.slice(-8)}
    </Text> */}
    <Group tw="gap-1.5">
      <Text
        variant="footnote"
        weight="normal"
        tw="text-labelSecondary font-mono"
      >
        {testModules[0].fileSize}
      </Text>
      <Text
        as="span"
        variant="footnote"
        weight="normal"
        tw="text-labelSecondary font-mono opacity-50"
      >
        |
      </Text>
      <Text
        variant="footnote"
        weight="normal"
        tw="text-labelSecondary font-mono"
      >
        {testModules[0].lastUpdated}
      </Text>
    </Group>
  </Stack>
);

export { DataCardDetails };
