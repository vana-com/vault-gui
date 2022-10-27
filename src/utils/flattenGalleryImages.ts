import { Gallery } from "src/types";

// Flattens images in a gallery alternating by shuffling exhibit images together.
export const flattenGalleryImages = (
  gallery: Gallery,
  numImages: number,
): string[] => {
  try {
    const maxImagesInAnExhibit = Math.max(
      ...gallery.exhibits.map((exhibit) => exhibit.images.length),
    );
    const flattenedImages: string[] = [];

    for (let imageIndex = 0; imageIndex < maxImagesInAnExhibit; imageIndex++) {
      gallery.exhibits.forEach((exhibit) => {
        if (imageIndex + 1 <= exhibit.images.length) {
          flattenedImages.push(exhibit.images[imageIndex]);
        }
      });
    }

    flattenedImages.reverse();

    return flattenedImages.slice(0, numImages);
  } catch (error) {
    return gallery.exhibits[0].images;
  }
};
