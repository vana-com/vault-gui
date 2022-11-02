import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

import { Button, CanvasGrid, Footer, TitleAndMetaTags } from "src/components";

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-black");
    return () => {
      document.body.classList.remove("bg-black");
    };
  }, []);

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="&ldquo;Portrait&rdquo; by Vana is a generative art studio that can create self-portraits of you in infinite styles."
      />
      {/* translate3d(tx, ty, tz) */}
      <div className="relative min-h-screen">
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
              "after:absolute after:content-[''] after:inset-0 after:bg-gradient-radial after:to-black after:from-black/10",
              "after:blur-[10px]",
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
              className="flex flex-col gap-3"
            >
              <h1 className="Text-display Text-display--shadow text-[9vh]">
                You are a work of art
              </h1>
              <p className="text-white">
                &ldquo;Portrait&rdquo; by Vana is a generative art studio that
                can create self-portraits of you in infinite styles.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1, translateY: 5 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="pt-5"
            >
              <Link href="/create" passHref>
                <Button className="!w-5/6 !md:w-3/4 !bg-transparent">
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
          <div className="absolute bottom-0 w-full">
            <Footer blackTheme />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
