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
import { tw } from 'twind'

/*
  Using react-markdown
  See https://github.com/remarkjs/react-markdown
*/

interface Props {
  children: string
  isNote?: boolean
  // textVariant?: TextVariant
  stackProps?: BoxProps
}

const MarkdownComponent = ({
  children,
  isNote,
  // textVariant,
  stackProps,
}: Props) => (
  <Stack className={tw('gap-0.5')} {...stackProps}>
    <Markdown
      components={{
        h1: (props: TextProps) => (
          <Text as="h1" variant="title" className={tw('mt-3')} {...props} />
        ),
        h2: (props: TextProps) => (
          <Text as="h2" variant="title" className={tw('mt-3')} {...props} />
        ),
        h3: (props: TextProps) => (
          <Text as="h3" variant="title" className={tw('mt-3')} {...props} />
        ),
        p: (props: TextProps) => (
          <Text
            variant={isNote ? 'note' : 'body'}
            className={tw('text-current')}
            {...props}
          />
        ),
        // a: (props: LinkProps) => <Link underline {...props} />,
        ol: (props: BoxProps) => (
          <Box as="ol" className={tw('pl-3')} {...props} />
        ),
        ul: (props: BoxProps) => (
          <Box as="ul" className={tw('pl-3')} {...props} />
        ),
        li: ({ children, ...props }) => (
          <Flex as="li" className={tw('items-center')} {...props}>
            <Box
              as="span"
              className={tw('rounded inline-block mr-3 bg-current h-1 w-5')}
            />
            <Text
              variant={isNote ? 'note' : 'body'}
              weight="medium"
              className={tw('text-current')}
            >
              {children}
            </Text>
          </Flex>
        ),
      }}
      // plugins={[remarkBreaks]}
    >
      {children}
    </Markdown>
  </Stack>
)

export { MarkdownComponent }
