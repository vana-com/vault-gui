import tw from "twin.macro";

// TODO: add hover & focus states when we know the design…
const buttonVariants = {
  info: tw`bg-gray-500`,
  contrast: tw`bg-fillElevated text-label`,
  solid: tw`bg-primary text-background`,
  outline: tw`bg-transparent text-label ring-1 ring-inset ring-separator`,
  // hover:bg-fillSecondary
  ghost: tw`text-label`,
  ghostSecondary: tw`bg-fillSecondary text-labelSecondary`,
  icon: tw`items-center justify-center text-background h-[25px] w-[25px]`,
} as const;

type ButtonVariant = keyof typeof buttonVariants;

const buttonSizes = {
  initial: tw``,
  sm: tw`h-[21px] gap-1 px-2 text-xs`,
  md: tw`h-[28px] gap-1.5 px-2 text-sm`,
  // set a min-width so it looks good when the loading spinner is active
  // renderMinWidth(variant, size) && tw`min-w-[130px]`,
  lg: tw`h-[36px] gap-1.5 px-4 text-sm w-full md:w-auto min-w-[130px]`,
  xl: tw`h-[44px] gap-1.5 px-6 text-md w-full md:w-auto min-w-[130px]`,
  full: tw`flex-1 h-full gap-2 px-6 text-md rounded-2xl`,
} as const;

type ButtonSize = keyof typeof buttonSizes;

interface ButtonStyleProps {
  round?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const styledButton = ({
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
  tw`cursor-pointer will-change-transform focus:(outline outline-2 outline-offset-0 outline-hover)`,
  // default hover: variant !== "" &&
  tw`overflow-hidden before:(absolute inset-0) hover:before:(bg-hover)`,
  isDisabled && tw`cursor-not-allowed opacity-80`,
  // variants: rounded above variant & size so we can override
  round ? tw`rounded-full` : tw`rounded`,
  variant && buttonVariants[variant],
  size && buttonSizes[size],
];

export { styledButton };

export type { ButtonSize, ButtonStyleProps, ButtonVariant };
