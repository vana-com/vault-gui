import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, DialogDrawer, StorageInstructions } from "src/components";
import { ModuleName } from "src/types";

interface Props {
  moduleName: ModuleName;
}

const StorageInstructionsModal = ({ moduleName }: Props) => (
  <DialogDrawer
    buttonNode={
      <Button
        size="md"
        variant="ghost"
        // primaryShade
        tw="text-error font-semibold hover:(bg-red-500 bg-opacity-10)"
        // prefix={<Icon icon="carbon:task" height="1em" />}
        // prefix={<Icon icon="carbon:list-checked" height="1em" />}
        // prefix={<Icon icon="carbon:warning-alt-filled" height="1em" />}
        prefix={<Icon icon="carbon:pause-past" height="1.5em" />}
      >
        Get your data first
      </Button>
    }
  >
    <StorageInstructions moduleName={moduleName} />
  </DialogDrawer>
);

export { StorageInstructionsModal };
