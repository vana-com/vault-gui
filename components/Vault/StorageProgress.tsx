// import { Box, Progress, ProgressProps, Text, VStack } from "@chakra-ui/react";
import { Box, Text, Stack } from "components";
import { vars } from "css/vars.css";

/* TODO: progress thing! */

interface Props {
  value: number;
}

const StorageProgress = ({ value }: Props) => (
  <Stack gap="1" maxWidth="3/4">
    <Box paddingTop="2" paddingBottom="4" width="full">
      {/* isAnimated is undocumented! */}
      {/* <Progress hasStripe isAnimated value={value} bg="white" /> */}
    </Box>
    <Text variant="title3" weight="semibold">
      {value}%
    </Text>
    {/* color={vars.colors.gray70} */}
    <Text variant="note">
      {value < 11 ? "Encrypting your data. Hold tight…" : "Sending securely…"}
    </Text>
  </Stack>
);

export { StorageProgress };
