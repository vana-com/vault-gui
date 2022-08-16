import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

// importing from outside does NOT work, requires a fix…
// import { fadeIn, fadeOut } from "src/components";

interface TriggerProps {
  isRounded2xl: boolean;
}

// These styles appear when Dialogtrigger is NOT `asChild`
const styledDialogTrigger = ({ isRounded2xl = true }: TriggerProps) => [
  tw`transform translate-y-0 border border-transparent`,
  tw`focus:(translate-y-px border-current ring-1 ring-separatorLight ring-offset-4 ring-offset-separatorLight)`,
  // this doesn't work…
  // tw`[data-state="open"]:(outline)`,
  isRounded2xl ? tw`rounded-2xl` : tw`rounded`,
];

const fadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" },
});

const fadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" },
});

// `animation-fill-mode: forwards` required for smooth animations in React 18
// https://github.com/radix-ui/primitives/issues/1074#issuecomment-1089555751
// https://github.com/radix-ui/primitives/pull/1344
const styledDialogOverlay = [
  tw`fixed inset-0 bg-backgroundScrim backdrop-blur-sm`,
  css`
    &[data-state="open"] {
      animation: ${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
    &[data-state="closed"] {
      animation: ${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
  `,
];

const dialogVariants = {
  // rounded-[40px] matches the roundness of p-inset
  full: [
    tw`w-[90vw] h-auto min-h-[30vh] max-h-[85vh] rounded-[40px]`,
    css`
      max-width: calc(1280px - 200px);
    `,
  ],
  confirm: tw`w-[90vw] max-w-2xl h-auto min-h-[195px] max-h-[85vh] rounded-lg`,
} as const;

type DialogVariant = keyof typeof dialogVariants;

// translateY to 0% in order to use `top-navH`
const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, 0%) scale(1)" },
});

interface DialogContentProps {
  variant?: DialogVariant;
}

const styledDialogContent = ({ variant = "full" }: DialogContentProps) => [
  // layout
  tw`fixed top-navH left-[50%] transform -translate-x-1/2 -translate-y-1/2`,
  // card
  tw`overflow-auto shadow-xl p-inset bg-background`,
  // typography
  tw`text-label`,
  // state
  tw`outline-none`,
  // custom Emotion css (tw doesn't own this)
  // `animation-fill-mode: forwards` required for smooth animations in React 18
  css`
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  `,
  // variants last
  dialogVariants[variant],
];

export { styledDialogContent, styledDialogOverlay, styledDialogTrigger };

export type { DialogContentProps, DialogVariant };
