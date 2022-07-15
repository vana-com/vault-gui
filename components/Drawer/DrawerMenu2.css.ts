import { keyframes, style, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { atoms } from "../../css/atoms";
import { vars } from "../../css/vars.css";

const fadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" },
});

const fadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" },
});

export const styledOverlay = style([
  atoms({
    position: "fixed",
    backgroundColor: "backgroundScrim",
  }),
  style({
    // backgroundColor: vars.colors.backgroundScrim,
    backdropFilter: "blur(4px)",
    inset: 0,
    selectors: {
      '&[data-state="open"]': {
        animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },
    },
  }),
]);

const translateDirection = createVar();

const slideIn = keyframes({
  from: { transform: translateDirection },
  to: { transform: "translate3d(0,0,0)" },
});

const slideOut = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: translateDirection },
});

export const styledContent = recipe({
  base: style([
    atoms({
      position: "fixed",
    }),
    style({
      bottom: 0,
      left: 0,
      outline: "none",
      position: "fixed",
      top: 0,
      width: 250,
      // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
      // Affects animated and non-animated dialogs alike.
      willChange: "transform",
      vars: {
        [translateDirection]: "translate3d(100%,0,0)",
      },
      selectors: {
        '&[data-state="open"]': {
          animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },
      },
    }),
  ]),
  variants: {
    side,
  },
  defaultVariants: {
    side: "right",
  },
});

const side = {
  top: {
    // transform: "translate3d(0,-100%,0)",
    width: "100%",
    height: 300,
    bottom: "auto",
    // vars: {
    //   [translateDirection]: "translate3d(0,-100%,0)",
    // },
  },
  right: {
    transform: "translate3d(100%,0,0)",
    right: "0",
  },
  bottom: {
    transform: "translate3d(0,100%,0)",
    width: "100%",
    height: 300,
    bottom: 0,
    top: "auto",
  },
  left: {
    transform: "translate3d(-100%,0,0)",
    left: 0,
  },
};

export type Side = keyof typeof side;

export const styledContent = recipe({
  base: style([
    atoms({
      position: "fixed",
    }),
    style({
      bottom: 0,
      left: 0,
      outline: "none",
      position: "fixed",
      top: 0,
      width: 250,
      // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
      // Affects animated and non-animated dialogs alike.
      willChange: "transform",
      vars: {
        [translateDirection]: "translate3d(100%,0,0)",
      },
      selectors: {
        '&[data-state="open"]': {
          animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },
      },
    }),
  ]),
  variants: {
    side,
  },
  defaultVariants: {
    side: "right",
  },
});

export type Variants = RecipeVariants<typeof styledContent>;
