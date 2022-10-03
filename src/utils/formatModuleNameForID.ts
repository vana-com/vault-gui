import { Modules } from "src/graphql/generated";

/**
 * Return the module's display name as an ID
 * (Netflix Light => netflix_light)
 * @param module
 * @returns
 */
const formatModuleNameForID = (module: Modules) =>
  module.name.toLowerCase().replaceAll(" ", "_");

export { formatModuleNameForID };
