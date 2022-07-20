import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import {
  ADAPTER_EVENTS,
  WALLET_ADAPTERS,
  SafeEventEmitterProvider,
  UserInfo,
} from "@web3auth/base";

import config from "../config/web3auth";
const web3AuthInstance = config.web3AuthInstance;

const Login = () => {
  // TODO: Move web3auth and provider to global context
  const [walletProvider, setWalletProvider] =
    useState<SafeEventEmitterProvider | null>(null);
  const [user, setUser] = useState<Partial<UserInfo> | null>(null);

  useEffect(() => {
    const subscribeAuthEvents = (web3Auth: Web3Auth) => {
      // Subscribe to ADAPTER_EVENTS. Additional ADAPTER_EVENTS and LOGIN_MODAL_EVENTS exist.
      web3Auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("adapter successfully logged in", data);
        web3Auth.getUserInfo().then((userInfo) => setUser(userInfo));
        setWalletProvider(web3Auth.provider!);
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
            [WALLET_ADAPTERS.OPENLOGIN]: config.openLoginModalConfig,
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
    }
  };

  const logOut = async () => {
    if (!web3AuthInstance || web3AuthInstance.status === "not_ready") {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3AuthInstance.logout();
    setWalletProvider(null);
    setUser(null);
  };

  return (
    <>
      {user ? (
        <button onClick={logOut}>Log Out</button>
      ) : (
        <button onClick={logIn}>Log In</button>
      )}
    </>
  );
};

export default Login;
