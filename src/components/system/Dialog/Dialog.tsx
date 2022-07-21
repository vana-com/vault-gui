import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { forwardRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogOverlay = DialogPrimitive.Overlay;
export const DialogClose = DialogPrimitive.Close;

export const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentProps<typeof DialogPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  // manage DialogContent colors when composing
  <DialogPrimitive.Content {...props} ref={forwardedRef}>
    {/* compose DialogArrow to manage colors  */}
    {children}
  </DialogPrimitive.Content>
));

DialogContent.displayName = "DialogContent";
