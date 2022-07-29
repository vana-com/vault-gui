import { DragEventHandler } from "react";
import tw from "twin.macro";

import { Button, Group, Stack, Text } from "src/components";
import { CarbonAttachment, CarbonCloseFilled } from "src/components/Icons";
import { getAbbreviatedFileName } from "src/utils/getAbbreviatedFileName";

import { StorageProgress } from "./index";

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

const boxStyle = tw`w-full p-6 text-black bg-white border rounded-lg lg:p-8`;

const StorageUploadPresenter = ({
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
    <div
      tw="cursor-default w-full"
      onDrop={onDropFile}
      onDragOver={(event) => {
        // Prevent default behavior (prevent file from being opened)
        event.preventDefault();
      }}
    >
      <div tw="sr-only">
        <FileInput onChange={handleSelectFile} />
      </div>

      {/* STEP 1: DROP */}
      {!isDataUploading && filesToUpload.length === 0 && (
        <Button
          variant="contrast"
          isDisabled={isDataUploading}
          onClick={openFileDialog}
          css={boxStyle}
        >
          <Stack tw="items-center">
            <CarbonAttachment height="2em" width="2em" />
            <div tw="pt-2">
              <Text color="black" weight="semibold" variant="body">
                Drop file(s) here or click to select
              </Text>
            </div>
            <Text variant="note" tw="text-gray-70">
              {filesToUploadDescription}
            </Text>
          </Stack>
        </Button>
      )}

      {/* STEP 2: CONFIRM & ADD PASSWORD */}
      {!isDataUploading && !!filesToUpload.length && (
        <Stack tw="gap-8" css={boxStyle}>
          {filesToUpload.map((fileToUpload, i) => (
            <Group
              key={fileToUpload.toString()}
              tw="gap-0.5 justify-center items-center"
            >
              <Text color="black" weight="semibold" variant="body">
                {getAbbreviatedFileName(fileToUpload.name)}
              </Text>
              <Button
                aria-label="Remove file to upload"
                variant="icon"
                tw="text-black"
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
          {passwordNode}
        </Stack>
      )}

      {/* STEP 3: UPLOAD */}
      {isDataUploading && <StorageProgress value={uploadProgress} />}
    </div>
  </>
);

export { StorageUploadPresenter };
