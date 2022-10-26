import { ArtCard } from "src/components";
// import { ExhibitImage } from "src/types";

interface Props {
  // images: ExhibitImage[]; // layout takes 4 only!
  images: string[]; // layout takes 4 only!
  label: React.ReactNode;
  wrapperClassName?: string;
  showAsOriginal?: boolean;
}

/* Built to take 6 images (grid of 2 x 3) */

const GalleryGrid = ({
  images,
  label,
  wrapperClassName,
  showAsOriginal,
}: Props) => (
  <div className={wrapperClassName}>
    <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-md">
      {images.map((exhibit, index) => {
        const originalStyle = showAsOriginal && index === 0;
        return (
          <>
            {originalStyle ? (
              <div className="relative p-1.5 overflow-hidden bg-black">
                <ArtCard
                  key={exhibit}
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
                // key={exhibit.src}
                // imageSrc={exhibit.src}
                // imageAlt={exhibit.title}
                key={exhibit}
                imageSrc={exhibit}
                imageAlt={exhibit}
                wrapperClassName=""
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
