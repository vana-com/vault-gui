// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { ContainerFull, Group, Text } from "src/components";

interface Props {
  heading: string;
  children?: React.ReactNode;
}

const NavHeader = ({ heading, children }: Props) => (
  <header tw="pt-0 bg-background">
    <ContainerFull>
      <Group tw="gap-3 pt-2 pb-5 items-center justify-between">
        {/* <Text variant="base" weight="medium" tw="text-labelTertiary">
            Welcome!
          </Text> */}
        <Text as="h1" variant="title1" weight="semibold" tw="-ml-0.5">
          {heading}
        </Text>

        {/* catch-all for design */}
        {children}
      </Group>
      <hr />
    </ContainerFull>
  </header>
);

export { NavHeader };
