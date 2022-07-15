import { style } from "@vanilla-extract/css";

/* Set the motion.div to always fill the space provided by the parent. This ensures smooth transitions */

export const styledMotionDiv = style({
  position: "absolute",
  inset: 0,
  height: "100%",
  zIndex: 12,
});
