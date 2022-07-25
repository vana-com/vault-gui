import { useExpireJWTs } from "src/hooks";

// Run __app.tsx level hooks that need React Providers
const AppHook = () => {
  useExpireJWTs();
  return null;
};

export { AppHook };
