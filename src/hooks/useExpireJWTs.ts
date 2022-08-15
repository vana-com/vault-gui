import { useRouter } from "next/router";
import { useEffect } from "react";

import { useUserContext } from "src/components/UserAccess/UserContext";
import { getJwtPayload } from "src/utils";

const useExpireJWTs = () => {
  const router = useRouter();
  const { hasuraToken, logoutUser } = useUserContext();

  const expireJWTs = async () => {
    if (hasuraToken) {
      const hasuraTokenPayload = await getJwtPayload(hasuraToken);
      const now = new Date();
      const expireDate = new Date(hasuraTokenPayload.exp * 1000);
      if (now > expireDate) {
        await logoutUser();
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    expireJWTs();
  }, [router.asPath]);
  return null;
};

export { useExpireJWTs };
