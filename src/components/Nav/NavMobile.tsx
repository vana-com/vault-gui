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

const NavMobile = ({ children, ...props }: Props) => (
  <DropdownMenu modal tw="z-10">
    <DropdownMenuTrigger asChild>
      <button
        css={[navButtonStyle, tw`h-[40px] w-[40px] shadow-xl`]}
        aria-label="Main menu"
        type="button"
      >
        <Icon icon="radix-icons:hamburger-menu" height="1.5em" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent variant="minor" {...props}>
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
);

export { NavMobile };
