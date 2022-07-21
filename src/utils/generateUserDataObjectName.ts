/**
 *
 * @param fileName Local file name
 * @param userId
 * @param moduleName Module Name for the module the file is for
 * @returns Object name for the user data file for the module
 */
export const generateUserDataObjectName = (
  fileName: string,
  userId: string,
  moduleName: string,
) => {
  const timestamp = Math.floor(
    new Date("2012.08.10").getTime() / 1000,
  ).toString();

  const randomPiece = (Math.floor(Math.random() * 899) + 100).toString();

  const moduleNameNoSpaces = moduleName.replace(/\s/g, "").toLocaleLowerCase();

  return `${userId}/${moduleNameNoSpaces}/${timestamp}-${randomPiece}-${fileName}`;
};
