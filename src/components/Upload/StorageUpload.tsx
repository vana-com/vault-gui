import { Icon } from "@iconify/react";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import { Button } from "src/components";
import config from "src/config";
import { uploadFile } from "src/utils";

import { useFileDropzone } from "./FileDropzone";
import { StorageProgress } from "./index";

type Props = {
  maxFiles: number;
  minFiles: number;
  userEmail: string;
  children: React.ReactNode;
  capturedImage: File | null;
};

const StorageUpload = ({
  maxFiles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  minFiles,
  userEmail,
  children,
  capturedImage,
}: Props) => {
  const router = useRouter();
  const { FileInput, openFileDialog } = useFileDropzone();
  const [isDataUploading, setIsDataUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Array<number>>([]);
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([]);

  const isValidEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  /**
   * Callback when a file is selected in the file picker
   */
  const onSelectFiles = (files: FileList) => {
    onFileReceived([...files]);
  };

  /**
   * Callback when a user drags a file into the file picker
   */
  const onDropFile = (event: {
    preventDefault: () => void;
    dataTransfer: any;
  }) => {
    event.preventDefault();
    const newFiles = [];
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === "file") {
          const file = event.dataTransfer.items[i].getAsFile();
          newFiles.push(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        newFiles.push(event.dataTransfer.files[i]);
      }
    }
    onFileReceived(newFiles);
  };

  /**
   * Validate and update file list state
   */
  const onFileReceived = (files: File[]) => {
    const validFileCheck = files.every((file: File) =>
      config.allowedUploadMimeTypes.includes(file.type),
    );

    if (!validFileCheck) {
      console.error("Invalid files. Please upload JPG or PNG files only.");
    } else {
      setFilesToUpload([...filesToUpload, ...files]);
    }
  };

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
        uploadFile(file, index, timestamp, userEmail, handleUploadProgress),
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

  // track the upload progress
  useEffect(() => {
    // empty on purpose, just tracking uploadProgress
  }, [uploadProgress]);

  // Add new selfie images to file list
  useEffect(() => {
    if (capturedImage) {
      onFileReceived([capturedImage]);
    }
  }, [capturedImage]);

  // useMemo prevents image flickering on state change
  const imagesPreview = useMemo(
    () => (
      <div className="grid grid-cols-2 gap-[5px]">
        {filesToUpload?.map((fileToUpload, i) => (
          <div key={fileToUpload.name} className="relative aspect-square">
            {/* Image preview */}
            <Image
              className="object-cover aspect-square"
              width="200"
              height="200"
              src={URL.createObjectURL(fileToUpload)}
            />

            {/* upload progress for each file */}
            {isDataUploading && (
              <StorageProgress storeProgress={uploadProgress[i]} />
            )}

            {/* Delete image button */}
            <div className="absolute bottom-0 w-full">
              <Button
                className="!w-full text-white bg-black !text-sm !h-[32px] !border-black"
                aria-label="Remove file to upload"
                variant="icon"
                type="reset"
                onClick={() => {
                  const copyFilesToUpload = [...filesToUpload];
                  copyFilesToUpload.splice(i, 1);
                  setFilesToUpload(copyFilesToUpload);
                }}
              >
                <span className="transform -translate-y-[0.05em]">Remove</span>
                <Icon icon="carbon:close-filled" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    ),
    [filesToUpload, uploadProgress],
  );

  return (
    <>
      <div
        className="flex flex-col w-full gap-2"
        onDrop={onDropFile}
        onDragOver={(event) => {
          // Prevent default behavior (prevent file from being opened)
          event.preventDefault();
        }}
      >
        {/* FILE INPUT */}
        <FileInput onChange={onSelectFiles} />

        {/* STEP 2: CONFIRM */}
        {!!filesToUpload.length && imagesPreview}

        {/* STEP 1: DROP */}
        <Button
          className="!w-full text-white bg-black"
          disabled={filesToUpload.length >= maxFiles}
          onClick={openFileDialog}
        >
          <Icon icon="carbon:add" height="1.25em" />
          <span className="transform -translate-y-[0.05em]">Add images</span>
        </Button>

        {/* SELFIE CHILD */}
        {children}
      </div>

      {/* Upload button */}
      {/* filesToUpload.length < minFiles ||
              filesToUpload.length > maxFiles || */}
      {filesToUpload.length > 0 && (
        <div className="pt-w12">
          <Button
            className="!w-full text-white bg-black"
            onClick={uploadFiles}
            disabled={isDataUploading || !isValidEmail(userEmail)}
          >
            <Icon icon="carbon:upload" height="1em" />
            <span>Upload</span>
          </Button>
        </div>
      )}
    </>
  );
};

export { StorageUpload };
