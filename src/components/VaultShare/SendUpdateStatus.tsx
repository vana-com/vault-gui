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

  return (
    <Stack tw="gap-1 mx-auto justify-center pt-3 pb-5">
      <Text variant="title1" weight="semibold" tw="text-center">
        {stage === dataPipelineWorker.Stage.FETCH_DATA && "Requesting…"}
        {decruptedOrExtracted && "Preparing…"}
        {stage === dataPipelineWorker.Stage.QUERY_DATA && "Ready"}
      </Text>
      <Text variant="note" color="labelTertiary" tw="text-center">
        {stage === dataPipelineWorker.Stage.FETCH_DATA &&
          "Decrypting your data. Hold tight…"}
        {stage === dataPipelineWorker.Stage.DECRYPTED_DATA &&
          "Data decrypted. "}
        {stage === dataPipelineWorker.Stage.DECRYPTED_DATA &&
          "Data extracted for use."}
        {stage === dataPipelineWorker.Stage.QUERY_DATA &&
          "Your data has been securely shared."}
      </Text>
    </Stack>
  );
};

export { SendUpdateStatus };
