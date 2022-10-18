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
        "relative inline-flex gap-1.5 select-none items-center justify-center rounded-md px-4 h-[40px] text-sm font-medium",
        // default color
        "bg-blueCrayola-500 text-white dark:bg-blueCrayola-500 dark:text-stone-100",
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
      <span className="relative inline-flex gap-1.5 select-none items-center justify-center">
        {children}
      </span>
    </button>
  ),
);

Button.displayName = "Button";

export { Button };
