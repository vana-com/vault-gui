// import { Flex, FlexProps } from './Flex'
import tw, { styled } from 'twin.macro'

// export interface GroupProps extends FlexProps {
export interface GroupProps {
  reverse?: boolean
}

// export const Group = ({ children, reverse = false }: GroupProps) => {
//   return (
//     // <Flex css={[tw`flex`, reverse ? tw`flex-row-reverse` : tw`flex-row`]}>
//     <Flex direction={reverse ? 'rowReverse' : 'row'}>{children}</Flex>
//   )
// }

export const Group = styled.div(({ reverse }: GroupProps) => [
  tw`flex`,
  reverse ? tw`flex-row-reverse` : tw`flex-row`,
])
