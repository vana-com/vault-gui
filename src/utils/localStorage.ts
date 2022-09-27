const getStorage = () => {
  if (window) {
    return window.localStorage;
  }
  return null;
};

const getLocalItem = (key: string) => getStorage()?.getItem(key) ?? "";

const setLocalItem = (key: string, value: string) =>
  getStorage()?.setItem(key, value);

const removeLocalItem = (key: string) => getStorage()?.removeItem(key);

export { getLocalItem, removeLocalItem, setLocalItem };
