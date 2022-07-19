import { Box } from 'components'
import React from 'react'
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
  color?: styles.TextColor
  children?: React.ReactNode
}

export const Text = ({
  as = 'div',
  children,
  variant = 'body',
  weight, // allow variant weight to take precedence
  color = 'label',
  ...boxProps
}: TextProps) => {
  return (
    <Box
      as={as}
      css={styles.textStyles({ variant, weight, color })}
      {...boxProps}
    >
      {children}
    </Box>
  )
}
