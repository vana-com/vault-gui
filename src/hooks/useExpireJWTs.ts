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
import { getIdTokenPayload, logOut } from "src/utils";

const useExpireJWTs = () => {
  const router = useRouter();

  const [, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [, setUser] = useAtom(userAtom);
  const [idToken, setIdToken] = useAtom(idTokenAtom);
  const [, setHasuraToken] = useAtom(hasuraTokenAtom);
  const [, setWalletProvider] = useAtom(web3AuthAdapterAtom);

  useEffect(() => {
    if (idToken) {
      const idTokenPayload = getIdTokenPayload(idToken);
      if (!idTokenPayload) {
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
  }, []);
  return null;
};

export { useExpireJWTs };
