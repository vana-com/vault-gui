import { style } from "@vanilla-extract/css";
import { atoms } from "css/atoms";
import { vars } from "css/vars.css";

// const stackStyle = style({})

export const uploadStack = style([
  atoms({
    borderRadius: "2",
  }),
]);

export const uploadInnerStack = style([
  atoms({
    gap: { xs: "1", lg: "4" },
    width: "full",
  }),
  style({}),
]);

export const instructionsRoot = style([
  atoms({
    paddingY: "3",
    width: "full",
  }),
  style({
    cursor: "pointer",
  }),
]);

export const instructionsContent = style([
  atoms({
    paddingTop: "3",
    paddingBottom: "6",
  }),
]);

export const uploadButton = style([
  atoms({
    backgroundColor: "gray10",
  }),
  style({}),
]);
