const blobify = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

const fileify = (blob: Blob, filename: string) => new File([blob], filename);

export { blobify, fileify };
