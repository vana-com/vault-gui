import Image from "next/image";

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
  const dimensions = metastring?.match(/[0-9]+x[0-9]+/)?.[0]?.split("x"); // Matches image dimensions (ex: 111x222)
  const width = dimensions ? dimensions[0] : "768";
  const height = dimensions ? dimensions[1] : "432";
  const isPriority = !!metastring?.toLowerCase().match("{priority}");
  const hasCaption = metastring?.toLowerCase().includes("{caption:");
  const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

  return (
    <div className="pt-2 pb-2 text-[0]">
      <div className="border border-separatorLight">
        <Image
          src={image.properties.src}
          width={width}
          height={height}
          alt={alt}
          priority={isPriority}
        />
        {hasCaption ? (
          <div className="pt-1" aria-label={caption}>
            {caption}
          </div>
        ) : null}
      </div>
    </div>
  );
};
