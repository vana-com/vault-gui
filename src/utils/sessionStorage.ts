const getSessionStorage = () => {
  if (window) {
    return window.sessionStorage;
  }
  return null;
};

const getSessionLocalItem = (key: string) =>
  getSessionStorage()?.getItem(key) ?? "";

const setSessionLocalItem = (key: string, value: string) =>
  getSessionStorage()?.setItem(key, value);

const removeSessionLocalItem = (key: string) =>
  getSessionStorage()?.removeItem(key);

export { getSessionLocalItem, removeSessionLocalItem, setSessionLocalItem };
