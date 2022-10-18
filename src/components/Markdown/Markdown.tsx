import NextLink from "next/link";
import ReactMarkdown from "react-markdown";

import { Link, MarkdownImage } from "src/components";

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

      return <p>{paragraph.children}</p>;
    },
    li: (li: { children?: boolean }) => (
      <li className="flex items-start">
        <div className="rounded mr-3 bg-current h-[6px] w-[6px] transform translate-y-[0.55em]" />
        {/* ReactMarkdown will always render a p tag at li.children */}
        <div className="flex-1">{li.children}</div>
      </li>
    ),
    ol: (ol: { children?: boolean }) => (
      <ol className="pl-3 flex flex-col gap-0.5">{ol.children}</ol>
    ),
    ul: (ul: { children?: boolean }) => (
      <ul className="pl-3 flex flex-col gap-0.5">{ul.children}</ul>
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
      // variant="title1"
      // eslint-disable-next-line jsx-a11y/heading-has-content
      <h3 className="mt-3 text-current first:mt-0" {...props} />
    ),
  };

  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  );
};
