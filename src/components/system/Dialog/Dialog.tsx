import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { Fragment, useState } from "react";

import { RadixComponentWithTriggerProps } from "src/types";

interface Props
  extends RadixComponentWithTriggerProps,
    DialogPrimitive.DialogContentProps {
  overlayClassName?: string;
  onOpenChange?: (isOpen: boolean) => void;
}

const Dialog = ({
  children,
  triggerNode,
  onOpenChange,
  overlayClassName = "max-w-md",
  contentClassName = "max-w-md",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const hey = true;

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={(opened) => {
        setIsOpen(opened);
        onOpenChange?.(opened);
      }}
      defaultOpen
    >
      <DialogPrimitive.Trigger asChild>{triggerNode}</DialogPrimitive.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className={clsx("fixed inset-0 z-20 bg-black/50", overlayClassName)}
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            forceMount
            className={clsx(
              "fixed z-50",
              "w-[90vw] rounded-lg lg:w-full",
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-white dark:bg-gray-800",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              contentClassName,
            )}
          >
            {children}

            <DialogPrimitive.Close
              className={clsx(
                "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              )}
            >
              <Cross1Icon className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  );
};

export { Dialog };
