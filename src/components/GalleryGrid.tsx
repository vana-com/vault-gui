import clsx from "clsx";

import { ArtCard } from "src/components";
// import { ExhibitImage } from "src/types";

interface Props {
  // images: ExhibitImage[]; // layout takes 4 only!
  images: string[];
  label: React.ReactNode;
  gridCols: number;
  wrapperClassName?: string;
  showAsOriginal?: boolean;
}

/* Built as a 3 column grid */

const GalleryGrid = ({
  images,
  label,
  wrapperClassName,
  gridCols = 3,
  showAsOriginal,
}: Props) => (
  <div className={wrapperClassName}>
    <div
      className={clsx(
        "grid",
        gridCols === 3 && "grid-cols-3",
        gridCols === 4 && "grid-cols-4",
        gridCols === 5 && "grid-cols-5",
        gridCols === 6 && "grid-cols-6",
        "gap-1",
        "overflow-hidden",
        "rounded-[6px]",
      )}
    >
      {images.map((exhibit, index) => {
        const originalStyle = showAsOriginal && index === 0;
        return (
          <>
            {originalStyle ? (
              <div
                key={exhibit}
                className="relative p-1.5 overflow-hidden bg-black"
              >
                <ArtCard
                  imageSrc={exhibit}
                  imageAlt={exhibit}
                  wrapperClassName="!bg-transparent"
                  imageClassName="rounded-tl-[2px] transform scale-[1.075]"
                />
                <div className="absolute bottom-0 w-full py-[4px] text-xs text-white bg-black uppercase text-[8px] tracking-widest">
                  Original
                </div>
              </div>
            ) : (
              <ArtCard
                key={exhibit}
                imageSrc={exhibit}
                imageAlt={exhibit}
                wrapperClassName="" // purposely remove default w/ empty string
                imageClassName="transform scale-[1.075]"
              />
            )}
          </>
        );
      })}
    </div>

    {label}
  </div>
);

export { GalleryGrid };
