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
        if (exhibit.images.length <= imageIndex + 1) {
          flattenedImages.push(exhibit.images[imageIndex]);
        }
      });
    }

    return flattenedImages.slice(0, numImages - 1);
  } catch (error) {
    return gallery.exhibits[0].images;
  }
};
