import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import tw from "twin.macro";

/**
 * Don't forget to wrap your markup with MotionConfig when using this component.
 * import { MotionConfig } from "framer-motion"
 * From: https://github.com/samselikoff/2022-06-09-resizable-panel
 */

interface CardResizableProps {
  children: React.ReactNode;
  boxProps?: any;
}

export function CardResizable({ children, boxProps }: CardResizableProps) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || "auto" }}
      tw="relative overflow-hidden"
      {...boxProps}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          css={[height ? tw`absolute` : tw`relative`]}
          initial={{
            x: 384,
          }}
          animate={{
            x: 0,
            // transition: { duration: duration / 2, delay: duration / 2 },
          }}
          exit={{
            x: -384,
            // transition: { duration: duration / 2 },
          }}
        >
          <div ref={ref} tw="bg-background">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Replacer function to JSON.stringify that ignores circular references and internal React properties.

 * https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: object | null) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    // eslint-disable-next-line consistent-return
    return value;
  };
};
