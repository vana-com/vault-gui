export const nameToPathName = (name: string) =>
  name.replace(/ /g, "-").toLowerCase();
