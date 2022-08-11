type ZipFileFromGCS = {
  file: File;
  encryptedPassword: string;
};

/**
 * Fetches data from a url as a .zip file
 * @param url location of data
 * @returns File.zip
 */
const fetchZipFromUrl = async (url: string): Promise<ZipFileFromGCS> => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/zip",
    },
  });
  const blob = await res.blob();
  const file = new File([blob], "data.zip.enc", { type: "application/zip" });
  const encryptedPassword = res.headers.get(
    "x-goog-meta-encrypted-password",
  ) as string;

  return { file, encryptedPassword };
};

export { fetchZipFromUrl };
