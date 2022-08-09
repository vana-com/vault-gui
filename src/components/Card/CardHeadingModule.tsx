// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Text, VaultDataLogo } from "src/components";

interface Props {
  name: string;
  heading: string | React.ReactNode;
  variant?: "body" | "title1";
}

const CardHeadingModule = ({ name, heading, variant = "body" }: Props) => (
  <Group tw="items-center gap-1.5">
    <div tw="inline-flex transform -translate-y-[1px]">
      <VaultDataLogo name={name} boxSize="1.75em" />
    </div>
    <Text variant={variant} weight="semibold">
      {heading}
    </Text>
  </Group>
);

export { CardHeadingModule };
