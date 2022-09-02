// capitalize the first letter in a string (ex. google => Google)
const capitalizeString = (string: string | undefined) =>
  string
    ? string.toString().charAt(0).toUpperCase() + string.toString().slice(1)
    : "";

export { capitalizeString };
