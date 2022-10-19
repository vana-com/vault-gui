import clsx from "clsx";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

// import { useInView } from "react-intersection-observer";
import {
  CanvasGrid,
  FooterBadge,
  GenerateEmailForm,
  GenerateHeadingSharing,
  GenerateHeadingStart,
  GenerateHeadingSuccess,
  TitleAndMetaTags,
} from "src/components";
import { GenerateProgressEnum } from "src/types";

const GeneratePage: NextPage = () => {
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  // Intersection observer to toggle the filters location
  // const { ref, inView } = useInView();
  const [state, setState] = useState<GenerateProgressEnum>(
    GenerateProgressEnum.START,
  );
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [formSent, setFormSent] = useState(false);

  // Fake SUCCESS
  useEffect(() => {
    if (state === GenerateProgressEnum.SHARING_IN_PROGRESS) {
      setTimeout(() => setState(GenerateProgressEnum.SUCCESS), 3000);
    }
  }, [state]);

  // Faek email submission
  const handleEmailSubmission = async () => {
    setFormSent(true);
    console.log("Email submitted", emailAddress);
  };

  // TESTS
  // console.log(bounds);

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Ingenium | Vana"
        description="Discover projects you can earn and learn from with your Vana Vault"
      />

      <div
        ref={ref}
        className={clsx("relative min-h-screen bg-white")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[30vh]">
          <div className="bg-white px-inset py-w8">
            <div className="sticky flex flex-col gap-w6">
              {state === GenerateProgressEnum.START && (
                <>
                  <GenerateHeadingStart
                    onClick={() =>
                      setState(GenerateProgressEnum.SHARING_IN_PROGRESS)
                    }
                  />
                </>
              )}
              {state === GenerateProgressEnum.SHARING_IN_PROGRESS && (
                <GenerateHeadingSharing />
              )}
              {state === GenerateProgressEnum.SUCCESS && (
                <GenerateHeadingSuccess>
                  <GenerateEmailForm
                    inputValue={emailAddress}
                    setInputValue={setEmailAddress}
                    handleSubmit={handleEmailSubmission}
                    formSent={formSent}
                  />
                </GenerateHeadingSuccess>
              )}
            </div>
          </div>
        </div>

        {/* CANVAS */}
        {state === GenerateProgressEnum.SUCCESS && (
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
        )}

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} />
      </div>
    </>
  );
};

export default GeneratePage;
