import {
  Text,
  // Link,
  // LinkProps,
} from "components";
import Markdown from "react-markdown";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

/*
  A Markdown component using react-markdown
  See https://github.com/remarkjs/react-markdown

  Contains failing example use of :not() in Tailwind CSS
  `focus:not(:focus-visible):outline-none`
  `[&>:not(:first)]:mt-3`
*/

interface Props {
  children: string;
  isNote?: boolean;
  // textVariant?: TextVariant
  [key: string]: any;
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
        h1: (props) => (
          <Text
            as="h1"
            variant="title3"
            tw="mt-3 first:mt-0"
            {...props}
            color="current"
          />
        ),
        h2: (props) => (
          <Text
            as="h2"
            variant="title2"
            tw="mt-3 first:mt-0"
            {...props}
            color="current"
          />
        ),
        h3: (props) => (
          <Text
            as="h3"
            variant="title1"
            tw="mt-3 first:mt-0"
            {...props}
            color="current"
          />
        ),
        p: (props) => (
          <Text variant={isNote ? "note" : "body"} {...props} color="current" />
        ),
        // a: (props: LinkProps) => <Link underline {...props} />,
        ol: (props) => <ol tw="pl-3" {...props} />,
        ul: (props) => <ul tw="pl-3" {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        li: ({ children, ...props }) => (
          <li tw="flex items-center" {...props}>
            <span tw="rounded inline-block mr-3 bg-current h-px w-4" />
            <Text
              variant={isNote ? "note" : "body"}
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
);

export { MarkdownComponent };
