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
        tw="font-normal text-labelSecondary"
        // prefix={<Icon icon="carbon:task" height="1em" />}
        prefix={<Icon icon="carbon:list-checked" height="1em" />}
        // prefix={<Icon icon="carbon:warning-alt-filled" height="1em" />}
        // prefix={<Icon icon="carbon:pause-past" height="1.5em" />}
        // prefix={<Icon icon="carbon:warning-alt-filled" height="1em" />}
      >
        Get your {moduleName} data
      </Button>
    }
  >
    <StorageInstructions moduleName={moduleName} />
  </DialogDrawer>
);

export { StorageInstructionsModal };
