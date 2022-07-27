import {
  ADAPTER_EVENTS,
  ADAPTER_STATUS,
  CONNECTED_EVENT_DATA,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { Web3Auth } from "@web3auth/web3auth";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Link } from "src/components";
import { ToastDefault } from "src/components/Toast";
import config from "src/config";
import {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  userWalletAddressAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
} from "src/state";
import { getWalletProvider } from "src/utils/identity/walletProvider";

const { openLoginModalConfig, web3AuthInstance } = config;

const Login = () => {
  const [web3AuthUserInfo, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [user, setUser] = useAtom(userAtom);
  const [userWalletAddress, setUserWalletAddress] = useAtom(
    userWalletAddressAtom,
  );
  const setHasuraToken = useAtom(hasuraTokenAtom)[1];
  const setWalletProvider = useAtom(web3AuthWalletProviderAtom)[1];
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
          body: JSON.stringify({ idToken, walletAddress: userWalletAddress }),
        });
        const { user: userFromResponse, hasuraToken } =
          await loginResponse.json();

        if (!userFromResponse || !hasuraToken) {
          setLoginError(true);
        }
        setUser(userFromResponse);
        setHasuraToken(hasuraToken);
      } catch (error: any) {
        console.error(error);
        setLoginError(true);
      }
    };

    if (!user && (web3AuthUserInfo || userWalletAddress)) {
      loginVanaUser();
    }
  }, [user, web3AuthUserInfo, userWalletAddress]);

  useEffect(() => {
    const subscribeAuthEvents = (web3Auth: Web3Auth) => {
      // Subscribe to ADAPTER_EVENTS. Additional ADAPTER_EVENTS and LOGIN_MODAL_EVENTS exist.
      web3Auth.on(
        ADAPTER_EVENTS.CONNECTED,
        async (data: CONNECTED_EVENT_DATA) => {
          if (data.adapter === WALLET_ADAPTERS.WALLET_CONNECT_V1) {
            // Signed in with a wallet
            const ethProvider = getWalletProvider(web3Auth.provider!);
            setWalletProvider(ethProvider);
            const walletAddresses = await ethProvider.getAccounts();
            if (walletAddresses?.length > 0) {
              setUserWalletAddress(walletAddresses[0]);
            } else {
              console.error("Unable to get user wallet address");
            }
          } else {
            // Signed in with a social network
            web3Auth.getUserInfo().then(async (userInfo) => {
              console.log("userInfo", userInfo);
              setWeb3AuthUserInfo(userInfo);
              setIdToken(userInfo.idToken);
            });
            setWalletProvider(web3Auth.provider!);
          }
        },
      );

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
      if (
        web3AuthInstance.status !== ADAPTER_STATUS.CONNECTED &&
        web3AuthInstance.status !== ADAPTER_STATUS.READY
      ) {
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
      console.error(error);
      setLoginError(true);
    }
  };

  // don't render any markup when the user is logged in
  if (user) {
    return null;
  }

  return (
    <>
      <Button
        type="button"
        variant="solid"
        size="xl"
        css={tw`min-w-[220px] max-w-[220px]`}
        onClick={logIn}
      >
        Log In
      </Button>

      {/* TOAST for any errors */}
      <ToastDefault
        open={loginError}
        onOpenChange={setLoginError}
        duration={12000}
        variant="error"
        title="Something went wrong"
        content={
          <>
            Please{" "}
            <Link href="mailto:support@vanahelp.zendesk.com">email us</Link>{" "}
            with details of your login attempt.
          </>
        }
      />
    </>
  );
};

export { Login };
