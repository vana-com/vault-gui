// import { Flex } from './Flex'
import tw, { styled } from "twin.macro";

import { GroupProps } from "./Group";

// export const Stack = ({ children, reverse = false }: GroupProps) => {
//   return <Flex direction={reverse ? 'colReverse' : 'col'}>{children}</Flex>
// }

export const Stack = styled.div(({ reverse }: GroupProps) => [
  tw`flex`,
  reverse ? tw`flex-col-reverse` : tw`flex-col`,
]);
