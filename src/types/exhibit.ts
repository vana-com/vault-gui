interface Exhibit {
  name: string;
  images: string[];
  updatedAt: string;
}

// TODO: this is still to be defined enough to be used with Exhibit. For now, it's used with our pseudo-Galleries via src/data.

interface ExhibitImage {
  title: string;
  category?: string;
  tags?: string[];
  src: string;
}

export type { Exhibit, ExhibitImage };
