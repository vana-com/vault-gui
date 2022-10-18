// import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";

import { RadixComponentWithTriggerProps } from "src/types";

interface Props
  extends RadixComponentWithTriggerProps,
    PopoverPrimitive.PopoverProps,
    PopoverPrimitive.PopoverContentProps {
  showArrow?: boolean;
}

const Popover = ({
  children,
  triggerNode,
  side = "bottom",
  align = "center",
  sideOffset = 5,
  showArrow,
  modal,
  contentClassName = "w-48 md:w-56 shadow-md rounded-md px-4 py-2.5 bg-stone-800 outline-none",
}: Props) => (
  <PopoverPrimitive.Root modal={modal}>
    <PopoverPrimitive.Trigger asChild>{triggerNode}</PopoverPrimitive.Trigger>
    {/* <PopoverPrimitive.Portal> */}
    <PopoverPrimitive.Content
      side={side}
      sideOffset={sideOffset}
      align={align}
      className={clsx(
        "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
        contentClassName,
      )}
    >
      {showArrow && <PopoverPrimitive.Arrow className="fill-stone-800" />}
      <span className="block font-sans text-xs leading-normal text-white">
        {children}
      </span>

      {/* <PopoverPrimitive.Close
          className={clsx(
            "absolute top-2.5 right-2.5 inline-flex items-center justify-center rounded-full p-1",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            )}
            >
            <Cross1Icon className="w-3 h-3 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
          </PopoverPrimitive.Close> */}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Root>
);

export { Popover };
