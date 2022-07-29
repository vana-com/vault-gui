// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Link, Stack, StorageProgress, Text } from "src/components";
import { CarbonCheckmarkOutline, CarbonError } from "src/components/Icons";
import config from "src/config";

import { FocusStack } from "./Subelement";

type SendStatus = "inProgress" | "error" | "success";

interface Props {
  status: SendStatus;
}

const SendStatus = ({ status }: Props) => (
  <FocusStack tw="min-h-[268px] justify-center">
    {/* STATE: IN PROGRESS */}
    {status === "inProgress" && (
      <Stack tw="gap-1.5 items-center text-primary -mt-3">
        <StorageProgress value={17} />
      </Stack>
    )}

    {/* STATE: ERROR */}
    {status === "error" && (
      <Stack tw="gap-1.5 items-center text-error -mt-3">
        {/* <div tw="text-error text-3xl pb-2">
          <CarbonError />
        </div> */}
        <Group tw="gap-1.5 text-error items-center">
          <CarbonError boxSize="21px" />
          <Text variant="body" color="error" weight="semibold" tw="text-center">
            Something went wrong
          </Text>
        </Group>
        <Text as="span" variant="note" weight="normal">
          Close this window and try again. You can also{" "}
          <Link href={`mailto:${config.vanaSupportEmail}`}>email us</Link>.
        </Text>
      </Stack>
    )}

    {/* STATE: SUCCESS */}
    {status === "success" && (
      <Stack tw="gap-1.5 items-center text-primary -mt-3">
        <div tw="text-3xl">
          <CarbonCheckmarkOutline />
        </div>
        <Text variant="body" weight="medium" tw="text-center">
          Done
        </Text>
      </Stack>
    )}
  </FocusStack>
);

export { SendStatus };
