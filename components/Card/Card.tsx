import { Box, BoxProps } from '../index'
import * as styles from './Card.css'
import { tw } from 'twind'

interface Props extends BoxProps {
  children: React.ReactNode
  withShadow?: boolean
}

const Card = ({ children, withShadow, ...props }: Props) => (
  <Box className={tw(styles.root)} {...props}>
    <Box className={tw(styles.inner)}>{children}</Box>
  </Box>
)

export { Card }
