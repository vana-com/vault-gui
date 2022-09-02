const getFileSizeString = (fileSizeInBytes: number) => {
  if (fileSizeInBytes <= 999) {
    return `${fileSizeInBytes} B`;
  }
  if (fileSizeInBytes > 999 || fileSizeInBytes <= 999999) {
    return `${Math.round(fileSizeInBytes / 1000)} KB`;
  }
  if (fileSizeInBytes > 999999 || fileSizeInBytes <= 999999999) {
    return `${Math.round(fileSizeInBytes / 1000000)} MB`;
  }
  return `${Math.round(fileSizeInBytes / 1000000000)} GB`;
};

export { getFileSizeString };
