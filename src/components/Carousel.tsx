// eslint-disable-next-line simple-import-sort/imports
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

/* 
  Ref: create a carousel with Framer Motion: 
  https://github.com/samselikoff/2022-06-02-animated-carousel
 */

interface VariantsProps {
  width: number;
}

// https://www.framer.com/docs/transition/##value-specific-transitions
const variants = {
  enter: ({ width }: VariantsProps) => ({
    x: width,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: ({ width }: VariantsProps) => ({
    x: -width,
    opacity: 0,
    transition: { duration: 0.15 },
  }),
};

interface Props {
  children: React.ReactNode;
  count: number;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel = ({ children, count }: Props) => {
  const [ref, { width }] = useMeasure();

  // TESTS
  // console.log("count", count);
  // console.log("width", width);

  return (
    <div ref={ref} className="relative w-full min-h-[300px] overflow-hidden">
      <AnimatePresence custom={{ width }}>
        <motion.div
          key={count}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={{ width }}
          className="absolute w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { Carousel };
