import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Center,
  DialogClose,
  DialogModalAdd,
  Group,
  Stack,
  Text,
} from "src/components";
import { CarbonCloseFilled } from "src/components/Icons";

interface Props {
  buttonLabel?: string;
  isDeleting: boolean;
  onDelete: () => void;
  deletionName: string;
}

const DeleteData = ({
  buttonLabel = "Delete all files",
  isDeleting,
  deletionName,
  onDelete,
}: Props) => (
  <DialogModalAdd
    buttonNode={
      <Button
        variant="outline"
        size="md"
        tw="text-error ring-error font-semibold bg-red-500 bg-opacity-10 hover:(bg-opacity-20)"
        prefix={<CarbonCloseFilled />}
        isLoading={isDeleting}
        // loadingText="Deleting…"
      >
        {buttonLabel}
      </Button>
    }
  >
    <Center tw="flex-1">
      <Stack tw="gap-4 flex-1">
        <Stack tw="gap-1">
          <Text color="label" variant="title2" tw="text-center">
            Are you sure?
          </Text>
          <Text color="labelSecondary" tw="text-center">
            Confirm you want to delete {deletionName}. Once it&apos;s gone,
            it&apos;s gone.
          </Text>
        </Stack>
        <hr />

        <Group tw="pt-1 gap-4 justify-center">
          <Button
            variant="solid"
            size="lg"
            prefix={<Icon icon="carbon:close-filled" />}
            tw="min-w-[220px] bg-error"
            isLoading={isDeleting}
            onClick={onDelete}
          >
            Delete
          </Button>
          <DialogClose asChild>
            <Button
              variant="outline"
              size="lg"
              prefix={<Icon icon="carbon:pause-filled" />}
              tw="min-w-[220px]"
            >
              Not yet
            </Button>
          </DialogClose>
        </Group>
      </Stack>
    </Center>
  </DialogModalAdd>
);

export { DeleteData };
