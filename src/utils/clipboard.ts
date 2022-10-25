const CLIPBOARD_PERMISSION = "clipboard-write" as PermissionName;

const _navigator = () => {
  if (!navigator) throw new Error("No _navigator in current context");
  else return navigator;
};

const checkPermission = async (): Promise<boolean> => {
  try {
    const nav = _navigator();
    const { state } = await nav.permissions.query({
      name: CLIPBOARD_PERMISSION,
    });

    return state === "granted" || state === "prompt";
  } catch (err) {
    console.log("checkPermission():", err);
  }

  // Assume permission_not_granted if there is a failure
  return false;
};

const copyToClipboard = async (textToWrite: string): Promise<boolean> => {
  const hasPermission = await checkPermission();
  if (!hasPermission) throw new Error("No permission granted");
  if (!textToWrite) throw new Error("No text provided");

  try {
    const nav = _navigator();
    await nav.clipboard.writeText(textToWrite);
    return true;
  } catch (err) {
    throw new Error("Copying text to clipboard failed");
  }
};

export { copyToClipboard };
