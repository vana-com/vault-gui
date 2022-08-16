import { keyframes } from "@emotion/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

/* Read: https://emotion.sh/docs/keyframes */

const fadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" },
});

const fadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" },
});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideInRight = keyframes({
  from: { transform: "translate3d(100%,0,0)" },
  to: { transform: "translate3d(0,0,0)" },
});

const slideOutRight = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: "translate3d(100%,0,0)" },
});

export {
  fadeIn,
  fadeOut,
  slideDownAndFade,
  slideInRight,
  slideLeftAndFade,
  slideOutRight,
  slideRightAndFade,
  slideUpAndFade,
};
