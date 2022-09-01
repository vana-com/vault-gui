// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";
import { ModuleObj } from "src/types";

interface Props {
  module: ModuleObj;
}

/* TODO: https://app.clickup.com/t/2tkbzz1 */

// const { fileName, fileSize, lastUpdated } = module;
const DataCardDetails = ({ module }: Props) => (
  <Stack tw="gap-0.5">
    <Text variant="note" weight="semibold" tw="text-label text-left">
      {module.fileName?.slice(0, -4)}
    </Text>
    {/* <Text variant="note" weight="semibold" tw="text-label text-left">
      {id.slice(-8)}
    </Text> */}
    {/* <Group tw="gap-1.5">
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
    </Group> */}
  </Stack>
);

export { DataCardDetails };
