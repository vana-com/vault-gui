import clsx from "clsx";

interface Props {
  inView: boolean;
  heading: string | React.ReactNode;
  children: React.ReactNode;
  viewRefNode: React.ReactNode;
}

const PageHeading = ({ inView, children, heading, viewRefNode }: Props) => (
  <div className="sticky top-0 z-10 flex flex-col gap-2 py-3 bg-white lg:gap-w6 scroll-mt-w12">
    {/* our inView ref */}
    {viewRefNode}
    <h1
      className={clsx("Text-display", inView ? "text-[4.5vh]" : "text-[3.5vh]")}
    >
      {heading}
    </h1>
    {children}
  </div>
);

export { PageHeading };
