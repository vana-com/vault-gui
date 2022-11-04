import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  Button,
  Footer,
  GalleryMenu,
  Input,
  PageHeading,
  PrivacyText,
  Spinner,
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

      await fetch(
        `/api/user-data/create?email=${emailAddress}&timestamp=${timestamp}`,
      );
      if (successfulUpload) {
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

  // Number of files utils
  const numberOfFiles = filesToUpload ? filesToUpload.length : 0;
  const numberOfFilesUnder = numberOfFiles < MIN_FILES;
  const numberOfFilesValid =
    numberOfFiles >= MIN_FILES && numberOfFiles <= MAX_FILES;
  // const numberOfFilesOver = numberOfFiles > MAX_FILES;

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="&ldquo;Portrait&rdquo; by Vana is a generative art studio that
        can create self-portraits of you in infinite styles."
      />

      {/* Create page uses a slighty different layout structure to the rest of the pages: flex-col with gap-w12 for consistent section spacing */}
      <div className="pt-[12.5vh]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="Container pb-w12"
        >
          <PageHeading>
            <>
              Create your <span className="mobile:table">portrait gallery</span>
            </>
          </PageHeading>
        </motion.div>

        {/* INPUTS */}
        <div className="flex flex-col gap-w12">
          <motion.div
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="Container"
          >
            <div className="flex flex-col gap-4">
              <p className="text-stone-500 link-block">
                <span className="!font-bold text-black Text-meta">
                  Step 1.{" "}
                </span>
                Upload at least {MIN_FILES} images of your face or take a series
                of selfies. Try to capture a variety of angles (including
                looking at and looking away from the camera), lighting
                conditions, and facial expressions. We use these images to
                develop a{" "}
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
                numberOfFiles={numberOfFiles}
                isDataUploading={isDataUploading}
              />
              {numberOfFilesUnder && (
                <p className="-mt-0.5 text-xs text-stone-400">
                  For best results, make sure your face is fully visible and
                  avoid images with filters.
                </p>
              )}
            </div>
          </motion.div>

          {/* STEP 2: ADD EMAIL */}
          <motion.div
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="Container"
          >
            <div className="flex flex-col gap-4">
              <p className="text-stone-500 link-block">
                <span className="!font-bold text-black Text-meta">
                  Step 2.{" "}
                </span>
                It&apos;ll take about 2 hours. Drop your email to receive your
                finished works when ready. By pressing “Submit” below, you agree
                to the{" "}
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

              {/* FORM */}
              {/* TODO @Callum: add new state to clarify when isDataUploading? */}
              <form
                className="flex flex-col justify-between w-full gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    !isDataUploading &&
                    validateEmail(emailAddress) &&
                    numberOfFilesValid
                  ) {
                    uploadFiles();
                  }
                }}
              >
                <Input
                  type="email"
                  value={emailAddress}
                  placeholder="Enter your email"
                  required
                  onChange={(event) => {
                    setEmailAddress(event.target.value);
                  }}
                  className="!px-2.5 !text-black"
                />
                <Button
                  type="submit"
                  disabled={
                    isDataUploading ||
                    !numberOfFilesValid ||
                    !validateEmail(emailAddress)
                  }
                  className="font-medium"
                >
                  {/* show plus if number files incorrect */}
                  {filesToUpload.length !== 0 &&
                    !numberOfFilesValid &&
                    !isDataUploading && (
                      <Icon icon="carbon:add" height="1.25em" />
                    )}
                  {/* button label */}
                  <span>
                    {filesToUpload.length !== 0 && !numberOfFilesValid
                      ? `Add ${MIN_FILES - numberOfFiles} more`
                      : isDataUploading
                      ? "Submitting"
                      : "Submit & Agree"}
                  </span>
                  {/* show arrow on load and when valid */}
                  {(filesToUpload.length === 0 || numberOfFilesValid) &&
                    !isDataUploading && <Icon icon="carbon:arrow-right" />}
                  {/* On submit, show spinner */}
                  {isDataUploading && (
                    <Spinner wrapperClass="ml-1" sizeClass="w-3.5 h-3.5" />
                  )}
                </Button>
                {/* {numberOfFilesValid && !validateEmail(emailAddress) && (
                <p className="-mt-0.5 text-xs text-stone-400">
                  Please add your email to continue.
                </p>
              )} */}
              </form>
            </div>
          </motion.div>
        </div>
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
            <p className="text-stone-500 xl:pb-w4">
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
