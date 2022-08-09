import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

// https://emotion.sh/docs/keyframes
const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const styledDialogContent = [
  // layout
  tw`fixed top-[40%] left-[50%] w-[90vw] max-w-2xl h-auto max-h-[85vh] min-h-[195px] overflow-auto transform -translate-x-1/2 -translate-y-1/2`,
  // card
  tw`p-4 overflow-auto rounded-lg shadow-xl bg-backgroundElevated md:p-8`,
  // typography
  tw`text-label`,
  // state
  tw`outline-none`,
  // custom Emotion css (tw doesn't own this)
  css`
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  `,
];

const contentShow2 = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -0%) scale(1)" },
});

export const styledDialogContent2 = [
  // layout
  tw`fixed top-navH left-[50%] w-[90vw] max-w-2xl h-auto max-h-[85vh] min-h-[30vh] transform -translate-x-1/2 -translate-y-1/2`,
  // card
  tw`p-inset overflow-auto rounded-[40px] shadow-xl bg-background`,
  // typography
  tw`text-label`,
  // state
  tw`outline-none`,
  // custom Emotion css (tw doesn't own this)
  css`
    max-width: calc(1280px - 200px);
    animation: ${contentShow2} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  `,
];
