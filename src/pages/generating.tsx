import clsx from "clsx";
import type { NextPage } from "next";
import useMeasure from "react-use-measure";

import {
  CanvasGrid,
  FooterBadge,
  GenerateHeadingSuccess,
  TitleAndMetaTags,
} from "src/components";

const GeneratePage: NextPage = () => {
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  return (
    <>
      <TitleAndMetaTags color="black" title="Thank you | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen bg-white")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[30vh]">
          <div className="bg-white px-inset py-w8">
            <div className="sticky flex flex-col gap-w6">
              <GenerateHeadingSuccess>
                <></>
              </GenerateHeadingSuccess>
            </div>
          </div>
        </div>

        {/* CANVAS */}
        <div className="relative pt-w24 pb-[25vh]">
          <div className="overflow-hidden">
            <div className="transform scale-[1.07]">
              <div className="grid grid-cols-4 gap-[3px]">
                <CanvasGrid />
                <CanvasGrid />
                <CanvasGrid />
                <CanvasGrid />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} />
      </div>
    </>
  );
};

export default GeneratePage;
