import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

// importing from outside does NOT work, requires a fix…
// import { fadeIn, fadeOut } from "src/components";

const slideInRight = keyframes({
  from: { transform: "translate3d(100%,0,0)" },
  to: { transform: "translate3d(0,0,0)" },
});

const slideOutRight = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: "translate3d(100%,0,0)" },
});

// `animation-fill-mode: forwards` is required for smooth animations in React 18
const styledDrawerContent = [
  tw`fixed top-0 bottom-0 right-0 outline-none bg-background h-full overflow-auto w-11/12 lg:max-w-[620px]`,
  css`
    will-change: transform;
    &[data-state="open"] {
      animation: ${slideInRight} 300ms cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
    &[data-state="closed"] {
      animation: ${slideOutRight} 300ms cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
  `,
];

export { styledDrawerContent };
