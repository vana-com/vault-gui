import React, { ChangeEvent, forwardRef, ReactElement, useRef } from "react";

interface FileInputProps {
  onChange: (
    file: File | undefined,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  [index: string]: any; // Indexer to spread props
}

// eslint-disable-next-line react/display-name
const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ onChange = () => {}, ...restOfProps }, forwardedRef) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const file = event.target?.files?.[0];
      onChange(file, event);
    };

    return (
      <input
        onChange={handleChange}
        {...restOfProps}
        ref={forwardedRef}
        type="file"
      />
    );
  },
);

type UseFileDropzoneTools = {
  FileInput: (props: any) => ReactElement<HTMLInputElement>;
  openFileDialog: () => void;
};

/**
 * A tiny component to handle selecting of files.
 * This hides the FileInput until the handler, openFileDialog, is called
 * @returns
 *  FileInput - Hidden File input div
 *  openFileDialog - Handler to open native selection window
 */
export const useFileDropzone = (): UseFileDropzoneTools => {
  const ref = useRef<HTMLInputElement>();

  const openFileDialog = () => {
    if (ref.current) {
      ref.current.value = "";
      ref.current?.click();
    }
  };

  return {
    FileInput: (props: any) => (
      <FileInput {...props} ref={ref} style={{ display: "none" }} />
    ),
    openFileDialog,
  };
};
