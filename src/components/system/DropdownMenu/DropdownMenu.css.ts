// import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "src/components/system/Styles";

export const styledDropdownContent = [
  // card
  tw`px-2 py-1.5 rounded-sm bg-background z-[999] border border-separatorLight shadow-lg`,
  // typography
  tw`text-sm font-normal leading-none`,
  // state
  tw`cursor-pointer select-none`,
  // custom Emotion css (tw doesn't own this)
  // TODO: add @media (prefers-reduced-motion: no-preference) rule
  // box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  css`
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state="open"] {
      &[data-side="top"]: { animation-name: ${slideDownAndFade} },
      &[data-side="right"]: { animation-name: ${slideLeftAndFade} },
      &[data-side="bottom"]: { animation-name: ${slideUpAndFade} },
      &[data-side="left"]: { animation-name: ${slideRightAndFade} },
    },
  `,
];

export const styledDropdownArrow = [tw`fill-background`];
