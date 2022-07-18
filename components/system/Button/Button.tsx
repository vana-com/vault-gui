import * as React from 'react'
import { Box, BoxProps, SpinnerIcon } from 'components'
import tw, { styled, css } from 'twin.macro'
import * as styles from './Button.css'

type BaseProps = {
  prefix?: React.ReactElement
  suffix?: React.ReactElement
  id?: string
  isLoading?: boolean
} & styles.ButtonStyleProps &
  BoxProps &
  Pick<
    JSX.IntrinsicElements['button'],
    | 'onClick'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'children'
    | 'disabled'
    | 'type'
    | 'tabIndex'
  >

type WithAnchor = {
  as?: 'a'
} & Pick<JSX.IntrinsicElements['a'], 'href' | 'rel' | 'target'>

type WithoutAnchor = {
  as?: 'button'
}

// export const iconSizeMapping: Record<styles.Size, keyof Theme['space']> = {
//   xs: '5',
//   s: '1',
//   m: '1',
//   l: '1',
//   xl: '1',
// }

export type ButtonProps = BaseProps & (WithAnchor | WithoutAnchor)

export const Button = React.forwardRef(
  (
    {
      children,
      id,
      isDisabled,
      isLoading,
      prefix,
      // shadow,
      round,
      size = 'md',
      suffix,
      variant = 'primary',
      ...boxProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Box
        ref={ref}
        {...boxProps}
        as={boxProps.as ?? 'button'}
        css={styles.buttonStyle({ size, variant, round, isDisabled })}
        id={id}
      >
        {isLoading ? (
          <SpinnerIcon />
        ) : (
          <>
            {prefix && <div tw="inline-flex -mt-px">{prefix}</div>}
            {children}
            {suffix && <div tw="inline-flex">{suffix}</div>}
          </>
        )}
      </Box>
    )
  }
)

Button.displayName = 'Button'
