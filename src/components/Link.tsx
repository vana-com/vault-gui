import clsx from "clsx";

interface Props {
  children: React.ReactNode | string;
  href: string;
  className?: string;
  [x: string]: any;
}

const Link = ({ href, children, className, ...props }: Props) => (
  <a
    href={href}
    className={clsx(
      "underline underline-offset-[0.2em] decoration-[0.0125em] decoration-text-stone-900/40 hover:text-stone-900",
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export { Link };
