import * as React from 'react'
// import { TW } from 'twind'

/* 
  Box
  See: RainboxKit or https://jsmanifest.com/build-a-powerful-reusable-box-component-in-react/
  https://frontarm.com/james-k-nelson/4-ways-pass-children-react-elements
 */

type HTMLProperties<T = HTMLElement> = Omit<
  React.AllHTMLAttributes<T>,
  'as' | 'className'
>

// Probably better to use Twind here but can't find as yet…
// https://github.com/lukeed/clsx/blob/master/clsx.d.ts
export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined
export type ClassDictionary = Record<string, any>
export type ClassArray = ClassValue[]
export type ClassName = ClassValue | string

type Props = HTMLProperties & {
  as?: React.ElementType
  // children?: React.ReactNode
  className?: ClassName
}

export const Box = React.forwardRef<HTMLElement, Props>(
  ({ as = 'div', className, ...props }: Props, ref) => {
    return React.createElement(as, { className, ...props, ref })
  }
)

export type BoxProps = Parameters<typeof Box>[0]

Box.displayName = 'Box'
