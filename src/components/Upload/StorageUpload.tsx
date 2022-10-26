import { Icon } from "@iconify/react";
import Image from "next/future/image";
import { useEffect, useMemo } from "react";

import { Button } from "src/components";
import config from "src/config";

import { useFileDropzone } from "./FileDropzone";
import { StorageProgress } from "./index";

type Props = {
  maxFiles: number;
  minFiles: number;
  children?: React.ReactNode;
  capturedImage: File | null;
  uploadProgress: Array<number>;
  filesToUpload: Array<File>;
  setFilesToUpload: (files: Array<File>) => void;
  numberOfFiles: number;
  isDataUploading: boolean;
};

const StorageUpload = ({
  maxFiles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  minFiles,
  uploadProgress,
  children,
  isDataUploading,
  capturedImage,
  filesToUpload,
  setFilesToUpload,
  numberOfFiles,
}: Props) => {
  const { FileInput, openFileDialog } = useFileDropzone();

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
    } else if (filesToUpload.length + files.length <= maxFiles) {
      setFilesToUpload([...filesToUpload, ...files]);
    } else {
      console.error(
        `Invalid number of files. Please only upload ${minFiles} - ${maxFiles} files.`,
      );
    }
  };

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
          <div
            key={fileToUpload.name}
            className="relative aspect-square bg-stone-50"
          >
            {/* Image preview */}
            <Image
              className="object-cover aspect-square"
              width="200"
              height="200"
              src={URL.createObjectURL(fileToUpload)}
            />

            {/* upload progress for each file */}
            {isDataUploading ? (
              <StorageProgress storeProgress={uploadProgress[i]} />
            ) : (
              <div className="absolute bottom-0 w-full">
                <Button
                  className="!w-full text-white bg-black/60 !text-sm !h-[32px] !border-black !gap-0.5"
                  aria-label="Remove file to upload"
                  variant="icon"
                  type="reset"
                  onClick={() => {
                    const copyFilesToUpload = [...filesToUpload];
                    copyFilesToUpload.splice(i, 1);
                    setFilesToUpload(copyFilesToUpload);
                  }}
                >
                  <span className="transform -translate-y-[0.05em]">
                    Remove
                  </span>
                  <Icon icon="carbon:close" height="1.2em" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    [filesToUpload, ...uploadProgress],
  );

  const uploadButtonLabel = (files: number): string => {
    if (files > 0 && files < 9) {
      return `Add ${minFiles - numberOfFiles} more`;
    }
    return `Add ${minFiles} images`;
  };

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
        {numberOfFiles < minFiles ? (
          <Button
            className="!w-full text-white bg-black border-black"
            disabled={filesToUpload.length >= maxFiles}
            onClick={openFileDialog}
          >
            <Icon icon="carbon:add" height="1.25em" />
            <span className="transform -translate-y-[0.05em]">
              {uploadButtonLabel(numberOfFiles)}
            </span>
          </Button>
        ) : (
          <Button
            className="!w-full text-white bg-blueCrayola-500 border-blueCrayola-500 disabled:opacity-100"
            disabled
            onClick={openFileDialog}
          >
            <Icon icon="carbon:checkmark-filled" height="1em" />
            <span className="transform -translate-y-[0.05em]">Thanks!</span>
          </Button>
        )}

        {/* SELFIE CHILD */}
        {children}
      </div>
    </>
  );
};

export { StorageUpload };
