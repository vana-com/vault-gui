import tw, { TwStyle } from 'twin.macro'

type ButtonVariant = 'success' | 'primary' | 'info'
// export type ButtonVariant = keyof typeof buttonVariants

export const buttonVariants: Record<ButtonVariant, TwStyle> = {
  success: tw`bg-green-500`,
  primary: tw`bg-blue-500`,
  info: tw`bg-gray-500`,
}

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
// export type ButtonSize = keyof typeof buttonSizes

export const buttonSizes: Record<ButtonSize, TwStyle> = {
  sm: tw`px-2 py-2 text-xs md:py-1`,
  md: tw`px-2 py-3 text-sm md:py-2`,
  lg: tw`px-4 py-2 text-lg`,
  xl: tw`px-6 py-3 text-xl`,
}

// export type ButtonStyleProps = ButtonVariant &
//   ButtonSize & {
//     round?: boolean
//     isDisabled?: boolean
//   }

export interface ButtonStyleProps {
  round?: boolean
  isDisabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

export const buttonStyle = ({
  size,
  variant,
  round,
  isDisabled,
}: ButtonStyleProps) => [
  // base
  tw`relative w-full px-4 text-sm text-white uppercase transition-colors duration-300 border-none cursor-pointer md:w-auto`,

  // bg-${styles.variantMap[variant]}(600 700(hover:& focus:&)))
  buttonSizes[size],
  buttonVariants[variant],
  round ? tw`rounded-full` : tw`rounded-lg`,
  isDisabled && tw`text-gray-100 bg-gray-400 cursor-not-allowed`,
]
