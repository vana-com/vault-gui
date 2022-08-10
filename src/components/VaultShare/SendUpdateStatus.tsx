// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";
import * as DataPipeline from "src/types/DataPipeline";

interface Props {
  stage: DataPipeline.Stage;
  status: DataPipeline.Status;
}

const SendUpdateStatus = ({ stage, status }: Props) => {
  const decryptedOrExtracted =
    stage === DataPipeline.Stage.DECRYPTED_DATA ||
    stage === DataPipeline.Stage.EXTRACTED_DATA;

  let heading;
  let lede;

  // Requesting
  if (
    status === DataPipeline.Status.IDLE ||
    stage === DataPipeline.Stage.FETCH_DATA
  ) {
    heading = "Requesting";
    lede = "Decrypting your data. Hold tight…";
  }

  // Preparing
  if (decryptedOrExtracted) {
    heading = "Preparing";
    lede = "Structuring your data…";
  }

  // Ready
  if (stage === DataPipeline.Stage.QUERY_DATA) {
    heading = "Ready";
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

export { SendUpdateStatus };
