import { Gallery } from "src/types";

export const flattenGalleryImages = (gallery: Gallery): string[] => {
  const { exhibits } = gallery;
  const images = exhibits.map((exhibit) => exhibit.images[0]);

  return images;

  // if (images.length > 6) {
  //   return images.slice(0, 6);
  // } else if (images.length === 6) {
  //   return images;
  // } else {
  //   exhibits.slice(1, Math.min(5, exhibits.images[0]))
  // }
  // const images = gallery.images.map((image) => ({
  //   ...image,
  //   gallery: gallery.name,
  // }));

  // return images;
};
