import {
  Stack,
  Box,
  BoxProps,
  Flex,
  Text,
  TextProps,
  TextVariant,
  // Link,
  // LinkProps,
} from 'components'
import Markdown from 'react-markdown'
import tw from 'twin.macro'

/*
  A Markdown component using react-markdown
  See https://github.com/remarkjs/react-markdown

  Contains failing example use of :not() in Tailwind CSS
  `focus:not(:focus-visible):outline-none`
  `[&>:not(:first)]:mt-3`
*/

interface Props {
  children: string
  isNote?: boolean
  // textVariant?: TextVariant
  [key: string]: any
}

const MarkdownComponent = ({
  children,
  isNote,
  // textVariant,
  ...stackProps
}: Props) => (
  <div tw="flex flex-col gap-0.5" {...stackProps}>
    <Markdown
      components={{
        h1: props => (
          <Text
            as="h1"
            variant="title3"
            color="current"
            tw="mt-3 first:mt-0"
            {...props}
          />
        ),
        h2: props => (
          <Text
            as="h2"
            variant="title2"
            color="current"
            tw="mt-3 first:mt-0"
            {...props}
          />
        ),
        h3: props => (
          <Text
            as="h3"
            variant="title1"
            color="current"
            tw="mt-3 first:mt-0"
            {...props}
          />
        ),
        p: props => (
          <Text variant={isNote ? 'note' : 'body'} color="current" {...props} />
        ),
        // a: (props: LinkProps) => <Link underline {...props} />,
        ol: props => <ol tw="pl-3" {...props} />,
        ul: props => <ul tw="pl-3" {...props} />,
        li: ({ children, ...props }) => (
          <li tw="flex items-center" {...props}>
            <span tw="rounded inline-block mr-3 bg-current h-px w-4" />
            <Text
              variant={isNote ? 'note' : 'body'}
              weight="medium"
              color="current"
            >
              {children}
            </Text>
          </li>
        ),
      }}
      // plugins={[remarkBreaks]}
    >
      {children}
    </Markdown>
  </div>
)

export { MarkdownComponent }
