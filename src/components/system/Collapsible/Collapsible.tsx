import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { forwardRef } from "react";

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export const CollapsibleContent = forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentProps<typeof CollapsiblePrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  // className={root}
  <CollapsiblePrimitive.Content {...props} ref={forwardedRef}>
    {children}
  </CollapsiblePrimitive.Content>
));

CollapsibleContent.displayName = "CollapsibleContent";
