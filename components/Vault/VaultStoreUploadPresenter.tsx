import {
  Box,
  BoxProps,
  Button,
  Stack,
  Group,
  Text,
  VisuallyHidden,
} from "components";
import { DragEventHandler } from "react";
import { StorageProgress } from "./index";
import { CarbonAttachment, CarbonCloseFilled } from "components/Icons";
import * as styles from "./VaultStoreUpload.css";
import { vars } from "css/vars.css";
import { getAbbreviatedFileName } from "utils/getAbbreviatedFileName";

interface Props {
  onDropFile: DragEventHandler<HTMLDivElement>;
  isDataUploading: boolean;
  FileInput: any;
  handleSelectFile: (file: File) => void;
  filesToUpload: Array<File>;
  setFilesToUpload: (filesToUpload: Array<File>) => void;
  openFileDialog: () => void;
  uploadProgress: number;
  filesToUploadDescription: string;
  passwordNode: React.ReactNode;
}

const BOX_STYLE = {
  backgroundColor: "gray10", // matches button variant=blackAlpha
  borderRadius: "2",
  padding: { xs: "2", lg: "4" },
};

const StyledStack = (props: BoxProps) => (
  // color={vars.colors.gray70}
  <Stack gap="2" padding={{ xs: "4", lg: "6" }} {...props} />
);

const VaultStoreUploadPresenter = ({
  onDropFile,
  isDataUploading,
  FileInput,
  handleSelectFile,
  filesToUpload,
  setFilesToUpload,
  openFileDialog,
  uploadProgress,
  filesToUploadDescription,
  passwordNode,
}: Props) => (
  <>
    {/* <SecurityMessage /> */}
    <Box
      cursor="default"
      width="full"
      onDrop={onDropFile}
      onDragOver={(event) => {
        // Prevent default behavior (prevent file from being opened)
        event.preventDefault();
      }}
    >
      <VisuallyHidden>
        <FileInput onChange={handleSelectFile} />
      </VisuallyHidden>

      {/* STEP 1: DROP */}
      {!isDataUploading && filesToUpload.length === 0 && (
        <Button
          variant="contrastInverse"
          isDisabled={isDataUploading}
          onClick={openFileDialog}
          // className={styles.uploadButton}
          style={{
            backgroundColor: vars.colors.white100,
            color: vars.colors.black100,
            flexDirection: "column",
            height: "auto",
            width: "100%",
          }}
        >
          <StyledStack alignItems="center">
            <CarbonAttachment height="2em" width="2em" />
            <Box paddingTop="2">
              <Text
                color="black100"
                size={{ xs: "2", lg: "4" }}
                weight="semibold"
              >
                Drop file(s) here or click to select
              </Text>
            </Box>
            <Text
              variant="note"
              style={{
                color: vars.colors.gray70,
              }}
            >
              {filesToUploadDescription}
            </Text>
          </StyledStack>
        </Button>
      )}

      {/* STEP 2: CONFIRM & ADD PASSWORD */}
      {!isDataUploading && !!filesToUpload.length && (
        // {...BOX_STYLE}
        <StyledStack gap="5">
          {filesToUpload.map((fileToUpload, i) => (
            <Group
              key={fileToUpload.toString()}
              gap="1"
              // styles={{
              //   "& svg": {
              //     transform: "translateY(-0.03em)",
              //   },
              // }}
            >
              <Text variant="body" weight="medium">
                {getAbbreviatedFileName(fileToUpload.name)}
              </Text>
              <Button
                aria-label="Remove file to upload"
                variant="icon"
                // colorScheme="blackAlpha"
                // size="sm"
                // color="slate.slate12"
                // bg="transparent"
                // _hover={{
                //   bg: "gray.200",
                // }}
                // TODO: test if Formik implicitly gets handle this reset…
                type="reset"
                onClick={() => {
                  const copyFilesToUpload = [...filesToUpload];
                  copyFilesToUpload.splice(i, 1);
                  setFilesToUpload(copyFilesToUpload);
                }}
              >
                <CarbonCloseFilled />
              </Button>
            </Group>
          ))}

          {/* password node */}
          <Box width="full">{passwordNode}</Box>
        </StyledStack>
      )}

      {/* STEP 3: UPLOAD */}
      {isDataUploading && (
        // {...BOX_STYLE}
        <Box>
          <StorageProgress value={uploadProgress} />
        </Box>
      )}
    </Box>
  </>
);

export { VaultStoreUploadPresenter };
