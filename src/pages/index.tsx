import { Icon } from "@iconify/react";
import clsx from "clsx";
import type { NextPage } from "next";
import Link from "next/link";
import useMeasure from "react-use-measure";

import { CanvasGrid, FooterBadge, TitleAndMetaTags } from "src/components";

const Home: NextPage = () => {
  // consider that knowing bounds is only possible *after* the view renders
  // so you'll get zero values on the first run and be informed later
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  // Intersection observer to toggle the filters location
  // const { ref, inView } = useInView();

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
        className={clsx("relative min-h-screen bg-black")}
        style={{ height: `${screenHeight}px` }}
      >
        {/* CANVAS */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="transform scale-[1.07]">
            <div className="grid grid-cols-4 gap-[3px]">
              <CanvasGrid />
              <CanvasGrid />
            </div>
          </div>
        </div>

        {/* MASK */}
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute left-0 top-0 w-full h-[66vh] flex items-center justify-center">
          <div className="text-center px-inset">
            <div className="flex flex-col gap-w12">
              <h1 className="font-display text-[9vh] font-light leading-[0.925] tracking-[-0.02em] text-white">
                You are
                <br />a work
                <br />
                of art
              </h1>
              <Link href="/upload" passHref>
                <span className="text-white border border-white rounded-sm Button hover:cursor-pointer">
                  <span>Create your gallery</span>
                  <Icon icon="carbon:arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} />
      </div>
    </>
  );
};

export default Home;
