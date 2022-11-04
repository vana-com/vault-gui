import { File } from "@google-cloud/storage";

const DEFAULT_FILETYPE_ALLOWLIST = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

const filterFiles = (files: File[], allowList?: string[]): File[] =>
  files.filter((file: File) =>
    (allowList ?? DEFAULT_FILETYPE_ALLOWLIST).includes(
      file?.metadata?.contentType,
    ),
  );

export { filterFiles };
