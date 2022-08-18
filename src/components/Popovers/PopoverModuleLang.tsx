import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "src/components";

const PopoverModuleLang = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        size="initial"
        variant="icon"
        // requires relative to merge with button:after:hover style
        tw="relative text-labelSecondary"
      >
        <Icon icon="carbon:information" height="1.125em" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      tw="text-label bg-background max-w-[280px]"
      side="bottom"
      sideOffset={3}
      align="center"
      alignOffset={0}
    >
      <PopoverArrow tw="fill-white ml-3" />
      <Text variant="note">
        In beta, we support data from English language accounts. We will support
        more account languages in the future.
      </Text>
    </PopoverContent>
  </Popover>
);

export { PopoverModuleLang };
