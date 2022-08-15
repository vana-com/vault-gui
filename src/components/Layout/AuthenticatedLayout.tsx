import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutLoadingNoUser, useUserContext } from "src/components";
import { setLoginPath } from "src/utils";

interface Props {
  children?: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: Props) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUserContext();
  console.log(
    "AuthenticatedLayout",
    `isAuthenticated: ${isAuthenticated}`,
    `isLoading: ${isLoading}`,
  );

  if (isLoading) return <LayoutLoadingNoUser />;

  if (router.pathname !== "/login" && !isLoading && !isAuthenticated) {
    setTimeout(() => router.push(setLoginPath(router.asPath)), 250);
    return <LayoutLoadingNoUser />;
  }

  return <>{children}</>;
};

export { AuthenticatedLayout };
