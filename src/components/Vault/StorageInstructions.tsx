// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Markdown, MarkdownWrapper, Stack, Text } from "src/components";
import { ptBreadcrumbs } from "src/components/system/Styles";
import { INSTRUCTIONS_INFORMATION } from "src/data";
import { ModuleName } from "src/types";
import { renderModuleStoreInstructions } from "src/utils";

interface Props {
  moduleName: ModuleName;
}

const StorageInstructions = ({ moduleName }: Props) => (
  <Stack tw="gap-0">
    <Stack css={[tw`gap-1 p-inset bg-neutral`, ptBreadcrumbs]}>
      <Text variant="title1" tw="pb-1">
        Request your {moduleName} data in 5 minutes
      </Text>
      <MarkdownWrapper isNote tw="text-labelSecondary">
        <Markdown>{INSTRUCTIONS_INFORMATION}</Markdown>
      </MarkdownWrapper>
    </Stack>
    {/* <hr tw="border-labelQuaternary" /> */}
    <div tw="p-inset">
      <MarkdownWrapper isNote tw="text-label lg:w-11/12">
        <Markdown>{renderModuleStoreInstructions(moduleName)}</Markdown>
      </MarkdownWrapper>
    </div>
  </Stack>
);

export { StorageInstructions };
