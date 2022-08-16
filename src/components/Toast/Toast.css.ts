import { keyframes } from "@emotion/react";
import tw, { css } from "twin.macro";

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

export const viewport = [
  tw`fixed top-0 right-0`,
  tw`flex flex-col items-center justify-center gap-3`,
  tw`w-[390px] max-w-full m-0 outline-none z-[999]`,
  css`
    padding: ${VIEWPORT_PADDING}px;
  `,
];

export const rootVariants = {
  error: tw`bg-background text-label [> h3]:text-error`,
  success: tw`bg-background text-labelSecondary [> h3]:text-primary`,
  alert: tw`bg-background text-labelSecondary [> h3]:text-yellow-500`,
} as const;

export type ToastVariant = keyof typeof rootVariants;

export interface ToastProps {
  variant?: ToastVariant;
}

export const root = ({ variant }: ToastProps) => [
  tw`w-full px-4 py-3 rounded-md`,
  tw`grid items-center gap-0.5`,
  variant && rootVariants[variant],
  css`
    grid-template-areas: "title action" "description action";
    grid-template-columns: auto max-content;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    &[data-state="open"] {
      animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    &[data-state="closed"] {
      animation: ${hide} 100ms ease-in forwards;
    }
    &[data-swipe="move"] {
      transform: translateX(var(--radix-toast-swipe-move-x));
    }
    &[data-swipe="cancel"] {
      transform: translateX(0);
      transition: transform 200ms ease-out;
    }
    &[data-swipe="end"] {
      animation: ${swipeOut} 100ms ease-out forwards;
    }
  `,
];

export const title = [
  tw`text-base font-semibold`,
  css`
    grid-area: title;
  `,
];

export const description = [
  tw`text-sm`,
  css`
    grid-area: description;
  `,
];

export const action = [
  css`
    grid-area: action;
  `,
];
