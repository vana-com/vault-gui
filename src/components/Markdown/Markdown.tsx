import NextLink from "next/link";
import ReactMarkdown from "react-markdown";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Link, MarkdownImage, Text } from "src/components";

/* 
  TODO LATER: 
  * https://amirardalan.com/blog/copy-code-to-clipboard-with-react-markdown
 */

export const Markdown = ({ children }: { children: string }) => {
  const MarkdownComponents: object = {
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node?.children[0];
        return <MarkdownImage image={image} />;
      }

      return <Text as="p">{paragraph.children}</Text>;
    },
    li: (li: { children?: boolean }) => (
      <li tw="flex items-start">
        <div tw="rounded mr-2 bg-current h-px w-5 transform translate-y-[0.7em]" />
        {/* ReactMarkdown will always render a p tag at li.children */}
        <div tw="flex-1">{li.children}</div>
      </li>
    ),
    ol: (ol: { children?: boolean }) => (
      <ol tw="pl-3 flex flex-col gap-0.5">{ol.children}</ol>
    ),
    ul: (ul: { children?: boolean }) => (
      <ul tw="pl-3 flex flex-col gap-0.5">{ul.children}</ul>
    ),
    a: (anchor: { href: string; children: Array<any> }) => {
      if (anchor.href.match("http")) {
        return (
          <Link
            underline
            href={anchor.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {anchor.children}
          </Link>
        );
      }
      return (
        <NextLink href={anchor.href} passHref>
          <Link underline href={anchor.href}>
            {anchor.children}
          </Link>
        </NextLink>
      );
    },
    h3: (props: any) => (
      <Text
        as="h3"
        variant="title1"
        tw="mt-3 first:mt-0"
        {...props}
        color="current"
      />
    ),
  };

  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  );
};
