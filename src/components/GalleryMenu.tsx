import { ArtCard } from "src/components";
import { ExhibitImage } from "src/types";

interface Props {
  images: ExhibitImage[]; // layout takes 4 only!
  label: string;
}

const GalleryMenu = ({ images, label }: Props) => (
  <div>
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-1 w-[150%]">
        {images.map((exhibit) => (
          <div key={exhibit.src} className="first:ml-inset last:pr-inset">
            <ArtCard
              key={exhibit.src}
              imageSrc={exhibit.src}
              imageAlt={exhibit.title}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
    <p className="pt-1.5 text-sm px-inset text-stone-500">{label}</p>
  </div>
);

export { GalleryMenu };
