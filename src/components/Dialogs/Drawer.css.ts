import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

// import { slideInRight, slideOutRight } from "src/components";

/* 
  TODO: For some unknown reason, importing transitions here does NOT work,
  despite working in DropdownMenu.css… Needs investigation.

  NB! `animation-fill-mode: forwards` is required for smooth animations in React 18
*/

const slideInRight = keyframes({
  "0%": { transform: "translate3d(100%,0,0)" },
  "100%": { transform: "translate3d(0,0,0)" },
});

const slideOutRight = keyframes({
  "0%": { transform: "translate3d(0,0,0)" },
  "100%": { transform: "translate3d(100%,0,0)" },
});

const styledDrawerContent = [
  tw`fixed top-0 bottom-0 right-0 outline-none bg-background h-full overflow-auto w-11/12 lg:max-w-[620px]`,
  css`
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: forwards;
    will-change: transform;
    &[data-state="open"] {
      animation-name: ${slideInRight};
    }
    &[data-state="closed"] {
      animation-name: ${slideOutRight};
    }
  `,
];

export { styledDrawerContent };
