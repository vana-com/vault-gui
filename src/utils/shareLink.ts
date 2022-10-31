import { copyToClipboard } from ".";

interface NavigatorData {
  title?: string;
  text?: string;
  url?: string;
  files?: File[] | any;
}

/**
 * Brings up a share context menu - primarily used on mobile devices
 * @param text
 * @param link
 * @returns
 */
const share = async (dataToShare: NavigatorData) => {
  try {
    if (
      window?.navigator?.canShare &&
      window?.navigator?.canShare(dataToShare)
    ) {
      await window.navigator.share(dataToShare);
      return;
    }

    // Fallback - copy link to clipboard instead
    console.error("Browser does not support sharing functionality");
    await copyToClipboard(dataToShare.url);
  } catch (error) {
    console.error(
      "Something went wrong while attempting the sharing flow:",
      error,
    );
    await copyToClipboard(dataToShare.url);
  }
};

const shareLink = async (text: string, url: string) => {
  const dataToShare: NavigatorData = {
    text,
    url,
  };
  share(dataToShare);
};

const shareImage = async (imageUrl?: string, filename?: string) => {
  if (imageUrl) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const fileToShare = new File([blob], filename || "image.png", {
      type: blob.type,
    });
    const dataToShare: NavigatorData = {
      title: filename,
      url: window.location.href,
      files: [fileToShare],
    };
    share(dataToShare);
  }
};
export { shareImage, shareLink };
