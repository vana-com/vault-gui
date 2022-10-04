/**
 * Capitalize the first letter in the of module name
 * (ex. google => Google, netflix_viewing_history => Netflix Viewing History)
 * @param moduleNameAsId (ex: google, or netflix_viewing_history)
 * @returns
 */
const formatModuleNameForUI = (moduleNameAsId: string) => {
  if (moduleNameAsId) {
    return moduleNameAsId
      .split("_")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  }
  return moduleNameAsId;
};

export { formatModuleNameForUI };
