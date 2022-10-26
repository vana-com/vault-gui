import { Exhibit } from "./exhibit";

interface GalleryImage {
  title: string;
  category?: string;
  tags?: string[];
  src: string;
}

interface Gallery {
  userHash: string;
  exhibits: Exhibit[];
}

export type { Gallery, GalleryImage };
