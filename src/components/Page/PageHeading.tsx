import clsx from "clsx";

interface Props {
  underHeading?: React.ReactNode;
  children: React.ReactNode | string;
}

const PageHeading = ({ children, underHeading }: Props) => (
  <div
    className={clsx(
      "flex flex-col gap-3 bg-white lg:gap-w6 scroll-mt-w12",
      underHeading && "pb-3",
    )}
  >
    <h1 className="Text-display transition-all duration-250 ease text-[4.5vh]">
      {children}
    </h1>
    {underHeading}
  </div>
);

export { PageHeading };
