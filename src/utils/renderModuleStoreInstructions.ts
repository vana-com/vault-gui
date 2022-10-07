import {
  amazonOrdersStoreInstructions,
  facebookStoreInstructions,
  googleStoreInstructions,
  instagramStoreInstructions,
  netflixViewingHistoryStoreInstructions,
} from "src/data";

export const renderModuleStoreInstructions = (moduleName: string): string => {
  switch (moduleName.toLowerCase()) {
    case "google":
      return googleStoreInstructions;
    case "facebook":
      return facebookStoreInstructions;
    case "instagram":
      return instagramStoreInstructions;
    case "netflix viewing history":
      return netflixViewingHistoryStoreInstructions;
    case "amazon orders":
      return amazonOrdersStoreInstructions;
    default:
      return `Download instructions for ${moduleName} is unavailable.`;
  }
};
