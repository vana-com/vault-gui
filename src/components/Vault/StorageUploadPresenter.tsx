import { Icon } from "@iconify/react";
import { DragEventHandler } from "react";
import tw from "twin.macro";

import {
  Button,
  Group,
  Stack,
  Text,
  TooltipDefault,
  WithIcon,
} from "src/components";
import { CarbonCloseFilled } from "src/components/Icons";
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
  instructionsNode?: React.ReactNode;
}

const boxStyle = tw`relative flex items-center justify-center w-full h-full text-black rounded p-insetHalf bg-neutral min-h-[160px]`;

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
  instructionsNode,
}: Props) => (
  <>
    <div
      tw="cursor-default w-full relative"
      onDrop={onDropFile}
      onDragOver={(event) => {
        // Prevent default behavior (prevent file from being opened)
        event.preventDefault();
      }}
    >
      {/* INSTRUCTIONS */}
      <div tw="absolute top-1 right-1 z-10">{instructionsNode}</div>

      {/* FILE INPUT */}
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
          <Stack tw="items-center gap-0.5">
            <Icon icon="carbon:upload" height="1.75em" />
            <div tw="pt-1">
              <Text color="black" weight="semibold" variant="body">
                Drop file(s) here or click to select
              </Text>
            </div>
            <Text variant="note" tw="text-labelSecondary">
              {filesToUploadDescription}
            </Text>
          </Stack>
        </Button>
      )}

      {/* STEP 2: CONFIRM */}
      {!isDataUploading && !!filesToUpload.length && (
        <Stack tw="gap-8" css={boxStyle}>
          {filesToUpload.map((fileToUpload, i) => (
            <Stack
              key={fileToUpload.toString()}
              tw="gap-1 items-center transform translate-y-1.5"
            >
              <Group tw="gap-1 justify-center items-center">
                <Text color="black" weight="semibold" variant="body">
                  {getAbbreviatedFileName(fileToUpload.name)}
                </Text>
                <TooltipDefault
                  label="Remove file"
                  align="center"
                  side="right"
                  sideOffset={0}
                >
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
                </TooltipDefault>
              </Group>
              <Text
                variant="note"
                tw="text-labelSecondary flex items-center gap-1"
              >
                <WithIcon
                  prefix={<Icon icon="carbon:checkmark" height="1.25em" />}
                >
                  Looks good
                </WithIcon>
              </Text>
            </Stack>
          ))}
        </Stack>
      )}

      {/* STEP 3: UPLOAD */}
      {isDataUploading && <StorageProgress storeProgress={uploadProgress} />}
    </div>
  </>
);

export { StorageUploadPresenter };
