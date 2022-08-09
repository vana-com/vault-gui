import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "src/components";

interface Props {
  children: React.ReactNode;
  // children: Children;
}

const PopoverDataModule = ({ children }: Props) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        round
        variant="icon"
        tw="text-label h-[28px] w-[28px]"
        // prefix={<Icon icon="heroicons-outline:dots-vertical" height="1.25em" />}
      >
        <Icon icon="heroicons-outline:dots-vertical" height="1.25em" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      tw="text-label bg-background max-w-[280px]"
      side="bottom"
      sideOffset={0}
      align="end"
      alignOffset={0}
    >
      <>
        <PopoverArrow tw="fill-white ml-3" />
        {children}
      </>
    </PopoverContent>
  </Popover>
);

export { PopoverDataModule };
