import clsx from "clsx";
import { useEffect, useState } from "react";

import { gallery } from "src/data";

import RotatingImage from "./RotatingImage";

const CanvasGrid = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 0);
  }, []);

  return (
    <>
      {gallery.map((img, index) => (
        <div
          key={img.src}
          className={clsx(
            `relative transform transition h-full`,
            "transition-opacity duration-1000 ease-in-out",
            imagesLoaded ? "opacity-100" : "opacity-0",
            // index === 0 && "opacity-100",
          )}
          style={{
            transition: `opacity ease-in-out ${index * 100}ms`,
          }}
        >
          <RotatingImage src={img.src} />
        </div>
      ))}
    </>
  );
};

export { CanvasGrid };
