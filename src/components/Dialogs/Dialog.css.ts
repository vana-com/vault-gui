import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

// importing transitions work intermittently, requires a fix…
import {
  fadeIn,
  fadeOut,
  // slideDialogDown,
  // slideDialogDownTop,
} from "src/components";

/* 
  IMPORTANT!
  `animation-fill-mode: forwards` required for smooth animations in React 18
  * https://github.com/radix-ui/primitives/issues/1074#issuecomment-1089555751
  * https://github.com/radix-ui/primitives/pull/1344 
 */

// Content variants
const variants = {
  full: [
    // rounded-[40px] matches the roundness of p-inset
    tw`w-[90vw] h-auto min-h-[30vh] max-h-[85vh] rounded-[40px]`,
    css`
      max-width: calc(1280px - 200px);
    `,
  ],
  confirm: tw`w-[90vw] max-w-2xl h-auto min-h-[195px] max-h-[85vh] rounded-lg`,
  // max-w-lg = 512px
  onboard: tw`w-[90vw] max-w-lg h-auto min-h-[195px] rounded-lg`,
} as const;

type DialogVariant = keyof typeof variants;

// importing these doesn't work…
const slideDialogDownTop = keyframes({
  "0%": { opacity: "0", transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: "1", transform: "translate(-50%, 0%) scale(1)" },
});

const slideDialogDown = keyframes({
  "0%": { opacity: "0", transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: "1", transform: "translate(-50%, 50%) scale(1)" },
});

// Content placements
const placements = {
  top: [
    tw`top-navH`,
    css`
      animation-name: ${slideDialogDownTop};
    `,
  ],
  center: [
    tw`top-0`,
    css`
      animation-name: ${slideDialogDown};
    `,
  ],
} as const;

type DialogPlacement = keyof typeof placements;

interface DialogContentProps {
  variant?: DialogVariant;
  placement?: DialogPlacement;
}

const styledDialogContent = ({
  variant = "full",
  placement = "top",
}: DialogContentProps) => [
  // layout & placement
  tw`fixed transform -translate-x-1/2 -translate-y-1/2 left-1/2`,
  // card
  tw`overflow-auto shadow-xl bg-background`,
  // color
  tw`text-label`,
  // state
  tw`outline-none`,
  // custom Emotion css (tw doesn't own this)
  // `animation-fill-mode: forwards` required for smooth animations in React 18
  css`
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  `,
  // variants
  placements[placement],
  variants[variant],
];

interface DialogOverlayProps {
  variant?: DialogVariant;
}

// Dialog overlay
// rgb(168 194 215 / 70%)
// rgb(123 175 219 / 80%)
// rgb(1 140 255 / 70 %) primary
const styledDialogOverlay = ({ variant = "full" }: DialogOverlayProps) => [
  tw`fixed inset-0 backdrop-blur-sm`,
  variant === "onboard"
    ? tw`bg-[rgb(123 175 219 / 80%)]`
    : tw`bg-backgroundScrim`,
  css`
    &[data-state="open"] {
      animation: ${fadeIn} 750ms cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
    &[data-state="closed"] {
      animation: ${fadeOut} 750ms cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
  `,
];

export { styledDialogContent, styledDialogOverlay };

export type { DialogContentProps, DialogOverlayProps };
