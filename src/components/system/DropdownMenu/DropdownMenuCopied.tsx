import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import React from "react";
import tw, { css, styled, theme } from "twin.macro";

import * as styles from "./DropdownMenu.css";

interface ContentProps {
  children: React.ReactNode;
  [key: string]: any;
}

function Content({ children, ...props }: ContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        css={styles.styledDropdownContent}
        {...props}
      >
        {children}
        {/* <DropdownMenuPrimitive.Arrow css={styles.styledDropdownArrow} /> */}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

const itemStyles = [
  css`
    all: unset;
    font-size: 13px;
    line-height: 1;
    color: violet11;
    [data-disabled] {
      color: mauve8;
      pointer-events: none;
    };
    "&[data-highlighted]": {
      backgroundColor: violet.violet9,
      color: violet.violet1,
    };
  `,
  tw`text-sm rounded-sm relative pl-6 select-none py-2 h-[25px] flex items-center`,
];

const StyledItem = styled(DropdownMenuPrimitive.Item)([...itemStyles]);
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)([
  ...itemStyles,
]);
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)([
  ...itemStyles,
]);
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)([
  ...itemStyles,
  css`
  [data-state="open"] {
    background-color: violet4;
    color: violet11;
  },
  `,
]);

const StyledLabel = styled(DropdownMenuPrimitive.Label)([
  tw`pl-6 text-sm leading-[25px] text-primary`,
]);

const StyledSeparator = styled(DropdownMenuPrimitive.Separator)([
  tw`m-2.5 h-px bg-purple-600`,
]);

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator)([
  tw`absolute left-0 inline-flex items-center justify-center w-[25px]`,
]);

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
// export const DropdownMenuSubContent = SubContent;

const RightSlot = styled.div([
  // color: mauve.mauve11,
  tw`pl-5 ml-auto `,
  tw`[> i]:block`,
  css`  
    [data-highlighted] > *: { color: "white" },
    [data-disabled] &: { color: mauve.mauve8 },
  `,
]);

// const IconButton = styled.button([
//   css`
//     all: unset;
//     font-family: inherit;
//     box-shadow: 0 2px 10px ${theme`colors.purple.500`};
//     &:hover: {
//       background-color: ${theme`colors.purple.800`};
//     }
//     &:focus: {
//       box-shadow: 0 0 0 2px black;
//     }
//   `,
//   tw`inline-flex items-center justify-center rounded-full bg-background text-newAccent h-[35px] w-[35px]`,
// ]);

interface Props {
  triggerNode?: React.ReactNode;
}

export const DropdownMenuDemo = ({ triggerNode }: Props) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu tw="z-20">
      <DropdownMenuTrigger asChild>
        {/* <IconButton aria-label="Your account">
          <HamburgerMenuIcon />
        </IconButton> */}
        {triggerNode}
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={12} align="end">
        <DropdownMenuItem>
          New Tab <RightSlot>⌘+T</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <RightSlot>⌘+N</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Private Window <RightSlot>⇧+⌘+N</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            More Tools
            <RightSlot>
              <ChevronRightIcon />
            </RightSlot>
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          <DropdownMenuItemIndicator>
            <CheckIcon />
          </DropdownMenuItemIndicator>
          Show Bookmarks <RightSlot>⌘+B</RightSlot>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          <DropdownMenuItemIndicator>
            <CheckIcon />
          </DropdownMenuItemIndicator>
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="pedro">
            <DropdownMenuItemIndicator>
              <DotFilledIcon />
            </DropdownMenuItemIndicator>
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">
            <DropdownMenuItemIndicator>
              <DotFilledIcon />
            </DropdownMenuItemIndicator>
            Colm Tuite
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default { DropdownMenuDemo };
