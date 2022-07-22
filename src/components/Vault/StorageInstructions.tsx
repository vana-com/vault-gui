import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

import {
  Button,
  CarbonChevronDown,
  CarbonChevronUp,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Flex,
  Markdown,
  MarkdownWrapper,
  Text,
} from "src/components";
import { ModuleName } from "src/types";
import { renderModuleStoreInstructions } from "src/utils";

interface Props {
  moduleName: ModuleName;
}

const StorageInstructions = ({ moduleName }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} tw="py-3 cursor-pointer">
      <CollapsibleTrigger asChild>
        <Flex tw="items-center justify-between">
          <Text variant="note" weight="semibold" color="labelSecondary">
            Obtain your {moduleName} data first.{" "}
            <Text as="span" weight="normal">
              How do I do that?
            </Text>
          </Text>
          <Button variant="icon" round tw="text-labelSecondary">
            {open ? <CarbonChevronUp /> : <CarbonChevronDown />}
          </Button>
        </Flex>
      </CollapsibleTrigger>

      <CollapsibleContent tw="pt-3 pb-6">
        <MarkdownWrapper isNote tw="text-labelSecondary">
          <Markdown>{renderModuleStoreInstructions(moduleName)}</Markdown>
        </MarkdownWrapper>
      </CollapsibleContent>
    </Collapsible>
  );
};

export { StorageInstructions };
