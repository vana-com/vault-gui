import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

export const dialogVariants = {
  // rounded-[40px] matches the roundness of p-inset
  // max-w-2xl pt-navH top-[40%]
  full: [
    tw`w-[90vw] h-auto min-h-[30vh] max-h-[85vh] rounded-[40px]`,
    css`
      max-width: calc(1280px - 200px);
    `,
  ],
  confirm: tw`w-[90vw] max-w-2xl h-auto min-h-[195px] max-h-[85vh] rounded-lg`,
} as const;

export type DialogVariant = keyof typeof dialogVariants;

// https://emotion.sh/docs/keyframes
// const contentShow = keyframes({
//   "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
//   "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
// });
const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, 0%) scale(1)" },
});

export interface DialogContentProps {
  variant?: DialogVariant;
}

export const styledDialogContent = ({
  variant = "full",
}: DialogContentProps) => [
  // layout
  tw`fixed top-navH left-[50%] transform -translate-x-1/2 -translate-y-1/2`,
  // card
  tw`overflow-auto shadow-xl p-inset bg-background`,
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
  // variants
  dialogVariants[variant],
];
