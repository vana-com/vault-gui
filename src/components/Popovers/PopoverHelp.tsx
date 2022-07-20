// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "src/components";
import { MarkdownComponent } from "src/components/MarkdownComponents";
import { HELP_INFORMATION } from "src/data";

const PopoverHelp = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button size="sm" variant="ghostSecondary" tw="text-labelTertiary">
        Need help?
      </Button>
    </PopoverTrigger>
    <PopoverContent tw="text-black bg-white">
      <PopoverArrow tw="fill-white" />
      <MarkdownComponent isNote>{HELP_INFORMATION}</MarkdownComponent>
    </PopoverContent>
  </Popover>
);

export { PopoverHelp };
