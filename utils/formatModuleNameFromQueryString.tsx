// capitalize the first letter in the query string module parameter (ex. google => Google)
const formatModuleNameFromQueryString = (
  moduleNameFromQueryString: string | string[] | undefined,
) =>
  moduleNameFromQueryString
    ? moduleNameFromQueryString.toString().charAt(0).toUpperCase() +
      moduleNameFromQueryString.toString().slice(1)
    : "";

export { formatModuleNameFromQueryString };
