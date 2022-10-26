import { Icon } from "@iconify/react";
import clsx from "clsx";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  Button,
  Input,
  PageHeading,
  // SelfieButton,
  TitleAndMetaTags,
} from "src/components";
import { StorageUpload } from "src/components/Upload";
import config from "src/config";
import { uploadFile, validateEmail } from "src/utils";

const MIN_FILES = 8;
const MAX_FILES = 10;

const UploadPage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure({
    scroll: true,
  });
  const screenHeight = bounds.height;

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
      const uploadPromises = filesToUpload.map((file, index) =>
        uploadFile(file, index, timestamp, emailAddress, handleUploadProgress),
      );

      const uploadResults = await Promise.all(uploadPromises);
      const successfulUpload = uploadResults.every(
        (result) => result?.uploadSuccessful,
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

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Portrait | Vana"
        description="Create your portrait gallery on Vana"
      />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[12.5vh] Container flex flex-col gap-w12 pb-w72">
          {/* INSTRUCTIONS */}
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

          {/* INPUTS */}
          <div className="flex flex-col gap-4">
            <p className="text-stone-500">
              <span className="!font-bold text-black Text-meta">Step 1. </span>
              Upload at least {MIN_FILES} images of your face or take a series
              of selfies.
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
          </div>

          {/* STEP 2: ADD EMAIL */}
          <div className="flex flex-col gap-4 pt-w6">
            <p className="text-stone-500">
              <span className="!font-bold text-black Text-meta">Step 2. </span>
              It takes 60 minutes. Drop your email if you don&apos;t want to
              wait.
            </p>
            <form className="flex justify-between w-full text-black border border-black/10">
              <Input
                type="email"
                value={emailAddress}
                placeholder="Enter your email"
                required
                onChange={(event) => {
                  setEmailAddress(event.target.value);
                }}
                className={clsx(
                  "flex-1 !px-2.5 !text-black !border-transparent",
                )}
              />
              <Button
                type="submit"
                onClick={uploadFiles}
                disabled={
                  isDataUploading ||
                  !validateEmail(emailAddress) ||
                  filesToUpload.length < MIN_FILES ||
                  filesToUpload.length > MAX_FILES
                }
                className={clsx(
                  "!px-2.5 !gap-1 !text-black !border-transparent !disabled:opacity-100",
                )}
              >
                <span>Submit</span>
                <Icon icon="carbon:arrow-right" />
              </Button>
            </form>
          </div>

          {/* PRIVACY */}
          <div className="flex flex-col gap-4 pt-w6">
            <p className="text-sm text-stone-400 link-block">
              At Vana we believe in the user-owned internet. We create
              experience that allow you to experience and own your data and the
              things that are built with it. We will never share your data or ML
              models with anyone without your express consent. For more info,
              feel free to reach out at{" "}
              <a
                href={`mailto:${config.vanaSupportEmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {config.vanaSupportEmail}
              </a>{" "}
              or review our{" "}
              <a
                href={config.vanaPrivacyURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
