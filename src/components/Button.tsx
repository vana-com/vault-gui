import clsx from "clsx";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className"> &
  Record<string, unknown> & {
    className?: string;
    type?: "button" | "submit" | "reset";
    size?: "sm" | "lg";
  };

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, type = "button", className, size = "lg", ...props }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      {...props}
      className={clsx(
        // layout
        "relative inline-flex items-center justify-center gap-1",
        "select-none whitespace-nowrap align-middle outline-none",
        "w-auto",
        "rounded-none",
        // size
        size === "lg" && "px-4 h-[40px]",
        size === "sm" && "px-2.5 h-[27px] text-sm",
        // typography: inherit body size
        "font-sans font-normal",
        // color
        "text-white bg-black placeholder:text-stone-400",
        // bg
        "backdrop-blur-sm",
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
