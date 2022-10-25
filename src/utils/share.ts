interface NavigatorData {
  title: string;
  text: string;
  link?: string;
  files?: File[] | any;
}

const _navigator = (): Navigator => {
  if (navigator && navigator.canShare()) return navigator;
  throw new Error("Could not access navigator");
};

const share = async (data: NavigatorData): Promise<boolean> => {
  try {
    const nav = _navigator();
    await nav.share(data);

    return true;
  } catch (error) {
    console.log("Could not share data:", error);
    return false;
  }
};

export { share };
