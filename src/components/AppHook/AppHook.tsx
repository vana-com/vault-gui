import { useExpireJWTs } from "src/hooks";

// Run __app.tsx level hooks that need React Providers
const AppHook = ({ children }: any) => {
  useExpireJWTs();
  return children;
};

export { AppHook };
