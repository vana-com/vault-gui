// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { BoxProps, Group, Text, TextProps } from "src/components";
import { CarbonLocked } from "src/components/Icons";

interface DefaultTextProps extends TextProps {
  children: React.ReactNode;
}

const DefaultText = (props: DefaultTextProps) => (
  <Text weight="medium" variant="footnote" color="black" {...props} />
);

const DefaultLabel = () => (
  <>
    <DefaultText as="span" weight="semibold" color="inherit">
      Create a password.
    </DefaultText>{" "}
    <DefaultText as="span" color="inherit">
      Only you will know this.
    </DefaultText>
  </>
);

const StoragePasswordLabel = ({ children = <DefaultLabel /> }: BoxProps) => (
  <Group tw="rounded-t-md bg-gray-30 text-gray-80 gap-1 py-2.5 px-3 items-center">
    <CarbonLocked height="1.1em" width="1.1em" />
    <div tw="flex items-center">{children}</div>
  </Group>
);
export { StoragePasswordLabel };
