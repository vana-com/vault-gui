import { stripZipFiles } from "@corsali/userdata-extractor";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Stack,
  StorageInstructionsModal,
  ToastDefault,
} from "src/components";
import config from "src/config";
import { encryptAndUploadUserDataFiles, heapTrack } from "src/utils";
import { IWalletProvider } from "src/utils/identity/walletProvider";

import { useFileDropzone } from "./FileDropzone";
import { StorageUploadPresenter } from "./index";

interface Props {
  moduleName: string;
  createUserModule: (urlToData: string, urlNumber: number) => Promise<void>;
  appPubKey: string;
  web3AuthWalletProvider: IWalletProvider | undefined;
}

const StorageUpload = ({
  moduleName,
  createUserModule,
  appPubKey,
  web3AuthWalletProvider,
}: Props) => {
  const router = useRouter();
  const { FileInput, openFileDialog } = useFileDropzone();
  const [isDataUploading, setIsDataUploading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [uploadProgress, setUploadProgress] = useState(5); // Start at 5%
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([]);
  const [showInvalidFileToast, setShowInvalidFileToast] = useState(false);
  const [showStoreSuccessToast, setShowStoreSuccessToast] = useState(false);
  const [showStoreErrorToast, setShowStoreErrorToast] = useState(false);

  /* FILE CALLBACKS */

  // Callback when a file is selected in the file picker
  const handleSelectFile = (file: File) => {
    if (!config.zipFileMimeTypes.includes(file.type)) {
      // Trigger invalid file toast
      setShowInvalidFileToast(true);
      return;
    }
    const newFiles = [...filesToUpload, file];
    setFilesToUpload(newFiles);
  };

  // When a user drops a file into the drop area on the final step
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

    // check that the new files are the correct format
    const validFileCheck = newFiles.every((file: File) => {
      if (!config.zipFileMimeTypes.includes(file.type)) {
        return false;
      }
      return true;
    });

    if (!validFileCheck) {
      // Trigger invalid file toast
      setShowInvalidFileToast(true);
    } else {
      setFilesToUpload([...filesToUpload, ...newFiles]);
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
   * `encryptAndUploadFiles` handles all zip file processing after submission:
   * - Strips Media files from the zip file to reduce size
   * - Encrypts the data use ChaCha20-Poly1305
   * - Uploads the encrypted zip files to Google Cloud Storage
   */
  const encryptAndUploadFiles = async () => {
    setIsDataUploading(true);
    try {
      const sanitizedFiles = await stripZipFiles(filesToUpload);

      const dangerousPrivateKey =
        await web3AuthWalletProvider?.dangerouslyGetPrivateKey();

      if (!dangerousPrivateKey) {
        setShowStoreErrorToast(true);
        return;
      }

      await encryptAndUploadUserDataFiles(
        sanitizedFiles,
        dangerousPrivateKey,
        moduleName,
        appPubKey,
        handleUploadProgress,
        createUserModule,
      );

      setIsDataUploading(true);
      setShowStoreSuccessToast(true);
      heapTrack("Uploaded Data", {
        module: moduleName,
        numFilesUploaded: filesToUpload.length,
      });
      setTimeout(() => router.push("/?completed-store=true"), 500);
    } catch (error: any) {
      console.log(error.toString());
      setIsDataUploading(false);
      setShowStoreSuccessToast(false);
      setShowStoreErrorToast(true);
    }
  };

  // track the upload progress
  useEffect(() => {
    // empty on purpose, just tracking uploadProgress
  }, [uploadProgress]);

  // describe file requirements
  const describeFilesRequired = () => {
    if (moduleName === "Google") {
      // TODO: This is incorrect, google can have 1 or more files
      return `There should be two files from your ${moduleName} export`;
    }
    return `There should only be one file from your ${moduleName} export`;
  };

  return (
    <>
      <Stack tw="rounded-sm">
        {/* gap-1 lg:gap-4 */}
        <Stack tw="w-full relative flex items-center justify-center w-full text-black rounded-2xl p-insetHalf bg-neutral gap-2 lg:gap-4">
          {/* UPLOADER */}
          <StorageUploadPresenter
            onDropFile={onDropFile}
            isDataUploading={isDataUploading}
            FileInput={FileInput}
            handleSelectFile={handleSelectFile}
            filesToUpload={filesToUpload}
            setFilesToUpload={setFilesToUpload}
            openFileDialog={openFileDialog}
            uploadProgress={uploadProgress}
            filesToUploadDescription={describeFilesRequired()}
            instructionsNode={
              <StorageInstructionsModal moduleName={moduleName} />
            }
          />
          {/* BUTTON */}
          <Button
            onClick={encryptAndUploadFiles}
            variant="solid"
            size="xl"
            tw="md:w-full font-semibold"
            suffix={<Icon icon="carbon:arrow-right" height="1.2em" />}
            isLoading={isDataUploading}
            isDisabled={!filesToUpload.length}
            // TODO: check what analytics depend on this before updating
            id="connect-upload-button"
          >
            Encrypt and store
          </Button>
        </Stack>
      </Stack>

      {/* INTERACTION STATUS TOASTS */}
      <ToastDefault
        open={showStoreSuccessToast}
        onOpenChange={setShowStoreSuccessToast}
        variant="success"
        title="Success!"
        content={`Your ${moduleName} data is securely stored`}
      />
      <ToastDefault
        open={showStoreErrorToast}
        onOpenChange={setShowStoreErrorToast}
        duration={12000}
        variant="error"
        title="Error!"
        content="Please reload the page and try again"
      />
      <ToastDefault
        open={showInvalidFileToast}
        onOpenChange={setShowInvalidFileToast}
        duration={12000}
        variant="error"
        title="Invalid file!"
        content="Please select a zip file"
      />
    </>
  );
};

export { StorageUpload };
