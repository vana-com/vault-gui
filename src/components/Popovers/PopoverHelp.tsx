// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { TwStyle } from "twin.macro";

import {
  Markdown,
  MarkdownWrapper,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  styledNavLink,
  Text,
  useUserContext,
} from "src/components";
import config from "src/config";
import { HELP_INFORMATION } from "src/data";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

interface Props {
  css?: TwStyle;
}

const PopoverHelp = ({ css }: Props) => {
  const { user } = useUserContext();

  return (
    <Popover>
      <PopoverTrigger css={[styledNavLink, tw`w-full`]}>
        {/* <Button size="sm" variant="ghostSecondary" tw="text-labelTertiary">
        Need help?
      </Button> */}
        <Text
          variant="note"
          weight="medium"
          // requires relative to merge with button:after:hover style
          css={[tw`relative hover:cursor-pointer`, css]}
          onClick={(_) =>
            heapTrackServerSide(user?.id, HEAP_EVENTS.CLICK_GET_HELP)
          }
        >
          Need help?
        </Text>
      </PopoverTrigger>
      <PopoverContent tw="text-background bg-label" side="top" alignOffset={12}>
        <PopoverArrow tw="fill-label ml-3" />
        <MarkdownWrapper isNote tw="text-background">
          <Markdown>{HELP_INFORMATION}</Markdown>
        </MarkdownWrapper>
      </PopoverContent>
    </Popover>
  );
};

export { PopoverHelp };
