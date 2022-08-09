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
        size="md"
        variant="ghost"
        tw="min-w-0 px-1.5 text-labelTertiary text-xs transform translate-y-[1px]"
        prefix={
          <Icon icon="heroicons-outline:information-circle" height="1.25em" />
        }
      >
        English only
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
        For the time being, we only service English language accounts. We will
        offer multiple languages in future.
      </Text>
    </PopoverContent>
  </Popover>
);

export { PopoverModuleLang };
