import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React from "react";

interface Props extends CollapsiblePrimitive.CollapsibleContentProps {
  children: React.ReactNode;
  triggerNode: React.ReactNode;
  className?: string;
}

const Collapsible = ({ children, triggerNode, className }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <CollapsiblePrimitive.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="inline"
    >
      <CollapsiblePrimitive.Trigger
        className={clsx(
          "group inline-flex w-full select-none items-center justify-between",
          "text-left text-sm",
          " dark:bg-gray-800 dark:text-gray-100",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
          className,
        )}
      >
        {triggerNode}
        <TriangleRightIcon className="duration-300 ease-in-out transform group-radix-state-open:rotate-90" />
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content className="flex flex-col mt-4 space-y-4">
        {children}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
};

export default Collapsible;
