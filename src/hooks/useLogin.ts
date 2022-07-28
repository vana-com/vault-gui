import {
  ADAPTER_EVENTS,
  CONNECTED_EVENT_DATA,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { Web3Auth } from "@web3auth/web3auth";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import config from "src/config";
import {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  web3AuthAdapterAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
} from "src/state";

const { openLoginModalConfig, web3AuthInstance } = config;

const useLogin = () => {
  const [web3AuthUserInfo, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [user, setUser] = useAtom(userAtom);
  const setHasuraToken = useAtom(hasuraTokenAtom)[1];
  const setWalletProvider = useAtom(web3AuthWalletProviderAtom)[1];
  const [walletAdapter, setWalletAdapter] = useAtom(web3AuthAdapterAtom);
  const [idToken, setIdToken] = useAtom(idTokenAtom);
  const [loginError, setLoginError] = useState(false);

  // after a user has logged in with Web3Auth, this useEffect hook gets their auth information from the database
  useEffect(() => {
    const loginVanaUser = async () => {
      try {
        const loginResponse = await fetch(`/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idToken, issuer: walletAdapter }),
        });
        const { user: userFromResponse, hasuraToken } =
          await loginResponse.json();

        if (!userFromResponse || !hasuraToken) {
          setLoginError(true);
        }
        setUser(userFromResponse);
        setHasuraToken(hasuraToken);
      } catch (error: any) {
        console.log(error.toString());
        setLoginError(true);
      }
    };

    if (!user && web3AuthUserInfo) {
      loginVanaUser();
    }
  }, [user, web3AuthUserInfo]);

  // subscribe to web3Auth events
  useEffect(() => {
    const subscribeAuthEvents = (web3Auth: Web3Auth) => {
      // Subscribe to ADAPTER_EVENTS. Additional ADAPTER_EVENTS and LOGIN_MODAL_EVENTS exist.
      web3Auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
        web3Auth.getUserInfo().then((userInfo) => {
          setWeb3AuthUserInfo(userInfo);
          setIdToken(userInfo.idToken);
        });
        setWalletAdapter(data.adapter);
        setWalletProvider(web3Auth.provider ? web3Auth.provider : undefined);
      });

      web3Auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("adapter connecting");
      });

      web3Auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("adapter disconnected");
      });

      web3Auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error(
          "adapter error or user has cancelled login request",
          error,
        );
      });
    };

    if (web3AuthInstance) {
      // TODO: Make sure event listeners are not added multiple times
      subscribeAuthEvents(web3AuthInstance);
      if (web3AuthInstance.status !== "connected") {
        web3AuthInstance.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: openLoginModalConfig,
          },
        });
      }
    } else {
      console.log("unable to login with Web3Auth");
    }
  }, []);

  const logIn = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    try {
      const web3AuthProvider = await web3AuthInstance.connect();
      setWalletProvider(web3AuthProvider);
    } catch (error: any) {
      console.log(error.toString());
      setLoginError(true);
    }
  };

  return {
    logIn,
    setLoginError,
    loginError,
  };
};

export { useLogin };
