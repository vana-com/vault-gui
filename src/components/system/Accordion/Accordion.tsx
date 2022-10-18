import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

import { AccordionItemProps } from "src/types";

interface Props extends AccordionPrimitive.AccordionContentProps {
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  items: AccordionItemProps[];
  collapsible?: boolean;
}

const Accordion = ({
  itemClassName,
  headerClassName,
  contentClassName,
  items,
  collapsible,
}: Props) => (
  <AccordionPrimitive.Root
    type="single"
    defaultValue="item-1"
    collapsible={collapsible}
    className={clsx("space-y-4")}
  >
    {items.map(({ header, content }, i) => (
      <AccordionPrimitive.Item
        // eslint-disable-next-line react/no-array-index-key
        key={`header-${i}`}
        value={`item-${i + 1}`}
        // "focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:outline-none"
        className={clsx(itemClassName)}
      >
        <AccordionPrimitive.Header className="w-full">
          {/* "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg", */}
          <AccordionPrimitive.Trigger
            className={clsx(
              "group",
              "focus:outline-none",
              "inline-flex w-full items-center justify-start gap-1.5",
              "text-left",
            )}
          >
            <span className={headerClassName}>{header}</span>
            <ChevronDownIcon
              className={clsx(
                "shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
                "group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
              )}
            />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className={contentClassName}>
          {content}
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    ))}
  </AccordionPrimitive.Root>
);

export { Accordion };
