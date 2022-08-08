import tw from "twin.macro";

// TODO: add hover & focus states when we know the design…
export const buttonVariants = {
  info: tw`bg-gray-500`,
  contrast: tw`bg-fillElevated text-label`,
  solid: tw`bg-primary text-label`,
  outline: tw`bg-transparent text-label ring-1 ring-inset ring-separator`,
  ghost: tw`bg-fillSecondary text-label`,
  ghostSecondary: tw`bg-fillSecondary text-labelSecondary`,
  icon: tw`items-center justify-center text-background h-[25px] w-[25px]`,
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonSizes = {
  initial: tw``,
  sm: tw`h-[21px] gap-1 px-2 text-xs`,
  md: tw`h-[27px] gap-1 px-2 text-sm`,
  // set a min-width so it looks good when the loading spinner is active
  // renderMinWidth(variant, size) && tw`min-w-[130px]`,
  lg: tw`h-[38px] gap-1.5 px-4 text-md w-full md:w-auto min-w-[130px]`,
  xl: tw`h-[44px] gap-1.5 px-6 text-md w-full md:w-auto min-w-[130px]`,
  full: tw`flex-1 h-full gap-2 px-6 text-md rounded-[15px]`,
} as const;

export type ButtonSize = keyof typeof buttonSizes;

export interface ButtonStyleProps {
  round?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const buttonStyle = ({
  size,
  variant,
  round,
  isDisabled,
}: ButtonStyleProps) => [
  // reset Tailwind button preflight styles? Causes a bug, leave for now…
  // css`
  //   all: unset;
  // `,
  // layout
  tw`relative inline-flex items-center justify-center`,
  // typography
  tw`font-sans font-medium leading-none`,
  // transition
  tw`transition-transform duration-100 ease-in-out`,
  // states
  tw`cursor-pointer will-change-transform focus:(outline outline-2 outline-offset-0 outline-primary)`,
  // variants
  round ? tw`rounded-full` : tw`rounded`,
  variant && buttonVariants[variant],
  size && buttonSizes[size],
  isDisabled && tw`cursor-not-allowed opacity-80`,
];
