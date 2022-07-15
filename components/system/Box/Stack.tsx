import { Flex, FlexProps } from './Flex'
import { tw, apply, CSSProperties } from 'twind'

interface StackProps extends FlexProps {
  reverse?: boolean
}

export const Stack = ({ children, className, reverse = false }: StackProps) => {
  // Flex direction defaults to "row"
  const instanceStyles = apply`
    ${reverse ? 'flex-col-reverse' : 'flex-col'}
  `
  return <Flex className={tw(instanceStyles, className)}>{children}</Flex>
}
