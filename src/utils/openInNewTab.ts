/**
 * Open link in a new tab using JavaScript.
 * This means we can chain it with other event functions and avoid
 * DOM issues on mobile if we use an HTML anchor tag with a JS event function.
 */
export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
