import { Stack, Text } from "components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

interface Props {
  value: number;
}

const StorageProgress = ({ value }: Props) => (
  <Stack tw="gap-1 mx-auto justify-center pt-3 pb-5">
    {/* TODO: recreate this! */}
    {/* <div tw="pt-2 pb-4 max-w-[75%]">
      <Progress hasStripe isAnimated value={value} bg="white" />
    </div> */}
    <Text variant="display" weight="semibold" tw="text-center">
      {value}%
    </Text>
    {/* color={vars.colors.gray70} */}
    <Text variant="note" color="labelTertiary" tw="text-center">
      {value < 4 ? "Encrypting your data. Hold tight…" : "Sending securely…"}
    </Text>
  </Stack>
);

export { StorageProgress };
