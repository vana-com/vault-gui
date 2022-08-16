import tw, { css } from "twin.macro";

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "src/components/system/Styles";

export const styledTooltipContent = [
  // card
  tw`px-3 py-2.5 rounded-sm shadow-xl bg-label text-background relative z-10`,
  // typography
  tw`text-sm font-normal leading-none`,
  // state
  tw`select-none`,
  // custom Emotion css (tw doesn't own this)
  // TODO: add @media (prefers-reduced-motion: no-preference) rule
  css`
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state="delayed-open"] {
      &[data-side="top"]: { animation-name: ${slideDownAndFade} };
      &[data-side="right"]: { animation-name: ${slideLeftAndFade} };
      &[data-side="bottom"]: { animation-name: ${slideUpAndFade} };
      &[data-side="left"]: { animation-name: ${slideRightAndFade} };
    },
  `,
];

export const styledTooltipArrow = [tw`fill-label`];
