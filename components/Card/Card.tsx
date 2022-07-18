import { Box, BoxProps } from '../index'
import tw, { styled } from 'twin.macro'

interface Props extends BoxProps {
  children: React.ReactNode
  withShadow?: boolean
}

const Root = styled.div([
  tw`
    flex flex-col rounded-md shadow-xl
    min-h-[195px] h-full overflow-hidden
  `,
])

const Inner = styled.div([tw`flex flex-1 p-3 rounded-md lg:p-6`])

// {...props}
const Card = ({ children, ...props }: Props) => (
  <Root>
    <Inner>{children}</Inner>
  </Root>
)

export { Card }
