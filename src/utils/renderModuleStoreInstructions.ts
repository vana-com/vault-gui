import {
  facebookStoreInstructions,
  googleStoreInstructions,
  instagramStoreInstructions,
} from "src/data";
import { ModuleName } from "src/types";

export const renderModuleStoreInstructions = (
  moduleName: ModuleName,
): string => {
  if (moduleName === "Google") {
    return googleStoreInstructions;
  }
  if (moduleName === "Facebook") {
    return facebookStoreInstructions;
  }
  if (moduleName === "Instagram") {
    return instagramStoreInstructions;
  }
  return googleStoreInstructions;
};
