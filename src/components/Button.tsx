import clsx from "clsx";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className"> &
  Record<string, unknown> & { className?: string };

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => (
    <button
      type="button"
      ref={ref}
      {...props}
      className={clsx(
        // layout
        "relative inline-flex items-center justify-center gap-1.5",
        "select-none whitespace-nowrap align-middle outline-none",
        "w-auto",
        "rounded-none",
        // size
        "px-4 h-[40px]",
        // typography: inherit body size
        "font-normal",
        // bg
        // "bg-blueCrayola-500 dark:bg-blueCrayola-500",
        "backdrop-blur-sm",
        // color
        "text-white dark:text-stone-100",
        // border
        "border border-current",
        // IX states
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // default hover
        "overflow-hidden before:absolute before:inset-0 hover:before:bg-black/10 before:transition-all before:duration-300 before:ease-in-out",
        // Register all radix states
        "group",
        // "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
        // "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
        // "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50",
        className,
      )}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export { Button };
