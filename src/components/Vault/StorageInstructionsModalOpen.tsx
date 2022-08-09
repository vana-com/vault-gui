// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { DialogDrawerDefaultOpen, StorageInstructions } from "src/components";
import { ModuleName } from "src/types";

interface Props {
  moduleName: ModuleName;
}

const StorageInstructionsModalOpen = ({ moduleName }: Props) => (
  <DialogDrawerDefaultOpen>
    <StorageInstructions moduleName={moduleName} />
  </DialogDrawerDefaultOpen>
);

export { StorageInstructionsModalOpen };
