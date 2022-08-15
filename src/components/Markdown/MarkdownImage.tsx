import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

/* Adapted from: https://github.com/amirardalan/amirardalan.com/blob/82387d88549d8793b2f057830524bfe047549602/components/Markdown.tsx#L196 */

interface MarkdownImageProps {
  image: {
    properties: {
      alt: string;
      src: string;
      priority: boolean;
    };
  };
}

export const MarkdownImage = ({ image }: MarkdownImageProps) => {
  const metastring = image?.properties?.alt;
  const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
  const metaWidth = metastring?.match(/{([^}]+)x/);
  const metaHeight = metastring?.match(/x([^}]+)}/);
  const width = metaWidth ? metaWidth[1] : "768";
  const height = metaHeight ? metaHeight[1] : "432";
  const isPriority = !!metastring?.toLowerCase().match("{priority}");
  const hasCaption = metastring?.toLowerCase().includes("{caption:");
  const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

  return (
    <div tw="pt-2 pb-2 text-[0]">
      <div tw="border border-separatorLight">
        <Image
          src={image.properties.src}
          width={width}
          height={height}
          alt={alt}
          priority={isPriority}
        />
        {hasCaption ? (
          <div tw="pt-1" aria-label={caption}>
            {caption}
          </div>
        ) : null}
      </div>
    </div>
  );
};
