import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

import {
  Button,
  CanvasGrid,
  FooterBadge,
  TitleAndMetaTags,
} from "src/components";

const Home: NextPage = () => {
  // consider that knowing bounds is only possible *after* the view renders
  // so you'll get zero values on the first run and be informed later
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  // Intersection observer to toggle the filters location
  // const { ref, inView } = useInView();

  useEffect(() => {
    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  }, []);

  // TESTS
  console.log(bounds);

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="Discover projects you can earn and learn from with your Vana Vault"
      />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        {/* CANVAS */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="transform scale-[1.07]">
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-[3px] md:gap-4">
              <CanvasGrid />
            </div>
          </div>
        </div>

        {/* MASK */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={clsx(
              "absolute -inset-[12vw]",
              "bg-black/30",
              // from-cyan-800/50
              "after:absolute after:content-[''] after:inset-0 after:bg-gradient-radial after:to-black after:from-black/10",
              "after:blur-[10px]",
              // after:z-[-1]
            )}
          />
        </div>

        {/* CTA */}
        <div className="absolute inset-0 flex items-center justify-center h-[70vh] pointer-events-none">
          <div className="text-center pointer-events-auto px-inset">
            <motion.div
              initial={{ opacity: 0, scale: 1, translateY: 5 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col gap-6"
            >
              <h1 className="Text-display Text-display--shadow text-[9vh]">
                You are a work of art
              </h1>
              <Link href="/create" passHref>
                <Button className="">
                  <span>Create your gallery</span>
                  <Icon icon="carbon:arrow-right" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <FooterBadge screenHeight={screenHeight} />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
