// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { BoxProps, Group, Text } from "src/components";
import { CarbonLocked } from "src/components/Icons";

/* CURRENTLY NOT IN USE */

const DefaultLabel = () => (
  <>
    <Text weight="semibold" variant="footnote" color="black">
      Create a password.{" "}
      <Text as="span" weight="medium">
        Only you will know this.
      </Text>
    </Text>
  </>
);

const StoragePasswordLabel = ({ children = <DefaultLabel /> }: BoxProps) => (
  <Group tw="rounded-t-md bg-gray-30 text-gray-80 gap-1 py-2.5 px-3 items-center">
    <CarbonLocked height="1.1em" width="1.1em" />
    <div tw="flex items-center">{children}</div>
  </Group>
);
export { StoragePasswordLabel };
