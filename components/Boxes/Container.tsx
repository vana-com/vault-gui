import tw, { styled, css } from 'twin.macro'

const sizeMap = {
  sm: tw`sm:max-w-2xl`,
  lg: tw`sm:max-w-3xl`,
} as const

// type Size = keyof typeof sizeMap

type Props = {
  size?: 'sm' | 'lg'
}

export const Container = styled.div(({ size = 'sm' }: Props) => [
  // base styles
  tw`w-full px-4 mx-auto`,

  // sizes
  css`
    ${sizeMap[size]}
  `,
])

// return <Box className={tw(instanceStyles, className)}>{children}</Box>

// export const breakpoints = {
//   sm: 640,
//   md: 768,
//   lg: 1024,
//   xl: 1280,
//   xxl: 1540,
// } as const

// export type Breakpoint = keyof typeof breakpoints

// export const breakpointNames = Object.keys(breakpoints) as Breakpoint[]
