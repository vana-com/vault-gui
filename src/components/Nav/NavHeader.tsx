// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { CardHeadingModule, ContainerFull, Group, Text } from "src/components";

interface Props {
  heading: string;
  children?: React.ReactNode;
  headingNode?: React.ReactNode;
  isDataModule?: boolean;
  moduleName?: string;
}

const NavHeader = ({
  heading,
  headingNode,
  children,
  isDataModule,
  moduleName = "",
}: Props) => (
  <header tw="pt-0 bg-background">
    <ContainerFull>
      <Group tw="gap-3 pt-2 pb-5 items-center justify-between">
        <Group tw="gap-2 items-center">
          {/* TODO: isDataModule is currently unused */}
          {isDataModule ? (
            <CardHeadingModule
              variant="title1"
              heading={heading}
              name={moduleName}
            />
          ) : (
            <Text
              as="h1"
              variant="title1"
              weight="semibold"
              tw="-ml-0.5 text-primaryShade"
            >
              {heading}
            </Text>
          )}
          {headingNode}
        </Group>

        {/* catch-all for design */}
        {children}
      </Group>
      <hr />
    </ContainerFull>
  </header>
);

export { NavHeader };
