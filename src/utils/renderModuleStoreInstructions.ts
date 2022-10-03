import {
  facebookStoreInstructions,
  googleStoreInstructions,
  instagramStoreInstructions,
  netflixLightStoreInstructions,
} from "src/data";
import { ModuleName } from "src/types";

export const renderModuleStoreInstructions = (
  moduleName: ModuleName,
): string => {
  switch (moduleName.toLowerCase()) {
    case "google":
      return googleStoreInstructions;
    case "facebook":
      return facebookStoreInstructions;
    case "instagram":
      return instagramStoreInstructions;
    case "netflix light":
      return netflixLightStoreInstructions;
    default:
      return `Download instructions for ${moduleName} is unavailable.`;
  }
};
