// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Group, Link, Stack, Text } from "src/components";
import {
  CarbonArrowRight,
  CarbonThunderstormStrong,
} from "src/components/Icons";

const NoModuleMessage = () => (
  <Stack tw="rounded-lg overflow-hidden gap-0 border bg-gray-40 border-separator items-center">
    <Group tw="p-5 gap-3 items-center">
      <CarbonThunderstormStrong />
      <Text variant="body" color="label">
        Unfortunately, you don&apos;t have any data to share.
      </Text>
    </Group>
    <hr tw="w-full" />
    <Link
      underline={false}
      href="/modules"
      target="_blank"
      rel="noopener noreferrer"
      tw="p-5"
    >
      {/* TODO: add onClick to close the pop-up? */}
      <Button variant="solid" size="xl" suffix={<CarbonArrowRight />}>
        Go store some data
      </Button>
    </Link>
  </Stack>
);

export { NoModuleMessage };
