import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import useMeasure from "react-use-measure";

// import { useInView } from "react-intersection-observer";
import { TitleAndMetaTags } from "src/components";
import { StorageUpload } from "src/components/Upload";
import { useDeviceDetect } from "src/hooks";

const UploadPage: NextPage = () => {
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const [emailAddress, setEmailAddress] = useState<string>("");
  const { isMobileUserAgent: isMobile } = useDeviceDetect();

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="Discover projects you can earn and learn from with your Vana Vault"
      />

      <div
        ref={ref}
        className={clsx("flex min-h-screen bg-white place-content-center")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[20vh] mb-20 max-w-xl">
          <div className="bg-white px-inset py-w8">
            <div className="sticky flex flex-col gap-w6">
              {/* Instructions */}
              <h1 className="font-display text-[4.5vh] font-light leading-[0.925] tracking-[-0.01em]">
                Create your gallery
              </h1>
              <p>
                To create your gallery, we need your 8-10 portraits of you. Take
                selfies from different angles if you need more portraits
              </p>
              {(isMobile || true) && (
                <button
                  type="button"
                  className="border-2 p-2 self-center"
                  onClick={() =>
                    window.alert("TODO: Implement opening camera on mobile")
                  }
                >
                  Take Selfies
                </button>
              )}

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
                  "w-full px-4 h-[40px] text-sm inline-flex  shadow-sm  placeholder-stone-400 border-2 rounded-lg",
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
      </div>
    </>
  );
};

export default UploadPage;
