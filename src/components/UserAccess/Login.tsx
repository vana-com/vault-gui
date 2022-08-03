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

import { LoginButton } from "src/components";
import { FocusStack } from "src/components/VaultShare/Subelement";
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

interface Props {
  withLayout?: boolean;
}

const Login = ({ withLayout }: Props) => {
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

    // Get the user from the database if we've logged in with web3Auth
    // (either web3AuthUserInfo via openLogin or userWalletAddress via wallet login)
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
          const ethProvider = getWalletProvider(web3Auth.provider!);
          setWalletProvider(ethProvider);

          const walletAddress = await ethProvider.getWalletAddress();
          if (walletAddress) {
            setUserWalletAddress(walletAddress);
          } else {
            console.error("Unable to get user wallet address");
          }

          if (data.adapter === WALLET_ADAPTERS.OPENLOGIN) {
            // Signed in with a social network
            web3Auth.getUserInfo().then(async (userInfo) => {
              setWeb3AuthUserInfo(userInfo);
              setIdToken(userInfo.idToken);
            });
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
      await web3AuthInstance.connect();
    } catch (error: any) {
      console.error(error);
      setLoginError(true);
    }
  };

  // don't render any markup when the user is logged in
  if (web3AuthUserInfo || userWalletAddress) {
    return null;
  }

  return (
    <>
      {withLayout ? (
        <FocusStack tw="items-center justify-center min-h-[268px]">
          <LoginButton logIn={logIn} loginError={loginError} />
        </FocusStack>
      ) : (
        <LoginButton logIn={logIn} loginError={loginError} />
      )}
    </>
  );
};

export { Login };
