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
    variant="confirm"
    buttonNode={
      <Button
        variant="outline"
        size="lg"
        tw="text-error ring-error font-semibold bg-red-500 bg-opacity-10"
        prefix={<Icon icon="carbon:close-filled" />}
      >
        {buttonLabel}
      </Button>
    }
  >
    <Center tw="py-insetDouble">
      <Stack tw="gap-insetAlmost flex-1">
        <Stack tw="gap-2">
          <Text color="label" variant="title2" tw="text-center">
            Are you sure?
          </Text>
          <Text color="labelSecondary" tw="text-center">
            Confirm you want to delete {deletionName}. Once it&apos;s gone,
            it&apos;s gone.
          </Text>
        </Stack>

        <Group tw="pt-1 gap-4 justify-center">
          <DialogClose asChild>
            <Button
              variant="outline"
              size="lg"
              // prefix={<Icon icon="carbon:pause-filled" />}
              tw="md:min-w-[220px]"
              isDisabled={isDeleting}
            >
              Not yet
            </Button>
          </DialogClose>
          <Button
            variant="solid"
            size="lg"
            prefix={<Icon icon="carbon:close-filled" />}
            tw="md:min-w-[220px] bg-error"
            isLoading={isDeleting}
            onClick={onDelete}
          >
            Delete
          </Button>
        </Group>
      </Stack>
    </Center>
  </DialogModalAdd>
);

export { DeleteData };
