import { keyframes, style, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { atoms } from "css/atoms";
import { responsiveStyle } from "css/responsiveStyle";
import { vars } from "css/vars.css";

const DRAWER_SIZE_BASE = 250;
const DRAWER_SIZE_LG = 540;

export const styledContent = style([
  atoms({
    position: "fixed",
    bottom: "0",
    right: "0",
    top: "0",
  }),
  style({
    outline: "none",
    zIndex: 12,
  }),
  responsiveStyle({
    xs: {
      width: `calc(${DRAWER_SIZE_BASE}px + ${vars.space[6]})`,
    },
    lg: {
      width: `calc(${DRAWER_SIZE_LG}px + ${vars.space[6]})`,
    },
  }),
]);

// MANTINE TESTS
export const styledMantineRoot = style({
  position: "fixed",
  inset: 0,
  outline: "none",
  zIndex: 11,
});

export const styledMantineOverlay = style([
  {},
  responsiveStyle({
    xs: {
      width: `calc(${DRAWER_SIZE_BASE}px + ${vars.space[6]})`,
    },
    lg: {
      width: `calc(${DRAWER_SIZE_LG}px + ${vars.space[6]})`,
    },
  }),
]);
