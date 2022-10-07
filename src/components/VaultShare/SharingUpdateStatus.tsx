// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";
import { SharePipelineProgress, ShareStatus } from "src/types";

interface Props {
  stage: SharePipelineProgress;
  status: ShareStatus;
}

const SharingUpdateStatus = ({ stage, status }: Props) => {
  const requested =
    status === ShareStatus.IDLE || stage === SharePipelineProgress.FETCH_DATA;
  const decryptedOrExtracted =
    stage === SharePipelineProgress.DECRYPTED_DATA ||
    stage === SharePipelineProgress.EXTRACTED_DATA;

  let heading;
  let lede;

  // Requesting
  if (requested) {
    heading = "Requesting";
    lede = "Decrypting your data. Hold tight…";
  }

  // Preparing
  if (decryptedOrExtracted) {
    heading = "Preparing";
    lede = "Structuring your data…";
  }

  // Completed
  if (stage === SharePipelineProgress.QUERY_DATA) {
    heading = "Shared";
    lede = "Your data has been securely shared.";
  }

  return (
    <Stack tw="gap-1 mx-auto justify-center pt-3 pb-5">
      <Text variant="title1" weight="semibold" tw="text-center">
        {heading}
      </Text>
      <Text variant="note" color="labelTertiary" tw="text-center">
        {lede}
      </Text>
    </Stack>
  );
};

export { SharingUpdateStatus };
