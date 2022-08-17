// import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "src/components/system/Styles";

const contentVariants = {
  full: tw`w-screen md:w-auto md:rounded-sm px-2 py-1.5`,
  minor: tw`w-[280px] rounded-md`,
} as const;

type DropdownContentVariant = keyof typeof contentVariants;

interface DropdownContentProps {
  variant: DropdownContentVariant;
}

const styledDropdownContent = ({ variant = "full" }: DropdownContentProps) => [
  // card
  tw`shadow-lg bg-background md:border border-separatorLight`,
  // typography
  tw`text-sm font-normal leading-none`,
  // state
  tw`cursor-pointer select-none`,
  // custom Emotion css (tw doesn't own this)
  // fill-mode: forwards is required for smooth animations in React 18
  // TODO: add @media (prefers-reduced-motion: no-preference) rule
  css`
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    will-change: transform, opacity;
    &[data-state="open"] {
      &[data-side="top"] { animation-name: ${slideDownAndFade} };
      &[data-side="right"] { animation-name: ${slideLeftAndFade} };
      &[data-side="bottom"] { animation-name: ${slideUpAndFade} };
      &[data-side="left"] { animation-name: ${slideRightAndFade} };
    },
  `,
  contentVariants[variant],
];

const styledDropdownArrow = [tw`fill-background`];

export { styledDropdownArrow, styledDropdownContent };

export type { DropdownContentProps, DropdownContentVariant };
