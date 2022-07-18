import { Flex, FlexProps } from './Flex'
import tw, { styled, css } from 'twin.macro'

export interface GroupProps extends FlexProps {
  reverse?: boolean
  children: React.ReactNode
}

export const Group = ({ children, reverse = false }: GroupProps) => {
  return (
    // <Flex css={[tw`flex`, reverse ? tw`flex-row-reverse` : tw`flex-row`]}>
    <Flex direction={reverse ? 'rowReverse' : 'row'}>{children}</Flex>
  )
}

// const directionMap = {
//   row: tw`flex-row`,
//   rowRev: tw`flex-row-reverse`,
//   col: tw`flex-col`,
//   colRev: tw`flex-col-reverse`,
// } as const

// export type Direction = keyof typeof directionMap

// export type FlexProps = {
//   direction?: Direction
// }

// export const Group = styled.Flex(({ direction = 'row' }: GroupProps) => [
//   tw`flex`,
//   css`
//     ${directionMap[direction]}
//   `,
// ])
