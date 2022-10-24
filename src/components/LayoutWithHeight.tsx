import clsx from "clsx";
import useMeasure from "react-use-measure";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const LayoutWithHeight = ({ children, className }: Props) => {
  // consider that knowing bounds is only possible *after* the view renders
  // so you'll get zero values on the first run and be informed later
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  // TESTS
  // console.log(bounds);

  return (
    <div
      ref={ref}
      className={clsx("relative min-h-screen", className)}
      style={{ height: `${screenHeight}px` }}
    >
      {children}
    </div>
  );
};

export { LayoutWithHeight };
