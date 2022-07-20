// Returns a 13 character file name
export const getAbbreviatedFileName = (fileName: string) => {
  const strLen = fileName.length;
  if (strLen <= 20) {
    return fileName;
  }

  const startOfName = fileName.substring(0, 12);
  const endOfName = fileName.substring(strLen - 12, strLen);

  return `${startOfName}...${endOfName}`;
};
