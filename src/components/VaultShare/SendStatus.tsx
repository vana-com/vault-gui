import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Link, Stack, styledMotionDiv, Text } from "src/components";
import { CarbonCheckmarkOutline, CarbonError } from "src/components/Icons";
import { SendUpdateStatus } from "src/components/VaultShare";
import config from "src/config";
import * as dataPipelineWorker from "src/types/DataPipelineWorker";

import { FocusStack } from "./Subelement";

/* 
  SendStatus presents UI messages for the sharing status. For the Pending status, we also show the sub-statuses for sending data progress. 
 */

interface Props {
  status: dataPipelineWorker.Status;
  stage: dataPipelineWorker.Stage;
}

const SendStatus = ({ status, stage }: Props) => {
  console.log("status", status);
  console.log("stage", stage);

  return (
    <FocusStack tw="min-h-[268px] justify-center relative">
      {/* IDLE OR PENDING */}
      {(status === dataPipelineWorker.Status.IDLE ||
        status === dataPipelineWorker.Status.PENDING) && (
        <AnimatePresence>
          <motion.div
            initial={{ x: 540 }}
            exit={{ x: -540 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
            css={styledMotionDiv}
          >
            <Stack tw="h-full items-center justify-center">
              <Stack tw="items-center -mt-3">
                <SendUpdateStatus stage={stage} status={status} />
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      )}

      {/* REJECTED */}
      {status === dataPipelineWorker.Status.REJECTED && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 20 }}
            exit={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25 }}
            css={styledMotionDiv}
          >
            <Stack tw="h-full items-center justify-center">
              <Stack tw="gap-1.5 items-center text-error -mt-3">
                <Group tw="gap-1.5 text-error items-center">
                  <CarbonError boxSize="21px" />
                  <Text
                    variant="body"
                    color="error"
                    weight="bold"
                    tw="text-center"
                  >
                    Something went wrong
                  </Text>
                </Group>
                <Text as="span" variant="base" weight="normal">
                  Close this window and try again. You can also{" "}
                  <Link href={`mailto:${config.vanaSupportEmail}`}>
                    email us
                  </Link>
                  .
                </Text>
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      )}

      {/* RESOLVED */}
      {status === dataPipelineWorker.Status.RESOLVED && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 20 }}
            exit={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25 }}
            css={styledMotionDiv}
          >
            <Stack tw="h-full items-center justify-center">
              <Stack tw="gap-1.5 items-center text-primary -mt-3">
                <div tw="text-3xl">
                  <CarbonCheckmarkOutline />
                </div>
                <Text variant="body" weight="medium" tw="text-center">
                  Done
                </Text>
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      )}
    </FocusStack>
  );
};

export { SendStatus };
