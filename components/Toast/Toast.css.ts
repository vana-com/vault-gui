import { keyframes, style } from "@vanilla-extract/css";
import { atoms } from "css/atoms";
import { vars } from "css/vars.css";

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const viewport = style([
  atoms({
    position: "fixed",
    display: "flex",
    flexDirection: "column",
  }),
  style({
    bottom: 0,
    right: 0,
    padding: VIEWPORT_PADDING,
    gap: 10,
    width: 390,
    maxWidth: "100vw",
    margin: 0,
    listStyle: "none",
    zIndex: 2147483647,
    outline: "none",
  }),
]);

export const root = style([
  atoms({
    backgroundColor: "background",
    borderRadius: "2",
    display: "grid",
    alignItems: "center",
    padding: "5",
  }),
  style({
    // grid
    gridTemplateAreas: '"title action" "description action"',
    gridTemplateColumns: "auto max-content",
    columnGap: 15,
    // rest
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    selectors: {
      '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in forwards`,
      },
      '&[data-swipe="move"]': {
        transform: "translateX(var(--radix-toast-swipe-move-x))",
      },
      '&[data-swipe="cancel"]': {
        transform: "translateX(0)",
        transition: "transform 200ms ease-out",
      },
      '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out forwards`,
      },
    },
  }),
]);

export const title = style({
  gridArea: "title",
  marginBottom: 5,
  fontWeight: 500,
  // color: vars.colors.gray90,
  fontSize: 15,
});

export const description = style({
  gridArea: "description",
  margin: 0,
  // color: vars.colors.gray70,
  fontSize: 13,
  lineHeight: 1.3,
});

export const action = style([
  atoms({}),
  style({
    gridArea: "action",
  }),
]);
