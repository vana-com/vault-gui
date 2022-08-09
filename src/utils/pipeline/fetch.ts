/**
 * Fetches data from a url as a file
 * @param url location of data
 * @returns File
 */
const fetchDataFromUrl = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/zip",
    },
  });
  const blob = await res.blob();
  const file = new File([blob], "data.zip.enc", { type: "application/zip" });

  console.log(file);

  return file;
};

export { fetchDataFromUrl };
