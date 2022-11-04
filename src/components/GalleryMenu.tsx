import clsx from "clsx";

import { ArtCard } from "src/components";

/* 
  GalleryMenu is built to take a row of any number of images. 

  NB! Explanation for first:md:ml-[calc((100vw-752px)/2)]:
  * 752 = 800 - 48 (the inset padding)
  * duplicating the Tailwind theme.maxWidth.container as it's easier to duplicate the string here rather than manage the difficulty of interpolation.
 */

interface Props {
  images: string[];
  label: string;
}

const GalleryMenu = ({ images, label }: Props) => (
  <div>
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-1 xl:gap-2 w-[210%] md:w-[150%] snap-x overflow-x-auto">
        {images.map((image, i) => (
          <div
            key={image}
            className={clsx(
              "snap-start first:ml-inset last:pr-inset",
              "first:md:ml-[calc((100vw-752px)/2)]",
            )}
          >
            <ArtCard
              key={image}
              imageSrc={image}
              imageAlt={`image ${i}`}
              size={340}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="Container">
      <p
        className={clsx(
          "pt-1.5 text-sm text-stone-500",
          // "md:pl-[max(0px,calc((100vw-840px)/2))]",
        )}
      >
        {label}
      </p>
    </div>
  </div>
);

export { GalleryMenu };
