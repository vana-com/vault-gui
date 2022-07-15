import { Box, ClassValue } from 'components'
import React from 'react'
import { tw, apply } from 'twind'
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
  className?: ClassValue | string
}

export const Text = ({
  as = 'div',
  children,
  className,
  variant = 'body',
  weight = 'normal',
}: TextProps) => {
  // Collect all styles into one class
  const instanceStyles = apply`
    ${styles.variantMap[variant]}
    ${styles.weightMap[weight]}
  `

  return (
    <Box as={as} className={tw(instanceStyles, className)}>
      {children}
    </Box>
  )
}
