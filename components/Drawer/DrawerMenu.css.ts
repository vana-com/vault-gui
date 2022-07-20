import tw, { TwStyle } from "twin.macro";

const DRAWER_SIZE_BASE = 250;
const DRAWER_SIZE_LG = 540;

// responsiveStyle({
//   xs: {
//     width: `calc(${DRAWER_SIZE_BASE}px + ${vars.space[6]})`,
//   },
//   lg: {
//     width: `calc(${DRAWER_SIZE_LG}px + ${vars.space[6]})`,
//   },
// }),

export const styledContent = [
  tw`fixed top-0 bottom-0 right-0 z-20 outline-none`,
];
