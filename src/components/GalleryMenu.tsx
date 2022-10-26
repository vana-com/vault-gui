import { ArtCard } from "src/components";
import { ExhibitImage } from "src/types";

interface Props {
  images: ExhibitImage[];
  label: string;
}

/* Built to take a row of any number of images */

const GalleryMenu = ({ images, label }: Props) => (
  <div>
    <div className="w-full overflow-auto no-scrollbar">
      <div className="flex gap-1 w-[150%] snap-x overflow-x-auto">
        {images.map((exhibit) => (
          <div
            key={exhibit.src}
            className="snap-start first:ml-inset last:pr-inset"
          >
            <ArtCard
              key={exhibit.src}
              imageSrc={exhibit.src}
              imageAlt={exhibit.title}
              wrapperClassName="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
    <p className="pt-1.5 text-sm px-inset text-stone-500">{label}</p>
  </div>
);

export { GalleryMenu };
