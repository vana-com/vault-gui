import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  inView: boolean;
  heading: string | React.ReactNode;
  children?: React.ReactNode;
  viewRefNode: React.ReactNode;
  hideSticky?: boolean;
}

/* Currently not in use but keep ing for later */

const PageHeadingSticky = ({
  inView,
  children,
  heading,
  viewRefNode,
  hideSticky,
}: Props) => {
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHasRendered(true);
    }, 100);
    return () => {};
  }, []);

  return (
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
          "Text-display duration-250 ease",
          hasRendered ? "transition-all" : "",
          inView ? "text-[4.5vh]" : "text-[27px]",
        )}
      >
        {heading}
      </h1>
      {children}
    </div>
  );
};

export { PageHeadingSticky };
