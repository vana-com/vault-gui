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
        css={[tw`hover:cursor-pointer`, css]}
      >
        Need help?
      </Text>
    </PopoverTrigger>
    <PopoverContent tw="text-black bg-white">
      <PopoverArrow tw="fill-white ml-3" />
      <MarkdownWrapper isNote tw="text-black">
        <Markdown>{HELP_INFORMATION}</Markdown>
      </MarkdownWrapper>
    </PopoverContent>
  </Popover>
);

export { PopoverHelp };
