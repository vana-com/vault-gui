import { Box } from "../index";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

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
    <Box
      as={motion.div}
      animate={{ height: height || "auto" }}
      position="relative"
      overflow="hidden"
      {...boxProps}
    >
      <AnimatePresence initial={false}>
        <Box
          as={motion.div}
          key={JSON.stringify(children, ignoreCircularReferences())}
          position={height ? "absolute" : "relative"}
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
          <Box ref={ref} bg="slateLight.slate12">
            {children}
          </Box>
        </Box>
      </AnimatePresence>
    </Box>
  );
}

/**
 * Replacer function to JSON.stringify that ignores circular references and internal React properties.

 * https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    // eslint-disable-next-line consistent-return
    return value;
  };
};
