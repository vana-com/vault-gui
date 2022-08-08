// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DialogClose,
  DialogModal,
  Group,
  Stack,
  Text,
} from "src/components";
import { CarbonCloseFilled } from "src/components/Icons";

interface Props {
  buttonLabel?: string;
  isDeleting: boolean;
  onDelete: () => void;
}

const DeleteData = ({
  buttonLabel = "Delete all files",
  isDeleting,
  onDelete,
}: Props) => (
  <DialogModal
    buttonSlot={
      <Button
        variant="outline"
        size="full"
        tw="text-error ring-error font-semibold min-h-[220px] w-full bg-red-500 bg-opacity-10 hover:(bg-opacity-20)"
        prefix={<CarbonCloseFilled />}
        isLoading={isDeleting}
        // loadingText="Deleting…"
      >
        {buttonLabel}
      </Button>
    }
  >
    <Stack tw="gap-1 justify-center">
      <Text color="label" variant="title2" tw="text-center">
        Are you sure?
      </Text>
      <Text color="labelSecondary" tw="text-center">
        Once it&apos;s gone, it&apos;s gone.
      </Text>

      <Group tw="gap-4 pt-7 justify-center">
        <Button variant="solid" size="lg" onClick={onDelete}>
          Delete
        </Button>
        <DialogClose asChild>
          <Button variant="outline" size="lg">
            Not yet
          </Button>
        </DialogClose>
      </Group>
    </Stack>
  </DialogModal>
);

export { DeleteData };
