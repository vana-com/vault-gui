import { Icon } from "@iconify/react";
import { DragEventHandler } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Group,
  Stack,
  Text,
  TooltipDefault,
  WithIcon,
} from "src/components";
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
}

const boxStyle = tw`relative flex items-center justify-center flex-1 w-full h-full text-black rounded p-insetHalf bg-neutral`;

const boxHoverStyle = tw`border border-dashed border-labelQuaternary hover:(border-primary)`;

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
}: Props) => (
  // This outer div has min-height set. The internal content block for each step occupies the remaining space by using `flex-1`.
  <div
    tw="cursor-default w-full relative flex flex-col min-h-[160px]"
    onDrop={onDropFile}
    onDragOver={(event) => {
      // Prevent default behavior (prevent file from being opened)
      event.preventDefault();
    }}
  >
    {/* INSTRUCTIONS top right inner corner: DEPRECATED */}
    {/* <div tw="absolute top-1 right-1 z-10">{instructionsNode}</div> */}

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
        css={[boxStyle, boxHoverStyle]}
      >
        <Stack tw="items-center gap-0.5 text-label">
          <Icon icon="carbon:upload" height="1.75em" />
          <div tw="pt-1">
            <Text weight="semibold" variant="body">
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
      <Stack tw="gap-2 transform lg:translate-y-1.5" css={boxStyle}>
        {filesToUpload.map((fileToUpload, i) => (
          <Stack key={fileToUpload.toString()} tw="gap-1 items-center">
            <Group tw="gap-1 justify-center items-center text-label">
              <Text weight="semibold" variant="body">
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
                  tw="text-label"
                  type="reset"
                  onClick={() => {
                    const copyFilesToUpload = [...filesToUpload];
                    copyFilesToUpload.splice(i, 1);
                    setFilesToUpload(copyFilesToUpload);
                  }}
                >
                  <Icon icon="carbon:close-filled" />
                </Button>
              </TooltipDefault>
            </Group>
          </Stack>
        ))}
        <Text
          variant="note"
          tw="text-primary font-medium flex items-center gap-1"
        >
          <WithIcon
            prefix={<Icon icon="carbon:checkmark" height="1.25em" tw="mt-px" />}
          >
            Looks good
          </WithIcon>
        </Text>
      </Stack>
    )}

    {/* STEP 3: UPLOAD */}
    {isDataUploading && <StorageProgress storeProgress={uploadProgress} />}
  </div>
);

export { StorageUploadPresenter };
