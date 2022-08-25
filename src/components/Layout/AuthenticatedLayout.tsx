import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutLoadingNoUser, useUserContext } from "src/components";
import { Children } from "src/types";
import { setLoginPath } from "src/utils";

/* 
  A component that only renders children if the user isAuthenticated and is not the Login page 
 */

const AuthenticatedLayout = ({ children }: Children) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUserContext();

  if (isLoading) return <LayoutLoadingNoUser />;

  if (
    router.isReady &&
    router.pathname !== "/login" &&
    !isLoading &&
    !isAuthenticated
  ) {
    setTimeout(() => router.push(setLoginPath(router.asPath)), 250);
    return <LayoutLoadingNoUser />;
  }

  return <>{children}</>;
};

export { AuthenticatedLayout };
