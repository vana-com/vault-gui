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
  SelfieButton,
  TitleAndMetaTags,
} from "src/components";
import { StorageUpload } from "src/components/Upload";
import { useDeviceDetect } from "src/hooks";
import { uploadFile, validateEmail } from "src/utils";

const UploadPage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  const [capturedImage, setCapturedImage] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [isDataUploading, setIsDataUploading] = useState(false);

  const [uploadProgress, setUploadProgress] = useState<Array<number>>([]);
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([]);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

  // track the upload progress
  useEffect(() => {
    // empty on purpose, just tracking uploadProgress
  }, [uploadProgress]);

  const { isMobileUserAgent: isMobile } = useDeviceDetect();
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  // Callback to handle upload progress
  const handleUploadProgress = (event: any, fileIndex: number) => {
    const { loaded, total } = event;

    const progress =
      total || loaded
        ? Math.floor((loaded / (total || 1)) * 100) // Prevent divide by 0
        : 15; // Default to 15% if somehow values don't exist

    // Default starting pos is 5% so don't jump back down to <5%
    uploadProgress[fileIndex] = Math.max(progress, 5);
    setUploadProgress(uploadProgress);
  };

  /**
   * Handles all image uploading to Google Cloud Storage
   */
  const uploadFiles = async () => {
    setIsDataUploading(true);
    setUploadProgress(Array(filesToUpload.length).fill(5));
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
        <div className="pt-[20vh] mb-[20vh] Container">
          {/* INSTRUCTIONS */}
          <PageHeading
            hideSticky={!!videoStream}
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading="Create your gallery"
          >
            <p>
              Create your digital self portrait.{" "}
              <span className="text-stone-400">
                Upload 8 images showing your face or take some pictures of your
                face from different angles.{" "}
              </span>
            </p>
          </PageHeading>

          {/* INPUTS */}
          <div className="sticky top-0 pt-w12 pb-w72">
            {/* Email input */}

            <StorageUpload
              minFiles={8}
              maxFiles={10}
              capturedImage={capturedImage}
              uploadProgress={uploadProgress}
              filesToUpload={filesToUpload}
              setFilesToUpload={setFilesToUpload}
              isDataUploading={isDataUploading}
            >
              {isMobile && (
                <SelfieButton
                  onImageCaptured={(imgFile) => setCapturedImage(imgFile)}
                  videoStream={videoStream}
                  setVideoStream={setVideoStream}
                />
              )}
            </StorageUpload>
          </div>
        </div>

        {/* EMAIL */}
        {filesToUpload.length >= 8 && (
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
                    className={clsx("!text-black !border-transparent")}
                  />
                  <Button
                    onClick={uploadFiles}
                    disabled={isDataUploading || !validateEmail(emailAddress)}
                    className={clsx("!text-black !border-transparent")}
                  >
                    <span>Submit</span>
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
