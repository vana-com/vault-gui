import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  ButtonSize,
  DialogModalAdd,
  ModuleButton,
  Stack,
  Text,
} from "src/components";
import { Module } from "src/types";

interface Props {
  buttonSize: ButtonSize | undefined;
  // buttonSize?: string;
  modules: Module[] | undefined;
}

const styles = ({ buttonSize }: { buttonSize: ButtonSize | undefined }) => [
  buttonSize === "full"
    ? tw`h-[260px] bg-[#f2f2f2] rounded-[15px]`
    : tw`bg-primarys-60 bg-opacity-10 ring-1 ring-inset ring-labelQuaternary min-w-[140px]`,
];

const AddData = ({ modules, buttonSize = "full" }: Props) => (
  <DialogModalAdd
    buttonSlot={
      <Button
        size={buttonSize}
        variant="solid"
        css={styles({ buttonSize })}
        prefix={
          <Icon
            icon="heroicons-solid:plus-circle"
            height={buttonSize === "full" ? "1.5em" : "1em"}
          />
        }
      >
        Add data
      </Button>
    }
  >
    <div tw="flex flex-col gap-4">
      <Stack tw="gap-0.5 -mt-1">
        <Text variant="title1">Add data</Text>
        <Text variant="base" color="labelTertiary">
          To get started, choose an app
        </Text>
      </Stack>
      <hr />
      <div tw="p-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-insetHalf">
        {modules?.map((module) => (
          <ModuleButton key={module.id} module={module} />
        ))}
      </div>
    </div>
  </DialogModalAdd>
);

export { AddData };
