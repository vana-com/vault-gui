import { stripZipFiles } from "@corsali/userdata-extractor";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Stack } from "src/components";
import { CarbonArrowRight } from "src/components/Icons";
import { ToastApi, ToastImp } from "src/components/Toast";
import config from "src/config";
import { encryptAndUploadUserDataFiles, heapTrack } from "src/utils";

import { useFileDropzone } from "./FileDropzone";
import { StoragePassword, VaultStoreUploadPresenter } from "./index";

interface FormikValues {
  password: string;
}

interface VaultStoreUploadProps {
  moduleName: string;
  createUserModule: (urlToData: string, urlNumber: number) => Promise<void>;
  appPubKey: string;
}

const VaultStoreUpload = ({
  moduleName,
  createUserModule,
  appPubKey,
}: VaultStoreUploadProps) => {
  const router = useRouter();
  const { FileInput, openFileDialog } = useFileDropzone();
  const [isDataUploading, setIsDataUploading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [uploadProgress, setUploadProgress] = useState(5); // Start at 5%
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>([]);
  const [invalidFile, setInvalidFile] = useState(false);
  const [storeSuccess, setStoreSuccess] = useState(false);
  // const router = useRouter();
  const savedRef = useRef();

  /* FILE CALLBACKS */

  // Callback when a file is selected in the file picker
  const handleSelectFile = (file: File) => {
    if (!config.zipFileMimeTypes.includes(file.type)) {
      setInvalidFile(true);
      // TODO: invalid file type toast
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
      // TODO: invalid file error toast
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
  const encryptAndUploadFiles = async (password: string) => {
    setIsDataUploading(true);
    try {
      const sanitizedFiles = await stripZipFiles(filesToUpload);

      await encryptAndUploadUserDataFiles(
        sanitizedFiles,
        password,
        moduleName,
        appPubKey,
        handleUploadProgress,
        createUserModule,
      );

      setIsDataUploading(true);
      // TODO: success modal
      heapTrack("Uploaded Data", {
        module: moduleName,
        numFilesUploaded: filesToUpload.length,
      });
      setStoreSuccess(true);
      setTimeout(() => router.push("/?completed-store=true"), 500);
    } catch (error: any) {
      console.log(error.toString());
      // TODO: Error toast
      setStoreSuccess(false);
      setIsDataUploading(false);
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
      <Formik
        initialStatus={{
          successful: false,
        }}
        initialValues={{ password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.password) {
            errors.password = "Required";
          } else if (
            !/^(?=.{10,}$)(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\W).*$/.test(
              values.password,
            )
          ) {
            errors.password = "Invalid";
          }
          return errors;
        }}
        onSubmit={async (values, { setStatus }) => {
          setStatus({ successful: false });
          encryptAndUploadFiles(values.password);
          setStatus({ successful: true });
        }}
      >
        {(formik: FormikProps<FormikValues>) => (
          <Form style={{ width: "100%" }}>
            <Stack tw="rounded-sm">
              <Stack tw="w-full gap-1 lg:gap-4">
                {/* UPLOADER */}
                <VaultStoreUploadPresenter
                  onDropFile={onDropFile}
                  isDataUploading={isDataUploading}
                  FileInput={FileInput}
                  handleSelectFile={handleSelectFile}
                  filesToUpload={filesToUpload}
                  setFilesToUpload={setFilesToUpload}
                  openFileDialog={openFileDialog}
                  uploadProgress={uploadProgress}
                  filesToUploadDescription={describeFilesRequired()}
                  passwordNode={<StoragePassword />}
                />

                {/* BUTTON */}
                <Button
                  variant="solid"
                  size="xl"
                  tw="w-full"
                  suffix={<CarbonArrowRight />}
                  isLoading={formik.isSubmitting}
                  isDisabled={
                    !filesToUpload.length || !formik.dirty || !formik.isValid
                  }
                  // Formik only needs this to run it's onSubmit
                  type="submit"
                  // TODO: check what analytics depend on this before updating
                  id="connect-upload-button"
                >
                  Encrypt and store
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>

      {/* TOASTS */}
      <ToastImp ref={savedRef}>Saved successfully!</ToastImp>
      {/* <ToastDemo /> */}
      {/* TODO: use formik success, not storeSuccess */}
      <ToastApi
        open={storeSuccess}
        setOpen={setStoreSuccess}
        duration={2000}
        title="Good!"
        content="Well done, you won"
      />
      <ToastApi
        open={invalidFile}
        setOpen={setInvalidFile}
        title="Bad!"
        content="invalid file"
      />
    </>
  );
};

export { VaultStoreUpload };
