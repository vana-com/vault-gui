import * as PopoverPrimitive from '@radix-ui/react-popover'
import React, { forwardRef } from 'react'
// import { content, arrow } from "./Popover.css"
import tw, { styled } from 'twin.macro'

// boxShadow: "0 0 24px rgba(0, 0, 0, .1)",
// const Content = styled.PopoverPrimitive.Content(({ variant, isSmall }: ButtonProps) => [

// Exports
export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof PopoverPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  // bg-white-900
  <PopoverPrimitive.Content
    tw="bg-white text-base font-normal p-4 rounded-md shadow-lg max-w-[420px] min-w-[200px] break-words focus:outline-none"
    side="bottom"
    sideOffset={10}
    {...props}
    ref={forwardedRef}
  >
    {children}
    <PopoverPrimitive.Arrow tw="fill-current" />
  </PopoverPrimitive.Content>
))

PopoverContent.displayName = 'PopoverContent'
