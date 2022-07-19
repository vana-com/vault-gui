// import { Flex } from './Flex'
import { GroupProps } from './Group'
import tw, { styled } from 'twin.macro'

// export const Stack = ({ children, reverse = false }: GroupProps) => {
//   return <Flex direction={reverse ? 'colReverse' : 'col'}>{children}</Flex>
// }

export const Stack = styled.div(({ reverse }: GroupProps) => [
  tw`flex`,
  reverse ? tw`flex-col-reverse` : tw`flex-col`,
])
