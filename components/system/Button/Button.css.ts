import { apply } from 'twind'

export const variantMap = {
  success: 'green',
  primary: 'blue',
  warning: 'yellow',
  info: 'gray',
  danger: 'red',
} as const

export type ButtonVariant = keyof typeof variantMap

export const sizeMap = {
  sm: apply`text-xs py(2 md:1) px-2`,
  md: apply`text-sm py(3 md:2) px-2`,
  lg: apply`text-lg py-2 px-4`,
  xl: apply`text-xl py-3 px-6`,
} as const

export type ButtonSize = keyof typeof sizeMap

export const baseStyles = apply`
  w(full md:auto)
  text(sm white uppercase)
  px-4
  border-none
  transition-colors
  duration-300
  relative
  cursor-pointer
`
