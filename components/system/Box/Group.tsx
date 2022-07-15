import { Flex, FlexProps } from './Flex'
import { tw, apply, CSSProperties } from 'twind'

interface GroupProps extends FlexProps {
  reverse?: boolean
}

export const Group = ({ children, className, reverse }: GroupProps) => {
  // Flex direction defaults to "row"
  const instanceStyles = apply`
    ${reverse ? 'flex-row-reverse' : ''}
  `
  return <Flex className={tw(instanceStyles)}>{children}</Flex>
}
