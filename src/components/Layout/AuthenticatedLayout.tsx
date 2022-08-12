import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutLoading, useUserContext } from "src/components";
import { setLoginPath } from "src/utils";

interface Props {
  children?: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: Props) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUserContext();

  if (isLoading) return <LayoutLoading showAside={false} />;

  if (router.pathname !== "/login" && !isAuthenticated) {
    setTimeout(() => router.push(setLoginPath(router.asPath)), 250);
    return <LayoutLoading showAside={false} />;
  }

  // must be wrapped in a React.Fragment
  return <>{children}</>;
};

export { AuthenticatedLayout };
