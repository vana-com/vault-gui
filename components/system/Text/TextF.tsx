import { Box, ClassValue } from 'components'
import React from 'react'
import { tw, apply } from 'twin.macro'
import * as vars from './Text.css'

// & styles.Variants
type Props = {
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
  variant?: vars.TextVariant
  weight?: vars.TextWeight
  children?: React.ReactNode
  className?: ClassValue | string
}

export const Text = React.forwardRef(
  (
    {
      as = 'div',
      children,
      className,
      variant = 'body',
      weight = 'normal',
    }: Props,
    ref: React.Ref<HTMLElement>
  ) => {
    // Collect all styles into one class
    const instanceStyles = apply`
      ${variant}
      ${weight}
    `

    return (
      <Box as={as} className={tw(instanceStyles, className)} ref={ref}>
        {children}
      </Box>
    )
  }
)

export type TextProps = Parameters<typeof Text>[0]

Text.displayName = 'Text'
