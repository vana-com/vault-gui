import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { Cross1Icon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React, { Fragment } from "react";

interface Props {
  buttonNode?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  overlayClassName?: string;
  contentClassName?: string;
}

const DialogControlled = ({
  buttonNode,
  children,
  open,
  onOpenChange,
  overlayClassName = "bg-black/50",
  contentClassName = "max-w-[540px]",
}: Props) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    {buttonNode && (
      <DialogPrimitive.Trigger asChild>{buttonNode}</DialogPrimitive.Trigger>
    )}
    <Transition.Root show={open}>
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
          className={clsx("fixed inset-0 z-20", overlayClassName)}
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
          // Don't close the Dialog when clicking outside
          onPointerDownOutside={(event) => event.preventDefault()}
          className={clsx(
            "fixed z-50 shadow-2xl",
            "w-[95vw] rounded-xl md:w-full",
            "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
            "bg-white dark:bg-gray-800",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            contentClassName,
          )}
        >
          {children}
          {/* Don't allow the Dialog to be closed by the Close primitive */}
          {/* <DialogPrimitive.Close
            className={clsx(
              "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            )}
          >
            <Cross1Icon className="w-5 h-5 text-stone-500 hover:text-stone-900 dark:text-gray-500 dark:hover:text-gray-400" />
          </DialogPrimitive.Close> */}
        </DialogPrimitive.Content>
      </Transition.Child>
    </Transition.Root>
  </DialogPrimitive.Root>
);

export { DialogControlled };
