import { useRouter } from "next/router";

import { useUserContext } from "src/components";
import { Children } from "src/types";

/* A component that only renders children if the user isAuthenticated */

const AuthenticatedComponent = ({ children }: Children) => {
  const router = useRouter();
  const { isAuthenticated } = useUserContext();

  // useEffect(() => {
  //   if (router.isReady && !isAuthenticated) {
  //     return undefined;
  //   }
  //   return <>{children}</>;
  // }, [isAuthenticated]);

  if (router.isReady && !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export { AuthenticatedComponent };
