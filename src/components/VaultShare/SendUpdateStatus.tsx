// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack, Text } from "src/components";
import * as dataPipelineWorker from "src/types/DataPipelineWorker";

interface Props {
  stage: dataPipelineWorker.Stage;
}

const SendUpdateStatus = ({ stage }: Props) => {
  const decruptedOrExtracted =
    stage === dataPipelineWorker.Stage.DECRYPTED_DATA ||
    stage === dataPipelineWorker.Stage.EXTRACTED_DATA;

  let heading;
  if (stage === dataPipelineWorker.Stage.FETCH_DATA) heading = "Requesting";
  if (decruptedOrExtracted) heading = "Preparing";
  if (stage === dataPipelineWorker.Stage.QUERY_DATA) heading = "Ready";

  let lede;
  if (stage === dataPipelineWorker.Stage.FETCH_DATA)
    lede = "Decrypting your data. Hold tight…";
  if (decruptedOrExtracted) lede = "Structuring your data…";
  if (stage === dataPipelineWorker.Stage.QUERY_DATA)
    lede = "Your data has been securely shared.";

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
