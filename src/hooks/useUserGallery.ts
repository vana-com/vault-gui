import {
  getSessionLocalItem,
  removeSessionLocalItem,
  setSessionLocalItem,
} from "src/utils/sessionStorage";

const EXPIRY_IN_MINUTES = 15;

interface Exhibit {
  name: string;
  updatedAt: string;
  images: string[];
}

interface Gallery {
  userHash: string;
  errorMessage: string;
  exhibits: Exhibit[];
}

interface UserGalleryCacheEntry {
  gallery: Gallery;
  expiry: number;
}

const useUserGalleryCache = (userId: string): Gallery | false => {
  const cache = getSessionLocalItem(userId);

  // Cache: Miss
  if (!cache) return false;

  // Make the object useful
  const { gallery, expiry } =
    (JSON.parse(cache) as UserGalleryCacheEntry) ?? {};

  // Cache: Invalid obj
  if (!gallery || !expiry) return false;

  // Cache: Expired
  if (Date.now() >= expiry) return false;

  // Everything checks out so we can return the ENTIRE cache
  return gallery;
};

const useUserGalleryPartialCache = (
  userId: string,
  exhibit: string,
): Exhibit | false => {
  const gallery = useUserGalleryCache(userId);

  // Make sure there is a gallery cache & Make sure the user is not dumb and actually passed in a valid exhibit
  if (!gallery || !exhibit) return false;

  // If an exhibit key is passed, then only return that specific portion of the cache
  const portion = gallery.exhibits.find(
    ({ name }) => name?.toLowerCase() === exhibit?.toLowerCase(),
  );

  // Somehow if there is no match then just say the cache is invalid
  if (!portion) return false;

  // Match found so return the subportion of the cache
  return portion;
};

const writeUserGalleryCache = (userId: string, gallery: Gallery) => {
  // Invalidate old cache (aka storage) just incase
  removeSessionLocalItem(userId);

  const now = Date.now();
  const expiry = new Date(now + 60000 * EXPIRY_IN_MINUTES).valueOf();

  const entry: UserGalleryCacheEntry = {
    gallery,
    expiry,
  };

  setSessionLocalItem(userId, JSON.stringify(entry));
};

export {
  useUserGalleryCache,
  useUserGalleryPartialCache,
  writeUserGalleryCache,
};
