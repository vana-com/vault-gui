import { Icon } from "@iconify/react";
import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { Button, LayoutWithHeight, TitleAndMetaTags } from "src/components";
import { StorageUpload } from "src/components/Upload";
import { useDeviceDetect } from "src/hooks";

const UploadPage: NextPage = () => {
  // const [ref, bounds] = useMeasure();
  // const screenHeight = bounds.height;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailAddress, setEmailAddress] = useState<string>("");
  const { isMobileUserAgent: isMobile } = useDeviceDetect();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="Discover projects you can earn and learn from with your Vana Vault"
      />

      <LayoutWithHeight>
        <div className="pt-[20vh] mb-[20vh] Container">
          {/* INSTRUCTIONS */}
          <div className="sticky top-0 z-10 flex flex-col py-3 bg-white gap-w6 scroll-mt-w12">
            {/* our inView ref */}
            <div ref={ref} className="absolute -top-[1vh]" />
            <h1
              className={clsx(
                "Text-display",
                inView ? "text-[4.5vh]" : "text-[3.5vh]",
              )}
            >
              Create your gallery
            </h1>
            <div>
              <p>
                Select 8-10 portraits of you.{" "}
                <span className="text-stone-400">
                  Add from your photos or take selfies with your phone.
                </span>
              </p>
            </div>
          </div>

          {/* INPUTS */}
          <div className="sticky top-0 pt-w12 pb-w72">
            {/* Email input */}
            {/* <input
              type="email"
              value={emailAddress}
              placeholder="Enter your email here"
              required
              onChange={(event) => {
                setEmailAddress(event.target.value);
              }}
              className={clsx(
                "w-full px-4 h-[40px] text-sm inline-flex shadow-sm  placeholder-stone-400 border-2 rounded-lg",
                // disabled
                "disabled:bg-stone-50 disabled:text-stone-500 disabled:border-stone-200 disabled:shadow-none",
                // focus
                "focus:outline-none focus:border-blueCrayola-500 focus:ring-1 focus:ring-blueCrayola-500",
                // invalid …invalid:border-rose-500
                "focus:invalid:text-rose-600 focus:invalid:border-rose-500 focus:invalid:ring-rose-500",
              )}
            /> */}

            <StorageUpload minFiles={8} maxFiles={10} userEmail={emailAddress}>
              {(isMobile || true) && (
                <Button
                  className="!text-stone-900 !dark:text-stone-100 sticky top-0 "
                  onClick={() =>
                    window.alert("TODO: Implement opening camera on mobile")
                  }
                >
                  <Icon icon="carbon:camera" />
                  <span>Take selfies</span>
                </Button>
              )}
            </StorageUpload>
          </div>
        </div>
      </LayoutWithHeight>
    </>
  );
};

export default UploadPage;
