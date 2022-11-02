import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  Button,
  Footer,
  // SelfieButton,
  GalleryMenu,
  Input,
  PageHeading,
  PrivacyText,
  TitleAndMetaTags,
} from "src/components";
import { StorageUpload } from "src/components/Upload";
import config from "src/config";
import { obamaImages, rbgImages, teslaImages } from "src/data/famousImages";
import { uploadFile, validateEmail } from "src/utils";

const MIN_FILES = 8;
const MAX_FILES = 10;
const REAL_MAX_FILES = 24;

// pre-render this page at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}

const UploadPage: NextPage = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [capturedImage, setCapturedImage] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [isDataUploading, setIsDataUploading] = useState(false);

  const [uploadProgress, setUploadProgress] = useState<Array<number>>(
    Array(MAX_FILES).fill(0),
  );
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

  // track the upload progress
  useEffect(() => {
    // empty on purpose, just tracking uploadProgress
  }, [uploadProgress]);

  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  // Callback to handle upload progress
  const handleUploadProgress = (event: any, fileIndex: number) => {
    const { loaded, total } = event;
    console.log(fileIndex, loaded, total);

    const progress =
      total || loaded
        ? Math.floor((loaded / (total || 1)) * 100) // Prevent divide by 0
        : 15; // Default to 15% if somehow values don't exist

    // Default starting pos is 5% so don't jump back down to <5%
    uploadProgress[fileIndex] = Math.max(progress, 5);
    console.log(uploadProgress);
    setUploadProgress(uploadProgress);
  };

  /**
   * Handles all image uploading to Google Cloud Storage
   */
  const uploadFiles = async () => {
    setIsDataUploading(true);
    setUploadProgress(Array(MAX_FILES).fill(0));
    try {
      // Upload files to object store (S3 or GCS)
      const timestamp = new Date().getTime();

      // Prevent people from uploading an ungodly amount of photos
      const truncatedFiles =
        filesToUpload.length <= REAL_MAX_FILES
          ? filesToUpload
          : filesToUpload.slice(0, REAL_MAX_FILES);

      const uploadPromises = truncatedFiles.map((file, index) =>
        uploadFile(file, index, timestamp, emailAddress, handleUploadProgress),
      );

      const uploadResults = await Promise.all(uploadPromises);
      const successfulUpload = uploadResults.every(
        (result) => result?.uploadSuccessful,
      );

      if (successfulUpload) {
        await fetch(`/api/user-data/create?email=${emailAddress}`);
        console.log("All files uploaded successfully");
        setTimeout(() => router.push("/generating"), 500);
      } else {
        console.error("Unable to upload one or more files");
      }
    } catch (error: any) {
      console.error("Unable to upload user data", error);
    } finally {
      setIsDataUploading(false);
    }
  };

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="&ldquo;Portrait&rdquo; by Vana is a generative art studio that
        can create self-portraits of you in infinite styles."
      />

      <div className="pt-[12.5vh] Container flex flex-col gap-w12">
        {/* INSTRUCTIONS */}
        <motion.div
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.25 }}
        >
          <PageHeading
            hideSticky={!!videoStream}
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading={
              <>
                Create your{" "}
                <span className="mobile:table">portrait gallery</span>
              </>
            }
          />
        </motion.div>

        {/* INPUTS */}
        <motion.div
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-stone-500 link-block">
              <span className="!font-bold text-black Text-meta">Step 1. </span>
              Upload at least {MIN_FILES} images of your face or take a series
              of selfies. We use these images to develop a{" "}
              <a
                href="https://www.techopedia.com/definition/34633/generative-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                generative art model
              </a>{" "}
              for you.
            </p>
            <StorageUpload
              minFiles={MIN_FILES}
              maxFiles={MAX_FILES}
              capturedImage={capturedImage}
              uploadProgress={uploadProgress}
              filesToUpload={filesToUpload}
              setFilesToUpload={setFilesToUpload}
              numberOfFiles={filesToUpload ? filesToUpload.length : 0}
              isDataUploading={isDataUploading}
            />
            {filesToUpload.length >= MIN_FILES && (
              <p className="-mt-0.5 text-xs text-stone-400">
                For best results, make sure your face is fully visible and avoid
                images with filters.
              </p>
            )}
          </div>
        </motion.div>

        {/* STEP 2: ADD EMAIL */}
        <motion.div
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col gap-4 pt-w6">
            <p className="text-stone-500 link-block">
              <span className="!font-bold text-black Text-meta">Step 2. </span>
              Drop your email to receive your finished works when ready. By
              pressing “Submit” below, you agree to the{" "}
              <a
                href={config.vanaTermsURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>{" "}
              and the{" "}
              <a
                href={config.vanaPrivacyURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
            {/* TODO @Callum: add new state to clarify when isDataUploading? */}
            <form className="flex flex-col justify-between w-full gap-3">
              <Input
                type="email"
                value={emailAddress}
                placeholder="Enter your email"
                required
                onChange={(event) => {
                  setEmailAddress(event.target.value);
                }}
                className={clsx("!px-2.5 !text-black")}
              />
              <Button
                type="button"
                onClick={uploadFiles}
                disabled={
                  isDataUploading ||
                  !validateEmail(emailAddress) ||
                  filesToUpload.length < MIN_FILES ||
                  filesToUpload.length > MAX_FILES
                }
                className={clsx("font-medium disabled:!opacity-100")}
              >
                <span>Submit &amp; Agree</span>
                <Icon icon="carbon:arrow-right" />
              </Button>
              <p className="-mt-0.5 text-xs text-stone-400">
                Please add your email to continue.
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* WHAT DO I GET? */}
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        <div className="flex flex-col gap-4 pt-w24">
          <div className="flex flex-col gap-4 Container">
            <hr className="border-t-2 text-stone-100" />
            <p className="text-stone-500">
              <span className="!font-bold text-black Text-meta">
                What do I get?{" "}
              </span>
              Check out a few galleries of some familiar faces.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <GalleryMenu images={obamaImages} label="Barack Obama" />
            <GalleryMenu images={rbgImages} label="Ruth Bader Ginsburg" />
            <GalleryMenu images={teslaImages} label="Nikola Tesla" />
          </div>
        </div>
      </motion.div>

      {/* PRIVACY */}
      <div className="flex flex-col gap-4 Container pt-w24">
        <hr className="border-t-8 text-stone-100" />
        <PrivacyText />
      </div>

      {/* FOOTER */}
      <Footer wrapperClassName="pt-w36 pb-w48" />
    </>
  );
};

export default UploadPage;
