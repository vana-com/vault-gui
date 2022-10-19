import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "src/components";
import config from "src/config";
import { uploadFile } from "src/utils";

import { useFileDropzone } from "./FileDropzone";
import { StorageProgress } from "./index";

type Props = {
  maxFiles: number;
  minFiles: number;
  userEmail: string;
};

const StorageUpload = ({ maxFiles, minFiles, userEmail }: Props) => {
  const { FileInput, openFileDialog } = useFileDropzone();
  const [isDataUploading, setIsDataUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(5); // Start at 5%
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([]);

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
  const handleUploadProgress = (event: any) => {
    const { loaded, total } = event;

    const progress =
      total || loaded
        ? Math.floor((loaded / (total || 1)) * 100) // Prevent divide by 0
        : 15; // Default to 15% if somehow values don't exist

    // Default starting pos is 5% so don't jump back down to <5%
    setUploadProgress(Math.max(progress, 5));
  };

  /**
   * Handles all image uploading to Google Cloud Storage
   */
  const uploadFiles = async () => {
    console.log("uploading files");
    setIsDataUploading(true);
    try {
      // Upload files to object store (S3 or GCS)
      const timestamp = new Date().getTime();
      const uploadPromises = filesToUpload.map((file) =>
        uploadFile(file, timestamp, userEmail, handleUploadProgress),
      );

      const uploadResults = await Promise.all(uploadPromises);
      const successfulUpload = uploadResults.every(
        (result) => result?.uploadSuccessful,
      );

      if (successfulUpload) {
        console.log("All files uploaded successfully");
      }

      // setTimeout(() => router.push("/"), 500);
    } catch (error: any) {
      console.error("Unable to encrypt and upload user data", error);
    } finally {
      setIsDataUploading(false);
    }
  };

  // track the upload progress
  useEffect(() => {
    // empty on purpose, just tracking uploadProgress
  }, [uploadProgress]);

  return (
    <>
      <div
        style={{
          background: "lightgray",
          minHeight: 300,
          borderRadius: 5,
          margin: "0 auto",
          width: "100%",
        }}
        onDrop={onDropFile}
        onDragOver={(event) => {
          // Prevent default behavior (prevent file from being opened)
          event.preventDefault();
        }}
      >
        {/* FILE INPUT */}
        <FileInput onChange={onSelectFiles} />

        {/* STEP 1: DROP */}
        {!isDataUploading && filesToUpload.length === 0 && (
          <Button
            variant="contrast"
            size="xl"
            disabled={isDataUploading}
            onClick={openFileDialog}
          >
            <Icon icon="carbon:upload" height="1.75em" />
            <div>Drop images here. Upload 8-10 images of yourself.</div>
          </Button>
        )}

        {/* STEP 2: CONFIRM */}
        {!isDataUploading && !!filesToUpload.length && (
          <div
            style={{
              display: "grid",
              maxWidth: "800px",
              margin: "0 auto",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            }}
          >
            {filesToUpload.map((fileToUpload, i) => (
              <div key={fileToUpload.name} style={{ display: "relative" }}>
                {/* Image preview */}
                <Image
                  objectFit="cover"
                  width="150px"
                  height="150px"
                  src={URL.createObjectURL(fileToUpload)}
                />

                {/* Delete image button */}
                <Button
                  aria-label="Remove file to upload"
                  variant="icon"
                  type="reset"
                  onClick={() => {
                    const copyFilesToUpload = [...filesToUpload];
                    copyFilesToUpload.splice(i, 1);
                    setFilesToUpload(copyFilesToUpload);
                  }}
                >
                  <Icon icon="carbon:close-filled" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* STEP 3: UPLOAD */}
        {isDataUploading && <StorageProgress storeProgress={uploadProgress} />}
      </div>

      {/* Upload button */}
      <Button
        onClick={uploadFiles}
        disabled={
          filesToUpload.length < minFiles ||
          filesToUpload.length > maxFiles ||
          isDataUploading
        }
      >
        Upload
      </Button>
    </>
  );
};

export { StorageUpload };
