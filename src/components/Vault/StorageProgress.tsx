// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";

interface Props {
  storeProgress: number;
}

const ENCRYPTION_PROGRESS_CUTOFF = 6;

// requires flex-1 to occup the space defined by the min-height set on the outer div of <StorageUploadPresenter>
const StorageProgress = ({ storeProgress }: Props) => (
  <Stack tw="flex-1 gap-0.5 mx-auto justify-center pt-3 pb-5 transform lg:translate-y-1.5">
    <Text
      variant="display"
      color="label"
      weight="semibold"
      tw="text-center text-6xl"
    >
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
