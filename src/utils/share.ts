interface NavigatorData {
  title?: string;
  text?: string;
  link?: string;
  files?: File[] | any;
}

const _navigator = (): Navigator => {
  if (!window.navigator) throw new Error("No _navigator in current context");
  else return window.navigator;
};

const share = async (data: NavigatorData): Promise<boolean> => {
  console.log("Attempting to share data...");
  try {
    const nav = _navigator();

    // Make sure the client supports the data we want to send
    if (!nav.canShare(data))
      throw new Error("Could not share provided data type");

    await nav.share(data);
    return true;
  } catch (error) {
    console.log("Could not share data:", error);
    return false;
  }
};

export { share };
