// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { CardHeadingModule, Group } from "src/components";

interface Props {
  name: string;
  heading?: string | React.ReactNode;
  children?: React.ReactNode;
}

const CardHeader = ({ name, heading, children }: Props) => (
  <Group tw="items-center justify-between">
    <CardHeadingModule name={name} heading={heading || name} />
    {children}
  </Group>
);

export { CardHeader };
