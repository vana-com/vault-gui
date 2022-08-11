import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutLoading, useUserContext } from "src/components";

interface Props {
  children?: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, isLoading } = useUserContext();

  if (isLoading) return <LayoutLoading />;

  const addOrigin = router.asPath !== "/";

  const loginPath = addOrigin
    ? `/login/?origin=${encodeURIComponent(router.asPath)}`
    : "/login";

  if (!user) {
    router.push(loginPath);
  }

  // must be wrapped in a React.Fragment
  return <>{children}</>;
};

export { AuthenticatedLayout };
