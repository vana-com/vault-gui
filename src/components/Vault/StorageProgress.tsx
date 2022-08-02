// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";

interface Props {
  value: number;
}

const StorageProgress = ({ value }: Props) => (
  <Stack tw="gap-1 mx-auto justify-center pt-3 pb-5">
    {/* TODO: recreate this! */}
    {/* <div tw="pt-2 pb-4 max-w-[75%]">
      <Progress hasStripe isAnimated value={value} bg="white" />
    </div> */}
    <Text variant="display" weight="semibold" tw="text-center text-5xl">
      {value}%
    </Text>
    <Text variant="note" color="labelTertiary" tw="text-center">
      {/* We don't track encryption progress, only uploading progress. But we do know it's not linear and that encryption is faster. So we arbitrarily fake an encryption progress message until uploading progress is at 5% */}
      {value < 6 ? "Encrypting your data. Hold tight…" : "Sending securely…"}
    </Text>
  </Stack>
);

export { StorageProgress };
