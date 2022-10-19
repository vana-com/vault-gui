import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import useMeasure from "react-use-measure";

// import { useInView } from "react-intersection-observer";
import { FooterBadge, TitleAndMetaTags } from "src/components";
import { StorageUpload } from "src/components/Upload";

const UploadPage: NextPage = () => {
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const [emailAddress, setEmailAddress] = useState<string>("");

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
        <div className="py-[30vh]">
          <div className="bg-white px-inset py-w8">
            <div className="sticky flex flex-col gap-w6">
              {/* Instructions */}
              <h1 className="font-display text-[4.5vh] font-light leading-[0.925] tracking-[-0.01em]">
                Create your gallery
              </h1>
              <p>
                To create your gallery, we need your email and 8-10 portraits of
                you.
              </p>

              {/* Email input */}
              <input
                type="email"
                value={emailAddress}
                placeholder="Enter your email here"
                required
                onChange={(event) => {
                  setEmailAddress(event.target.value);
                }}
                className={clsx(
                  "w-full px-4 h-[40px] text-sm inline-flex  shadow-sm  placeholder-stone-400",
                  // disabled
                  "disabled:bg-stone-50 disabled:text-stone-500 disabled:border-stone-200 disabled:shadow-none",
                  // focus
                  "focus:outline-none focus:border-blueCrayola-500 focus:ring-1 focus:ring-blueCrayola-500",
                  // invalid …invalid:border-rose-500
                  "focus:invalid:text-rose-600 focus:invalid:border-rose-500 focus:invalid:ring-rose-500",
                )}
              />

              <StorageUpload
                minFiles={8}
                maxFiles={10}
                userEmail={emailAddress}
              />
            </div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} />
      </div>
    </>
  );
};

export default UploadPage;
