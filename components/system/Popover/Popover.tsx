import * as PopoverPrimitive from '@radix-ui/react-popover'
import React, { forwardRef } from 'react'
import tw from 'twin.macro'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverArrow = PopoverPrimitive.Arrow

export const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof PopoverPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  // manage PopoverContent colors when composing
  <PopoverPrimitive.Content
    tw="p-4 rounded-md shadow-lg max-w-[420px] min-w-[200px] break-words focus:outline-none"
    side="bottom"
    sideOffset={10}
    {...props}
    ref={forwardedRef}
  >
    {/* compose PopoverArrow to manage colors  */}
    {children}
  </PopoverPrimitive.Content>
))

PopoverContent.displayName = 'PopoverContent'
