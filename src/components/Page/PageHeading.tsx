import clsx from "clsx";

interface Props {
  underHeading?: React.ReactNode;
  children: React.ReactNode | string;
}

const PageHeading = ({ children, underHeading }: Props) => (
  <div
    className={clsx(
      "flex flex-col gap-3 bg-white scroll-mt-w12",
      underHeading && "pb-3 xl:pb-0",
    )}
  >
    <h1 className="transition-all Text-display text-displayMd duration-250 ease">
      {children}
    </h1>
    {underHeading}
  </div>
);

export { PageHeading };
