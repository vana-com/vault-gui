import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

import {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  web3AuthAdapterAtom,
  web3AuthUserInfoAtom,
} from "src/state";
import { logOut, parseJwt } from "src/utils";

const useExpireJWTs = () => {
  const router = useRouter();

  const [, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [, setUser] = useAtom(userAtom);
  const [idToken, setIdToken] = useAtom(idTokenAtom);
  const [, setHasuraToken] = useAtom(hasuraTokenAtom);
  const [, setWalletProvider] = useAtom(web3AuthAdapterAtom);

  const expireJWTs = async () => {
    if (idToken) {
      const idTokenPayload = await parseJwt(idToken);
      const now = new Date();
      const expireDate = new Date(idTokenPayload.exp * 1000);
      if (now > expireDate) {
        logOut(
          setWalletProvider,
          setWeb3AuthUserInfo,
          setUser,
          setHasuraToken,
          setIdToken,
        );
        router.push("/");
      }
    }
  };

  useEffect(() => {
    expireJWTs();
  }, [router.asPath]);
  return null;
};

export { useExpireJWTs };
