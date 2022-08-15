// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Text } from "src/components";

interface Props {
  label: string;
  children: string | React.ReactNode;
  alignByWidth?: boolean;
}

const DataModuleDetail = ({ label, children, alignByWidth = true }: Props) => (
  <Group tw="ml-1 items-center gap-2">
    <Text
      variant="note"
      weight="normal"
      css={[tw`text-labelTertiary`, alignByWidth && tw`min-w-[90px]`]}
    >
      {label}:
    </Text>
    <Text variant="note" weight="normal" tw="font-mono text-label">
      {children}
    </Text>
  </Group>
);

export { DataModuleDetail };
