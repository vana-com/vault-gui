export const setLoginPath = (asPath: string) => {
  const addOrigin = asPath !== "/";

  return addOrigin ? `/login/?origin=${encodeURIComponent(asPath)}` : "/login";
};
