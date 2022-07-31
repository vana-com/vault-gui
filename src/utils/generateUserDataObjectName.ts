/**
 *
 * @param fileName Local file name
 * @param appPubKey
 * @param moduleName Module Name for the module the file is for
 * @returns Object name for the user data file for the module
 */
export const generateUserDataObjectName = (
  fileName: string,
  appPubKey: string,
  moduleName: string,
) => {
  const timestamp = Math.floor(new Date().getTime() / 1000).toString();

  const randomPiece = (Math.floor(Math.random() * 899) + 100).toString();

  const moduleNameNoSpaces = moduleName.replace(/\s/g, "").toLocaleLowerCase();

  return `${appPubKey}/${moduleNameNoSpaces}/${timestamp}-${randomPiece}-${fileName}`;
};
