import { keyframes, style, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { atoms } from "css/atoms";
import { responsiveStyle } from "css/responsiveStyle";
// import { vars } from "css/vars.css";

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const styledContent = style([
  atoms({
    backgroundColor: "fillElevated",
    position: "fixed",
    maxWidth: "screenSm",
    padding: {
      xs: "4",
      lg: "8",
    },
  }),
  style({
    outline: "none",
    borderRadius: 6,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    // maxWidth: "450px",
    maxHeight: "85vh",
    minHeight: 195,
    padding: 25,
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    selectors: {
      // "@media (prefers-reduced-motion: no-preference)": {
      //   animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
      // },
      "&:focus": { outline: "none" },
    },
  }),
  responsiveStyle({
    xs: {
      // width: `calc(${DRAWER_SIZE_BASE}px + ${vars.space[6]})`,
    },
  }),
]);
