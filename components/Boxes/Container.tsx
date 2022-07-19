import tw, { styled, css } from 'twin.macro'

const containerSize = {
  sm: tw`sm:max-w-2xl`,
  lg: tw`sm:max-w-3xl`,
} as const

type Size = keyof typeof containerSize

interface Props {
  size?: Size
}

export const Container = styled.div(({ size = 'sm' }: Props) => [
  tw`w-full px-4 mx-auto`,
  css`
    ${containerSize[size]}
  `,
])
