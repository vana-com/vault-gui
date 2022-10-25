const blobify = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

export { blobify };
