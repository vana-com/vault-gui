import { useRouter } from "next/router";

export const setLoginPath = () => {
  const router = useRouter();
  const addOrigin = router.asPath !== "/";

  return addOrigin
    ? `/login/?origin=${encodeURIComponent(router.asPath)}`
    : "/login";
};
