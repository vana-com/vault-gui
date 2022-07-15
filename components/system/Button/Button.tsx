import * as React from 'react'
import { tw, apply } from 'twind'
import { Box, BoxProps, SpinnerIcon } from 'components'
import * as styles from './Button.css'

type BaseProps = {
  prefix?: React.ReactElement
  suffix?: React.ReactElement
  style?: React.CSSProperties
  id?: string
  round?: boolean
  isDisabled?: boolean
  isLoading?: boolean
} & styles.ButtonVariant &
  styles.ButtonSize &
  Pick<
    JSX.IntrinsicElements['button'],
    | 'onClick'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'children'
    | 'disabled'
    | 'type'
    | 'tabIndex'
  > &
  BoxProps

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

// export const Button = ({
//   size = 'md',
//   variant = 'primary',
//   round = false,
//   disabled = false,
//   className,
//   children,
// }: ButtonProps) => {
//   // Collect all styles into one class

//   // Allow passed classNames to override instance styles
//   return <button className={tw(instanceStyles, className)}>{children}</button>
// }

// shape = 'base',
// variant = 'contrast',

export const Button = React.forwardRef(
  (
    {
      children,
      className,
      id,
      isDisabled,
      isLoading,
      prefix,
      shadow,
      round,
      size = 'md',
      style,
      suffix,
      variant = 'primary',
      ...boxProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const instanceStyles = apply`
      ${styles.baseStyles}
      bg-${styles.variantMap[variant]}(600 700(hover:& focus:&)))
      ${styles.sizeMap[size]}
      rounded-${round ? 'full' : 'lg'}
      ${isDisabled && 'bg-gray-400 text-gray-100 cursor-not-allowed'}
    `

    return (
      <Box
        className={tw(instanceStyles, className)}
        ref={ref}
        {...boxProps}
        as={boxProps.as ?? 'button'}
        id={id}
        disabled={isDisabled}
        style={style}
      >
        {isLoading ? (
          <SpinnerIcon />
        ) : (
          <>
            {prefix && <Box className={tw('inline-flex -mt-px')}>{prefix}</Box>}
            {children}
            {suffix && <Box className={tw('inline-flex')}>{suffix}</Box>}
          </>
        )}
      </Box>
    )
  }
)

Button.displayName = 'Button'
