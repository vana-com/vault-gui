import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from "twin.macro";

import { Center, OnboardCard } from "src/components";
import { onboardingCards } from "src/data";
import { Children } from "src/types";

/* 
  Onboard is a carousel of primary Vault features.
  Makes use of this repo to create a carousel with Framer Motion: 
  https://github.com/samselikoff/2022-06-02-animated-carousel
 */

interface Props {
  direction: number;
  width: number;
}

// https://www.framer.com/docs/transition/##value-specific-transitions
const variants = {
  enter: ({ direction, width }: Props) => ({
    x: direction * width,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: ({ direction, width }: Props) => ({
    x: direction * -width,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

function usePrevious(state: any) {
  const [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}

const Onboard = ({ children }: Children) => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  const [ref, { width }] = useMeasure();
  const direction = count > previous ? 1 : -1;
  const cardIndex = count % onboardingCards.length;

  // TESTS
  // console.log("count", count);
  // console.log("width", width);
  // console.log("previous", previous);

  return (
    <>
      {/* 512px matches the modal's min-width */}
      <div
        ref={ref}
        css={[
          tw`h-[380px] w-[90vw] max-w-lg overflow-hidden relative`,
          tw`bg-gradient-to-b from-neutralDark`,
          // add a blue blur over the top of the background gradient
          tw`before:(content-[""] absolute z-[1] inset-0 w-full h-1/4 rounded-[75%] blur-3xl opacity-[0.24] bg-[rgb(0, 143, 253)])`,
          css`
            ::before {
              pointer-events: none;
              transform: translate(20%, -40%) rotate(8deg);
            }
          `,
        ]}
      >
        <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={count}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
            // transition={{ type: "spring", bounce: 0.3 }}
            tw="absolute h-full w-full"
          >
            <OnboardCard
              card={onboardingCards[cardIndex]}
              onClick={() => setCount(count + 1)}
              isLastCard={cardIndex === onboardingCards.length - 1}
            >
              {children}
            </OnboardCard>
          </motion.div>
        </AnimatePresence>
      </div>
      <Center tw="gap-2.5 p-7">
        {onboardingCards.map((card, index) => (
          <button
            type="button"
            key={card.heading}
            css={[
              tw`w-2.5 h-2.5 rounded-full bg-separator`,
              index === cardIndex && tw`transform scale-[1.15] bg-label`,
            ]}
            onClick={() => setCount(index)}
          />
        ))}
      </Center>
    </>
  );
};

export { Onboard };
