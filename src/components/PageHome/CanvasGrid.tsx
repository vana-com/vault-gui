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
          className={`relative transform transition h-full opacity-${
            imagesLoaded ? 1 : 0
          }`}
          style={{
            transition: `opacity 1000ms ease ${index * 100}ms`,
          }}
        >
          <RotatingImage src={img.src} />
        </div>
      ))}
    </>
  );
};

export { CanvasGrid };
