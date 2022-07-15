import * as PopoverPrimitive from '@radix-ui/react-popover'
import React, { forwardRef } from 'react'
// import { content, arrow } from "./Popover.css"
import { tw, apply } from 'twind'

// boxShadow: "0 0 24px rgba(0, 0, 0, .1)",
export const content = apply`bg-white-900 text-base font-normal p-4 rounded-md shadow-lg max-w-[420px] min-w-[200px] break-words focus:outline-none`

export const arrow = apply`fill-current`

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof PopoverPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <PopoverPrimitive.Content
    className={tw(content)}
    side="bottom"
    sideOffset={10}
    {...props}
    ref={forwardedRef}
  >
    {children}
    <PopoverPrimitive.Arrow className={tw(arrow)} />
  </PopoverPrimitive.Content>
))

PopoverContent.displayName = 'PopoverContent'
