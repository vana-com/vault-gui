import { Flex } from './Flex'
import { GroupProps } from './Group'

export const Stack = ({ children, reverse = false }: GroupProps) => {
  return <Flex direction={reverse ? 'colReverse' : 'col'}>{children}</Flex>
}
