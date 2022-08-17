// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { NavAsideContent, Stack } from "src/components";

interface Props {
  children?: React.ReactNode;
}

const NavAside = ({ children }: Props) => (
  <Stack tw="relative h-full">
    <NavAsideContent />
    {children}
  </Stack>
);

export { NavAside };
