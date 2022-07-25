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

import { Button } from "src/components";
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

const Login = () => {
  const [web3AuthUserInfo, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [user, setUser] = useAtom(userAtom);
  const setHasuraToken = useAtom(hasuraTokenAtom)[1];
  const setWalletProvider = useAtom(web3AuthWalletProviderAtom)[1];
  const [walletAdapter, setWalletAdapter] = useAtom(web3AuthAdapterAtom);
  const [idToken, setIdToken] = useAtom(idTokenAtom);
  const [isLoading, setIsLoading] = useState(false);

  // get Hasura user object
  useEffect(() => {
    const loginUser = async () => {
      const loginResponse = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken, issuer: walletAdapter }),
      });

      const { user: userFromResponse, hasuraToken } =
        await loginResponse.json();

      console.log("userFromResponse", userFromResponse);

      setUser(userFromResponse);
      setHasuraToken(hasuraToken);
    };

    if (!user && web3AuthUserInfo) {
      loginUser();
    }
  }, [user, web3AuthUserInfo]);

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
    setIsLoading(true);
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    try {
      const web3AuthProvider = await web3AuthInstance.connect();
      setWalletProvider(web3AuthProvider);
    } catch (error: any) {
      console.log(error.toString());
    }
  };

  return (
    <Button
      type="button"
      variant="solid"
      size="xl"
      css={tw`min-w-[155px]`}
      isLoading={isLoading}
      onClick={logIn}
    >
      Log In
    </Button>
  );
};

export { Login };
