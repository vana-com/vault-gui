import clsx from "clsx";
import React from "react";

export type InputProps = {
  className?: string;
  onChange: (event: any) => void;
  required?: boolean;
} & Pick<
  JSX.IntrinsicElements["input"],
  "type" | "value" | "placeholder" | "required"
>;

// type Props = Omit<React.ComponentProps<"button">, "className"> &
//   Record<string, unknown> & { className?: string };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className={clsx(
        "relative inline-flex items-center justify-center gap-1.5",
        "select-none whitespace-nowrap align-middle outline-none",
        "h-inputH w-auto",
        "rounded-none px-4 h-[40px]",
        // typography: inherit body size
        "font-normal",
        // bg
        // "bg-blueCrayola-500 dark:bg-blueCrayola-500",
        "backdrop-blur-sm",
        // text
        "text-white dark:text-stone-100",
        // border
        "border border-current",
        className,
      )}
    />
  ),
);

export { Input };
