import tw, { TwStyle } from 'twin.macro'

// all: "unset",
// fontFamily: "inherit",
// boxShadow: `0 2px 10px ${vars.colors.blueGray60}`,
// selectors: {
//   '&[data-state="closed"]': { backgroundColor: "white" },
//   '&[data-state="open"]': { backgroundColor: vars.colors.purple30 },
//   "&:hover": { backgroundColor: vars.colors.purple30 },
//   "&:focus": { boxShadow: `0 0 0 2px black` },
// },

export const buttonVariants = {
  info: tw`bg-gray-500`,
  contrast: tw`bg-fillElevated text-label`,
  solid: tw`bg-primary text-label`,
  outline: tw`bg-transparent text-primary ring-1 ring-inset ring-primary`,
  ghost: tw`bg-fill text-label`,
  ghostSecondary: tw`bg-fill text-labelSecondary`,
  // 'link'? icon?
  icon: tw`items-center justify-center border text-background border-labelTertiary`,
} as const

export type ButtonVariant = keyof typeof buttonVariants

export const buttonSizes = {
  sm: tw`gap-1 px-2 py-1.5 text-xs md:py-0.5`,
  md: tw`h-[27px] gap-1 px-2 py-3 text-sm md:py-2`,
  lg: tw`h-[38px] gap-2 px-4 py-2 text-md w-full md:w-auto`,
  xl: tw`h-[44px] gap-2 px-6 py-3 text-md w-full md:w-auto`,
  full: tw`flex-1 h-full gap-2 px-6 py-3 text-lg`,
  icon: tw`h-[25px] w-[25px]`,
} as const

export type ButtonSize = keyof typeof buttonSizes

export interface ButtonStyleProps {
  round?: boolean
  isDisabled?: boolean
  variant: ButtonVariant
  size: ButtonSize
}

export const buttonStyle = ({
  size,
  variant,
  round,
  isDisabled,
}: ButtonStyleProps) => [
  // layout
  tw`relative inline-flex items-center justify-center`,
  // typography
  tw`font-medium leading-none`,
  // transition
  tw`transition-transform duration-100 ease-in-out`,
  // states
  tw`cursor-pointer will-change-transform focus:(outline outline-2 outline-offset-0 outline-primary)`,

  buttonSizes[size],
  buttonVariants[variant],
  round ? tw`rounded-full` : tw`rounded-lg`,
  isDisabled && tw`text-gray-100 bg-gray-400 cursor-not-allowed`,
]
