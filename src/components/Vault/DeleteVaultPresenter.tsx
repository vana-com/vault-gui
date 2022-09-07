import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Center,
  DialogClose,
  DialogModal,
  Group,
  Stack,
  Text,
} from "src/components";

interface Props {
  buttonNode: React.ReactNode;
  isDeleting: boolean;
  onDelete: () => void;
}

const DeleteVaultPresenter = ({ buttonNode, isDeleting, onDelete }: Props) => (
  <DialogModal variant="confirm" buttonNode={buttonNode}>
    <Center tw="py-insetDouble">
      <Stack tw="gap-insetAlmost flex-1">
        <Stack tw="gap-2">
          <Text color="label" variant="title2" tw="text-center">
            Are you sure?
          </Text>
          <Text color="labelSecondary" tw="text-center">
            Confirm you want to delete your vault. Once it&apos;s gone,
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
  </DialogModal>
);

export { DeleteVaultPresenter };
