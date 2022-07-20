// import { encryptAndUploadUserDataFiles, heapTrack, stripZipFiles } from "src/utils";
// import config from "config";
import { Form, Formik, FormikProps } from "formik";
// import { useRouter } from "next/router";
import { useS3Upload } from "next-s3-upload";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Stack } from "src/components";
import { CarbonArrowRight } from "src/components/Icons";
import { ToastApi, ToastImp } from "src/components/Toast";

import { StoragePassword, VaultStoreUploadPresenter } from "./index";

interface FormikValues {
  password: string;
}

interface VaultStoreUploadProps {
  // The original page a user was on. Redirect to this page after completing finishing upload.
  // origin?: string;
  moduleName: string;
  // createUserModule: (urlToData: string, urlNumber: number) => Promise<void>;
  // userId: string;
}

const VaultStoreUpload = ({ moduleName }: VaultStoreUploadProps) => {
  // const toast = useToast({ isClosable: true });
  // Used to open file dialog & detect when files are selected (no S3 uploading)
  const { FileInput, openFileDialog } = useS3Upload();
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
    // if (!config.zipFileMimeTypes.includes(file.type)) {
    //   setInvalidFile(true);
    //   // toast({
    //   //   status: "error",
    //   //   containerStyle: toastContainerStyle,
    //   //   render: () => <StyledToast isError>Error: Invalid file</StyledToast>,
    //   // });
    //   return;
    // }
    const newFiles = [...filesToUpload, file];
    setFilesToUpload(newFiles);
  };

  // When a user drops a file into the drop area on the final step
  const onDropFile = (event: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    event.preventDefault();

    // const newFiles = [];
    console.log("onDropFile", event.dataTransfer.files);
  };

  /**
   * `encryptAndUploadFiles` handles all zip file processing after submission:
   * - Strips Media files from the zip file to reduce size
   * - Encrypts the data use ChaCha20-Poly1305
   * - Uploads the encrypted zip files to Google Cloud Storage
   */
  const encryptAndUploadFiles = async (password: string) => {
    setIsDataUploading(true);
    setStoreSuccess(true);
    console.log(password);
  };

  // Callback to handle upload progress
  // const handleUploadProgress = (event) => {
  //   const { loaded, total } = event;

  //   const progress =
  //     total || loaded
  //       ? Math.floor((loaded / (total || 1)) * 100) // Prevent divide by 0
  //       : 15; // Default to 15% if somehow values don't exist

  //   // Default starting pos is 5% so don't jump back down to <5%
  //   setUploadProgress(Math.max(progress, 5));
  // };

  // track the upload progress
  useEffect(() => {
    // empty on purpose, just tracking uploadProgress
  }, [uploadProgress]);

  // describe file requirements
  const describeFilesRequired = () => {
    if (moduleName === "Google") {
      return `There should be two files from your ${moduleName} export`;
    }
    return `There should only be one file from your ${moduleName} export`;
  };

  // TESTS
  // const hasFiles = !!filesToUpload.length;
  // console.log("hasFiles", hasFiles);

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
              {/* <Box paddingBottom="2">
              <Text variant="body" color="label">
                Upload to store your data in Vana Vault.
              </Text>
            </Box> */}

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
                {/* <Button
                  variant="solid"
                  size="xl"
                  tw="w-full"
                  suffix={<CarbonArrowRight />}
                  // imperative test
                  // onClick={() => savedRef.current.publish()}
                  onClick={() => setStoreSuccess(!storeSuccess)}
                >
                  Test
                </Button> */}
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
