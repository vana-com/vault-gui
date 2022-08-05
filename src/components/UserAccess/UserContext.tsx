import {
  ADAPTER_EVENTS,
  ADAPTER_STATUS,
  CONNECTED_EVENT_DATA,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { Web3Auth } from "@web3auth/web3auth/dist/types/modalManager";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

import config from "src/config";
import { Users } from "src/graphql/generated";
import {
  getWalletProvider,
  IWalletProvider,
} from "src/utils/identity/walletProvider";

interface UserContextProps {
  user: Users | null;
  provider: IWalletProvider | null;
  loginUser: () => Promise<void>;
  logoutUser: () => Promise<void>;
  isLoading: boolean;
  loginError: boolean;
  userWalletAddress: string;
  hasuraToken: string;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  provider: null,
  loginUser: async () => {},
  logoutUser: async () => {},
  isLoading: false,
  loginError: false,
  userWalletAddress: "",
  hasuraToken: "",
});
const useUserContext = () => useContext(UserContext);

interface UserProviderProps {
  children?: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const router = useRouter();
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IWalletProvider | null>(null);
  const [user, setUser] = useState<Users | null>(null);
  const [userWalletAddress, setUserWalletAddress] = useState<string>("");
  const [hasuraToken, setHasuraToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  /**
   * Web3Auth connected, get the User from Hasura
   * @param idToken
   * @param walletAddress
   */
  const loginVanaUser = async (idToken: string, walletAddress: string) => {
    try {
      setIsUserLoading(true);
      const loginResponse = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken, walletAddress }),
      });
      const { user: userFromResponse, hasuraToken: hasuraTokenFromResponse } =
        await loginResponse.json();

      if (!userFromResponse || !hasuraTokenFromResponse) {
        throw new Error("Missing required Vana user properties");
      }
      setUser(userFromResponse);
      saveHasuraToken(hasuraTokenFromResponse);
    } catch (error: any) {
      console.error("Unable to get Vana user", error);
      setLoginError(true);
    } finally {
      setIsUserLoading(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Redirect the user to where they were before logging in
    if (router.query?.location) {
      router.push(
        decodeURIComponent(router.query.location.toString()),
        undefined,
        {
          shallow: true,
        },
      );
    }
  }, [user]);

  /**
   * Listen to events from a Web3Auth instance
   * @param web3AuthInstance
   */
  const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
    web3AuthInstance.on(
      ADAPTER_EVENTS.CONNECTED,
      async (data: CONNECTED_EVENT_DATA) => {
        console.log("Web3Auth adapter connected");
        const ethProvider = getWalletProvider(web3AuthInstance.provider!);
        setProvider(ethProvider);

        const walletAddress = (await ethProvider.getAccounts())[0];
        if (walletAddress) {
          setUserWalletAddress(walletAddress);
        } else {
          console.error("Unable to get user wallet address");
        }

        if (data.adapter === WALLET_ADAPTERS.OPENLOGIN) {
          // Signed in with a social network
          web3AuthInstance.getUserInfo().then(async (userInfo: any) => {
            await loginVanaUser(userInfo.idToken, walletAddress);
          });
        } else {
          // Signed in with a wallet
          await loginVanaUser("", walletAddress);
        }
      },
    );

    web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("Web3Auth adapter connecting");
      setIsLoading(true);
    });

    web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, async () => {
      console.log("Web3Auth adapter disconnected");
      setIsLoading(false);
      await logoutUser();
    });

    web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error: any) => {
      console.error(
        "Web3Auth adapter error or user has cancelled login request",
        error,
      );
      setIsLoading(false);
    });

    web3AuthInstance.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
      setIsLoading(isVisible);
    });
  };

  const saveHasuraToken = (token: string) => {
    setHasuraToken(token);
    localStorage.setItem("hasura-token", token);
  };

  // Initialize Web3Auth only once
  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        // Web3Auth must be dynamically imported in Next.js: https://github.com/Web3Auth/Web3Auth/issues/267
        // The Web3Auth import at the top of the page is to get types working during compile time
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { Web3Auth } = await import("@web3auth/web3auth");
        const web3AuthInstance = new Web3Auth(config.web3AuthOptions);
        const web3AuthAdapter = new OpenloginAdapter(
          config.openLoginAdapterConfig,
        );
        web3AuthInstance.configureAdapter(web3AuthAdapter);
        setWeb3Auth(web3AuthInstance);
        subscribeAuthEvents(web3AuthInstance);
        await web3AuthInstance.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: config.openLoginModalConfig,
          },
        });
      } catch (error) {
        console.error("Unable to initialize Web3Auth", error);
        setLoginError(true);
      } finally {
        // Prevent prematurely disabling loading state if we're fetching a Vana user
        setTimeout(() => {
          if (!isUserLoading && !user) {
            setIsLoading(false);
          }
        }, 1000);
      }
    };
    initWeb3Auth();
  }, []);

  const loginUser = async () => {
    setLoginError(false);

    if (!web3Auth) {
      console.error("Web3Auth not initialized yet, unable to log in");
      setLoginError(true);
      return;
    }

    try {
      setIsLoading(true);
      await web3Auth.connect();
    } catch (error: any) {
      console.error("Unable to connect with Web3auth.", error);
      setLoginError(true);
    }
  };

  const logoutUser = async () => {
    try {
      if (web3Auth?.status === ADAPTER_STATUS.CONNECTED) {
        setIsLoading(true);
        await web3Auth.logout();
      }
    } catch (error: any) {
      console.error("Error trying to log out.", error);
    } finally {
      setIsLoading(false);
      setProvider(null);
      setUser(null);
      setUserWalletAddress("");
      saveHasuraToken("");
      router.push("/");
    }
  };

  return (
    <UserContext.Provider
      value={{
        provider,
        loginUser,
        logoutUser,
        user,
        userWalletAddress,
        hasuraToken,
        isLoading,
        loginError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
