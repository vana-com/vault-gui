// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { TwStyle } from "twin.macro";

import {
  Markdown,
  MarkdownWrapper,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "src/components";
import { HELP_INFORMATION } from "src/data";

interface Props {
  css?: TwStyle;
}

const PopoverHelp = ({ css }: Props) => (
  <Popover>
    <PopoverTrigger asChild>
      {/* <Button size="sm" variant="ghostSecondary" tw="text-labelTertiary">
        Need help?
      </Button> */}
      <Text
        variant="note"
        weight="medium"
        // requires relative to merge with button:after:hover style
        css={[tw`relative hover:cursor-pointer`, css]}
      >
        Need help?
      </Text>
    </PopoverTrigger>
    <PopoverContent tw="text-background bg-label">
      <PopoverArrow tw="fill-label ml-3" />
      <MarkdownWrapper isNote tw="text-background">
        <Markdown>{HELP_INFORMATION}</Markdown>
      </MarkdownWrapper>
    </PopoverContent>
  </Popover>
);

export { PopoverHelp };
