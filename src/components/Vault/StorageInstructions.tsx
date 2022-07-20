import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  CarbonChevronDown,
  CarbonChevronUp,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Flex,
  Text,
  TextProps,
} from "src/components";
import { MarkdownComponent } from "src/components/MarkdownComponents";
import { googleStoreInstructions } from "src/data";

interface Props {
  moduleName: string;
}

const StyledText = (props: TextProps) => (
  <Text variant="note" color="labelSecondary" {...props} />
);

const StorageInstructions = ({ moduleName }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} tw="py-3 cursor-pointer">
      <CollapsibleTrigger asChild>
        <Flex tw="items-center justify-between">
          <StyledText weight="semibold">
            Obtain your {moduleName} data first.{" "}
            <StyledText as="span" weight="normal">
              How do I do that?
            </StyledText>
          </StyledText>
          <Button variant="icon" round tw="text-labelSecondary">
            {open ? <CarbonChevronUp /> : <CarbonChevronDown />}
          </Button>
        </Flex>
      </CollapsibleTrigger>

      <CollapsibleContent tw="pt-3 pb-6">
        <MarkdownComponent isNote stackProps={{ tw: "text-labelTertiary" }}>
          {googleStoreInstructions}
        </MarkdownComponent>
      </CollapsibleContent>
    </Collapsible>
  );
};

export { StorageInstructions };
