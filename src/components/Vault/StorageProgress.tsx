// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";

interface Props {
  storeProgress: number;
}

const ENCRYPTION_PROGRESS_CUTOFF = 6;

const StorageProgress = ({ storeProgress }: Props) => (
  <Stack tw="gap-0 mx-auto justify-center pt-3 pb-5 min-h-[160px]">
    <Text variant="display" weight="semibold" tw="text-center text-6xl">
      {storeProgress}%
    </Text>
    <Text variant="note" color="labelSecondary" tw="text-center">
      {storeProgress < ENCRYPTION_PROGRESS_CUTOFF
        ? "Encrypting your data. Hold tight…"
        : "Sending securely…"}
    </Text>
  </Stack>
);

export { StorageProgress };
