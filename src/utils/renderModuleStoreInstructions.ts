import {
  facebookStoreInstructions,
  googleStoreInstructions,
  instagramStoreInstructions,
  netflixViewingHistoryStoreInstructions,
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
    case "netflix viewing history":
      return netflixViewingHistoryStoreInstructions;
    default:
      return `Download instructions for ${moduleName} is unavailable.`;
  }
};
