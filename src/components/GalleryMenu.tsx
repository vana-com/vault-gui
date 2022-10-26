import { ArtCard } from "src/components";

interface Props {
  images: string[]; // layout takes 4 only!
  label: string;
}

/* Built to take a row of any number of images */

const GalleryMenu = ({ images, label }: Props) => (
  <div>
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-1 w-[150%] snap-x overflow-x-auto">
        {images.map((image, i) => (
          <div key={image} className="snap-start first:ml-inset last:pr-inset">
            <ArtCard
              key={image}
              imageSrc={image}
              imageAlt={`image ${i}`}
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
