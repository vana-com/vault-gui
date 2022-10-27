import clsx from "clsx";

interface Props {
  inView: boolean;
  heading: string | React.ReactNode;
  children?: React.ReactNode;
  viewRefNode: React.ReactNode;
  hideSticky?: boolean;
}

const PageHeading = ({
  inView,
  children,
  heading,
  viewRefNode,
  hideSticky,
}: Props) => (
  <div
    className={clsx(
      "flex flex-col gap-3 py-3 bg-white lg:gap-w6 scroll-mt-w12",
      !hideSticky && "sticky top-0 z-10",
    )}
  >
    {/* our inView ref */}
    {viewRefNode}
    <h1
      className={clsx(
        "Text-display transition-all duration-250 ease",
        inView ? "text-[4.5vh]" : "text-[27px]",
      )}
    >
      {heading}
    </h1>
    {children}
  </div>
);

export { PageHeading };
