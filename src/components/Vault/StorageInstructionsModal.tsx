import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

import {
  Button,
  DialogModalAdd,
  Markdown,
  MarkdownWrapper,
  Stack,
  Text,
} from "src/components";
import { ModuleName } from "src/types";
import { renderModuleStoreInstructions } from "src/utils";

interface Props {
  moduleName: ModuleName;
}

const StorageInstructionsModal = ({ moduleName }: Props) => (
  <DialogModalAdd
    buttonSlot={
      <Button
        size="md"
        variant="outline"
        prefix={<Icon icon="heroicons-solid:clipboard-check" height="1em" />}
      >
        10 minute instructions
        {/* Get your {moduleName} data */}
      </Button>
    }
  >
    <div tw="flex flex-col gap-4">
      <Stack tw="gap-0.5 -mt-1">
        <Text variant="title1">Get your {moduleName} data</Text>
        <Text variant="base" color="labelTertiary">
          While {moduleName} may say it takes 48 hours, it usually takes around
          10 minutes to receive their email with a data link.
        </Text>
      </Stack>
      <hr />
      <div tw="pt-insetHalf">
        <MarkdownWrapper isNote tw="text-label">
          <Markdown>{renderModuleStoreInstructions(moduleName)}</Markdown>
        </MarkdownWrapper>
      </div>
    </div>
  </DialogModalAdd>
);

export { StorageInstructionsModal };
