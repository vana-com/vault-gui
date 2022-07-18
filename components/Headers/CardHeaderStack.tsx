import { Flex, BoxProps } from 'components'
import tw, { styled, css } from 'twin.macro'

// const CardHeaderStack = ({ children, gap, ...props }: BoxProps) => (
//   <Flex
//     flexDirection="column"
//     gap={gap}
//     marginX="auto"
//     maxWidth="screenSm"
//     {...props}
//   >
//     {children}
//   </Flex>
// );

type Props = {
  gap?: string
}

const CardHeaderStack = styled.div([tw`flex flex-col max-w-xl gap-4 mx-auto`])

export { CardHeaderStack }
