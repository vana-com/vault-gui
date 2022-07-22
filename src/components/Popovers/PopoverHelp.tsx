// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Markdown,
  MarkdownWrapper,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "src/components";
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
      <MarkdownWrapper isNote tw="text-black">
        <Markdown>{HELP_INFORMATION}</Markdown>
      </MarkdownWrapper>
    </PopoverContent>
  </Popover>
);

export { PopoverHelp };
