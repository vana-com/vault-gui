import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DataCardButton,
  DialogModalAdd,
  Group,
  Stack,
  Text,
} from "src/components";
import { Module } from "src/types";

interface Props {
  modules: Module[] | undefined;
  children: React.ReactNode;
  buttonIsLarge?: boolean;
}

const AddData = ({ modules, children, buttonIsLarge }: Props) => (
  <DialogModalAdd
    buttonNode={
      <Button
        type="button"
        variant="solid"
        size={buttonIsLarge ? "xl" : "md"}
        prefix={<Icon icon="carbon:locked" height="1.125em" />}
        css={[
          tw`font-semibold ring-1 ring-inset ring-labelQuaternary`,
          buttonIsLarge ? tw`min-w-[280px]` : tw`min-w-[140px]`,
        ]}
      >
        {children}
      </Button>
    }
  >
    <Stack tw="gap-4">
      <Stack tw="gap-0.5 -mt-1">
        <Text variant="title1" tw="text-label">
          Add data
        </Text>
        <Group tw="items-center justify-between">
          <Text variant="base" color="labelSecondary">
            To get started, choose an app
          </Text>
          {/* LEAVE FOR NOW: Lauren wasnts to reintroduce this soon */}
          {/* <Text variant="note" color="labelTertiary">
            Don&apos;t see the app you want?{" "}
            <Link href={`mailto:${config.vanaSupportEmail}`}>Get in touch</Link>
          </Text> */}
        </Group>
      </Stack>
      <hr />
      <div tw="p-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-insetHalf">
        {modules?.map((module) => (
          <DataCardButton key={module.id} module={module} />
        ))}
      </div>
    </Stack>
  </DialogModalAdd>
);

export { AddData };
