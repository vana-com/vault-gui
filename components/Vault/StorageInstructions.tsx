import {
  Flex,
  Text,
  TextProps,
  CarbonChevronDown,
  CarbonChevronUp,
  Button,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from 'components'
import { MarkdownComponent } from 'components/MarkdownComponents'
import { googleStoreInstructions } from 'data'
import { useState } from 'react'
import tw from 'twin.macro'

interface Props {
  moduleName: string
}

const StyledText = (props: TextProps) => (
  <Text variant="note" color="labelTertiary" {...props} />
)

const StorageInstructions = ({ moduleName }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} tw="py-3 cursor-pointer">
      <CollapsibleTrigger asChild>
        <Flex tw="items-center justify-between">
          <StyledText weight="semibold">
            Obtain your {moduleName} data first.{' '}
            <StyledText as="span" weight="normal">
              How do I do that?
            </StyledText>
          </StyledText>
          <Button variant="icon" size="icon" round tw="text-labelSecondary">
            {open ? <CarbonChevronUp /> : <CarbonChevronDown />}
          </Button>
        </Flex>
      </CollapsibleTrigger>

      <CollapsibleContent tw="pt-3 pb-6">
        <MarkdownComponent isNote stackProps={{ tw: 'text-labelTertiary' }}>
          {googleStoreInstructions}
        </MarkdownComponent>
      </CollapsibleContent>
    </Collapsible>
  )
}

export { StorageInstructions }
