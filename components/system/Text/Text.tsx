import { Box } from 'components'
import React from 'react'
// import tw, { TwStyle } from 'twin.macro'
import * as styles from './Text.css'

export type TextProps = {
  as?:
    | 'code'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'p'
    | 'ol'
    | 'ul'
    | 'li'
    | 'span'
  variant?: styles.TextVariant
  weight?: styles.TextWeight
  children?: React.ReactNode
  // tw?: TwStyle | string
}

export const Text = ({
  as = 'div',
  children,
  variant = 'body',
  weight = 'normal',
}: TextProps) => {
  return (
    <Box as={as} css={styles.textStyles({ variant, weight })}>
      {children}
    </Box>
  )
}
