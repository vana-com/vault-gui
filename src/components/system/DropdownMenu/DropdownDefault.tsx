import tw from "twin.macro";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "src/components/system/DropdownMenu";

import { DropdownContentVariant } from "./DropdownMenu.css";

const accountAvatarStyle = tw`flex items-center justify-center rounded-full text-label bg-background hover:bg-fillSecondary`;

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  ariaLabel: string;
  variant?: DropdownContentVariant;
  [key: string]: any;
}

const DropdownDefault = ({
  children,
  icon,
  ariaLabel,
  variant = "full",
  ...props
}: Props) => (
  <DropdownMenu tw="z-10">
    <DropdownMenuTrigger asChild>
      <button
        css={[accountAvatarStyle, tw`h-[40px] w-[40px]`]}
        aria-label={ariaLabel}
        type="button"
      >
        {icon}
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent variant={variant} {...props}>
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
);

export { DropdownDefault };
