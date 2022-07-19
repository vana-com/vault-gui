import { Button, Group, Dialog, Text, Stack } from 'components'
import { CarbonCloseFilled } from 'components/Icons'
import { DialogClose } from '@radix-ui/react-dialog'
// import { useRef } from "react";
import tw from 'twin.macro'

interface Props {
  buttonLabel?: string
  isDeleting: boolean
  onDelete: () => void
}

const DeleteData = ({
  buttonLabel = 'Delete all files',
  isDeleting,
  onDelete,
}: Props) => {
  return (
    <Dialog
      buttonSlot={
        <Button
          variant="outline"
          size="lg"
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
    </Dialog>
  )
}

export { DeleteData }
