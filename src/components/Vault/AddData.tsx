import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  ButtonSize,
  DataCardButton,
  DialogModalAdd,
  Group,
  Link,
  Stack,
  Text,
} from "src/components";
import config from "src/config";
import { Module } from "src/types";

interface Props {
  // buttonSize: ButtonSize | undefined;
  // buttonSize?: string;
  modules: Module[] | undefined;
  children: React.ReactNode;
  buttonIsLarge?: boolean;
}

const styles = ({ buttonSize }: { buttonSize: ButtonSize | undefined }) => [
  buttonSize === "full"
    ? tw`h-[260px] bg-[#f2f2f2] rounded-2xl`
    : tw`bg-primarys-60 bg-opacity-10 ring-1 ring-inset ring-labelQuaternary min-w-[140px]`,
];

const AddData = ({ modules, children, buttonIsLarge }: Props) => (
  <DialogModalAdd
    buttonNode={
      // <Button
      //   size={buttonSize}
      //   variant="solid"
      //   css={styles({ buttonSize })}
      //   tw="font-semibold"
      //   prefix={
      //     <Icon
      //       icon="heroicons-solid:plus-circle"
      //       height={buttonSize === "full" ? "1.5em" : "1em"}
      //     />
      //   }
      // >
      //   Add data
      // </Button>
      // heroicons-solid:plus-circle
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
        <Text variant="title1">Add data</Text>
        <Group tw="items-center justify-between">
          <Text variant="base" color="labelSecondary">
            To get started, choose an app
          </Text>
          <Text variant="note" color="labelTertiary">
            Don&apos;t see the app you want?{" "}
            <Link href={`mailto:${config.vanaSupportEmail}`}>Get in touch</Link>
          </Text>
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
