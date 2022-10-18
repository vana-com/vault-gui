import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx from "clsx";

import { RadixComponentWithTriggerProps } from "src/types";

export interface TooltipProps
  extends RadixComponentWithTriggerProps,
    TooltipPrimitive.TooltipContentProps,
    TooltipPrimitive.TooltipProps {}

const Tooltip = ({
  children,
  triggerNode,
  side = "bottom",
  align = "end",
  sideOffset = 0,
  contentClassName,
  delayDuration = 700,
  key,
}: TooltipProps) => (
  <TooltipPrimitive.Root delayDuration={delayDuration}>
    <TooltipPrimitive.Trigger asChild>
      {/* NB! The trigger child MUST be an HTML element, not a Component */}
      <span className="hover:cursor-pointer">{triggerNode}</span>
    </TooltipPrimitive.Trigger>
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        key={key}
        side={side}
        sideOffset={sideOffset}
        align={align}
        sticky="always"
        className={clsx(
          "radix-side-top:animate-slide-down-fade",
          "radix-side-right:animate-slide-left-fade",
          "radix-side-bottom:animate-slide-up-fade",
          "radix-side-left:animate-slide-right-fade",
          "inline-flex items-center rounded-md px-4 py-2.5",
          "bg-stone-800",
          "max-w-[300px] z-50",
          contentClassName,
        )}
      >
        <TooltipPrimitive.Arrow className="fill-current" />
        <span className="block font-sans text-xs leading-normal text-white">
          {children}
        </span>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  </TooltipPrimitive.Root>
);

export { Tooltip };
