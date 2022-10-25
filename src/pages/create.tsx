import { Icon } from "@iconify/react";
import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  Button,
  Input,
  PageHeading,
  SelfieButton,
  TitleAndMetaTags,
} from "src/components";
import { StorageUpload } from "src/components/Upload";
import { useDeviceDetect } from "src/hooks";

const UploadPage: NextPage = () => {
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  const [capturedImage, setCapturedImage] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailAddress, setEmailAddress] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [portraitsReady, setPortraitsReady] = useState<boolean>(false);
  const { isMobileUserAgent: isMobile } = useDeviceDetect();
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

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
        <div className="pt-[20vh] mb-[20vh] Container">
          {/* INSTRUCTIONS */}
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading="Create your gallery"
          >
            <p>
              Select 8-10 portraits of you.{" "}
              <span className="text-stone-400">
                Add from your photos or take selfies with your phone.
              </span>
            </p>
          </PageHeading>

          {/* INPUTS */}
          <div className="sticky top-0 pt-w12 pb-w72">
            {/* Email input */}

            <StorageUpload
              minFiles={8}
              maxFiles={10}
              userEmail={emailAddress}
              capturedImage={capturedImage}
            >
              {isMobile && (
                <SelfieButton
                  onImageCaptured={(imgFile) => setCapturedImage(imgFile)}
                />
              )}
            </StorageUpload>
          </div>
        </div>

        {/* EMAIL */}
        {portraitsReady && (
          <>
            <div
              className="fixed w-full h-[48px] bg-gradient-to-t from-blackShadow-50"
              style={{ top: `${screenHeight - 148}px` }}
            />
            <div
              className="fixed bottom-0 w-full bg-white"
              style={{ top: `${screenHeight - 100}px` }}
            >
              <div className="Container pt-insetHalf">
                <form
                  action=""
                  className="flex justify-between w-full text-black border border-black/10"
                >
                  <Input
                    type="email"
                    value={emailAddress}
                    placeholder="Enter your email here"
                    required
                    onChange={(event) => {
                      setEmailAddress(event.target.value);
                    }}
                    className={clsx("text-black border-transparent")}
                  />
                  <Button
                    disabled={!emailAddress}
                    className={clsx("!text-black !border-transparent")}
                  >
                    <span>Next</span>
                    <Icon icon="carbon:arrow-right" />
                  </Button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UploadPage;
