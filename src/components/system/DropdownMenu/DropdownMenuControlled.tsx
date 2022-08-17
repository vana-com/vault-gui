// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "src/components";

interface Props {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  [key: string]: any;
}

const DropdownMenuControlled = ({
  children,
  buttonNode,
  open,
  onOpenChange,
  ...props
}: Props) => (
  <DropdownMenu onOpenChange={onOpenChange} open={open} tw="z-10">
    {/* pass trigger functions via asChild */}
    <DropdownMenuTrigger asChild>{buttonNode}</DropdownMenuTrigger>
    <DropdownMenuContent variant="full" {...props}>
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
);

export { DropdownMenuControlled };
