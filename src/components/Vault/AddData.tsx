import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DataCardButton,
  DialogModal,
  Group,
  Link,
  Stack,
  Text,
} from "src/components";
import config from "src/config";
import { Modules } from "src/graphql/generated";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

interface Props {
  userId: string;
  modules: Modules[] | undefined;
  children: React.ReactNode;
  buttonIsLarge?: boolean;
}

const AddData = ({ userId, modules, children, buttonIsLarge }: Props) => (
  <DialogModal
    buttonNode={
      <Button
        onClick={() => {
          heapTrackServerSide(userId, HEAP_EVENTS.CLICK_ADD_DATA_BUTTON);
        }}
        type="button"
        variant="solid"
        size={buttonIsLarge ? "xl" : "md"}
        prefix={<Icon icon="carbon:locked" height="1.125em" />}
        css={[
          tw`font-semibold ring-1 ring-inset ring-labelQuaternary`,
          buttonIsLarge ? tw`sm:min-w-[280px]` : tw`sm:min-w-[140px]`,
        ]}
      >
        {children}
      </Button>
    }
  >
    <Stack tw="gap-w4">
      <Stack tw="gap-0.5 -mt-1">
        <Text variant="title1" tw="text-label">
          Add data
        </Text>
        <Group tw="items-center justify-between">
          <Text variant="base" color="labelSecondary">
            To get started, choose an app
          </Text>
          {/* TODO: LEAVE FOR NOW, will reintroduce again next cycle */}
          <Text variant="note" color="labelTertiary">
            Don&apos;t find what you&apos;re looking for?{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={config.vanaSupportedAppsFeedback}
              onClick={() =>
                heapTrackServerSide(
                  userId,
                  HEAP_EVENTS.CLICK_REQUEST_NEW_DATA_SOURCE,
                )
              }
            >
              Request it.
            </Link>
          </Text>
        </Group>
      </Stack>
      <hr />
      <div tw="p-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-insetHalf">
        {modules?.map((module: Modules) => (
          <DataCardButton key={module.id} module={module} userId={userId} />
        ))}
      </div>
    </Stack>
  </DialogModal>
);

export { AddData };
