import * as React from 'react'
import { tw, apply } from 'twind'
import { Box, BoxProps } from './Box'
// import { ComponentChildren } from '../../types'

/* 
  Flex is a shortcut component for using Tailwind flex props. 
  See: https://tailwindcss.com/docs/flex-basis 
 */

const direction = ['row', 'row-reverse', 'col', 'col-reverse'] as const
// https://steveholgado.com/typescript-types-from-arrays/
export type Direction = typeof direction[number]

// const flex = [1, 'auto', 'initial', 'none'] as const
// const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const
// const alignItems = [...flexAlignment, 'baseline'] as const
// const justifyContent = [
//   ...flexAlignment,
//   'space-around',
//   'space-between',
// ] as const
// const justifySelf = flexAlignment

export type FlexProps = BoxProps & {
  direction?: Direction
}

export const Flex = ({ direction = 'row', className, children }: FlexProps) => {
  const instanceStyles = apply`
    flex
    flex-${direction}
  `

  return <Box className={tw(instanceStyles, className)}>{children}</Box>
}
