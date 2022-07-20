import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "components";
import { MarkdownComponent } from "components/MarkdownComponents";
import { HELP_INFORMATION } from "data";
import tw from "twin.macro";

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
