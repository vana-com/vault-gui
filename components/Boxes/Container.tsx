import { Box, BoxProps } from 'components'
import { tw, apply } from 'twind'

const sizeMap = {
  sm: apply`sm:max-w-2xl`,
  lg: apply`sm:max-w-3xl`,
} as const

type Size = keyof typeof sizeMap

const baseStyles = apply`
  w-full
  mx-auto
  px-4
`

type Props = BoxProps & {
  size?: Size
}

export const Container = ({ size = 'sm', className, children }: Props) => {
  const instanceStyles = apply`
    ${baseStyles}
    ${sizeMap[size]}
  `
  return <Box className={tw(instanceStyles, className)}>{children}</Box>
}

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1540,
} as const

export type Breakpoint = keyof typeof breakpoints

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[]
