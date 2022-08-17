import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import tw, { css, styled } from "twin.macro";

import {
  DropdownContentVariant,
  styledDropdownContent,
} from "./DropdownMenu.css";

interface ContentProps {
  children: React.ReactNode;
  [key: string]: any;
  variant: DropdownContentVariant;
}

function Content({ children, variant = "full", ...props }: ContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        css={styledDropdownContent({ variant })}
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

// Exports: currently only using these…
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;

// These are not yet in use…
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
