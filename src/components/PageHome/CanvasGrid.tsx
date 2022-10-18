import NextImage from "next/future/image";

import { gallery } from "src/data";

const CanvasGrid = () => (
  <>
    {gallery.map((img) => (
      <div key={img.src} className="relative overflow-hidden aspect-square">
        <NextImage
          priority
          className="absolute inset-0 object-cover w-full h-auto transform scale-105"
          src={img.src}
          alt={img.title}
          height={1000}
          width={1000}
        />
      </div>
    ))}
  </>
);

export { CanvasGrid };
