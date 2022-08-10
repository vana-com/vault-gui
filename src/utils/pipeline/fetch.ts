/**
 * Fetches data from a url as a .zip file
 * @param url location of data
 * @returns File.zip
 */
const fetchZipFromUrl = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/zip",
    },
  });
  const blob = await res.blob();
  const file = new File([blob], "data.zip.enc", { type: "application/zip" });

  return file;
};

export { fetchZipFromUrl };
