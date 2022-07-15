import { Button, Popover, PopoverContent, PopoverTrigger } from 'components'
import { MarkdownComponent } from 'components/MarkdownComponents'
import { tw, apply } from 'twind'
import { HELP_INFORMATION } from 'data'

// marginLeft="2"
// shape="base"
// size="s"
// variant="ghostTertiary"
// style={{
//   fontWeight: 400,
//   // match to lineHeight of text variant="note"
//   height: '18px',
//   padding: 0,
// }}

const PopoverHelp = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" className={tw('ml-1')}>
          Need help?
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <MarkdownComponent isNote>{HELP_INFORMATION}</MarkdownComponent>
      </PopoverContent>
    </Popover>
  )
}

export { PopoverHelp }
