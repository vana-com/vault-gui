import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from 'components'
import { MarkdownComponent } from 'components/MarkdownComponents'
import tw from 'twin.macro'
import { HELP_INFORMATION } from 'data'

const PopoverHelp = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghostSecondary">
          Need help?
        </Button>
      </PopoverTrigger>
      <PopoverContent tw="text-black bg-white">
        <PopoverArrow tw="fill-white" />
        <MarkdownComponent isNote>{HELP_INFORMATION}</MarkdownComponent>
      </PopoverContent>
    </Popover>
  )
}

export { PopoverHelp }
