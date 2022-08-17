import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  navButtonStyle,
} from "src/components";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

const NavUser = ({ children, ...props }: Props) => (
  <DropdownMenu tw="z-10">
    <DropdownMenuTrigger asChild>
      <button
        css={[navButtonStyle, tw`h-[40px] w-[40px]`]}
        aria-label="Your account"
        type="button"
      >
        <Icon icon="carbon:user-avatar-filled-alt" height="1.75em" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent variant="full" {...props}>
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
);

export { NavUser };
