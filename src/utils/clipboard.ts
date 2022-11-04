const CLIPBOARD_PERMISSION = "clipboard-write" as PermissionName;

// FIXME: Note that this won't work in Firefox browser, consider using another method https://bugzilla.mozilla.org/show_bug.cgi?id=1560373
const copyToClipboard = async (textToWrite?: string): Promise<boolean> => {
  if (window?.navigator) {
    try {
      const { state } = await window.navigator.permissions.query({
        name: CLIPBOARD_PERMISSION,
      });
      const hasPermission = state === "granted" || state === "prompt";

      if (hasPermission && textToWrite) {
        await window.navigator.clipboard.writeText(textToWrite);
        return true;
      }

      console.error(
        "Unable to copy text to clipboard, permission denied or no text provided",
      );
      return false;
    } catch (err) {
      console.error("Copying text to clipboard failed");
      return false;
    }
  }

  console.error("No window.navigator in current context");
  return false;
};

export { copyToClipboard };
