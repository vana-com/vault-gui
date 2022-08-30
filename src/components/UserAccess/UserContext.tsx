import {
  ADAPTER_EVENTS,
  ADAPTER_STATUS,
  CONNECTED_EVENT_DATA,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";
import { Web3Auth } from "@web3auth/web3auth/dist/types/modalManager";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

import { Link, ToastDefault } from "src/components";
import config from "src/config";
import { Users } from "src/graphql/generated";
import {
  getJwtPayload,
  heapAddAccountPropsServerSide,
  heapIdentify,
  heapTrackServerSide,
  setLoginPath,
} from "src/utils";
import {
  getWalletProvider,
  IWalletProvider,
} from "src/utils/identity/walletProvider";

const { HEAP_EVENTS } = config;

interface UserContextProps {
  user: Users | null;
  loginType: string | null;
  walletProvider: IWalletProvider | null;
  loginUser: () => Promise<void>;
  logoutUser: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
  userWalletAddress: string | null;
  hasuraToken: string | null;
  isInitialAccountLogin: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  loginType: null,
  walletProvider: null,
  loginUser: async () => {},
  logoutUser: async () => {},
  isLoading: false,
  isAuthenticated: false,
  userWalletAddress: null,
  hasuraToken: null,
  isInitialAccountLogin: false,
});
const useUserContext = () => useContext(UserContext);

interface UserProviderProps {
  children?: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const router = useRouter();
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  const [walletProvider, setWalletProvider] = useState<IWalletProvider | null>(
    null,
  );
  const [user, setUser] = useState<Users | null>(null);
  const [userWalletAddress, setUserWalletAddress] = useState<string | null>(
    null,
  );
  const [loginType, setLoginType] = useState<string | null>(null);
  const [hasuraToken, setHasuraToken] = useState<string | null>(null);
  const [isWeb3AuthLoading, setIsWeb3AuthLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isInitialAccountLogin, setIsInitialAccountLogin] = useState(false);
  const { resolvedTheme } = useTheme();

  // Due to clashes between useTheme and web3Auth.uiConfig types,
  // definitively set the theme to either light or dark
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  /**
   * Web3Auth connected, get the User from Hasura
   * @param idToken
   */
  const loginVanaUser = async (
    idToken: string,
    loginTypeLocallyScoped: string,
  ) => {
    try {
      setIsUserLoading(true);
      const loginResponse = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });
      const { user: userFromResponse, hasuraToken: hasuraTokenFromResponse } =
        await loginResponse.json();

      if (!userFromResponse || !hasuraTokenFromResponse) {
        throw new Error("Missing required Vana user properties");
      }
      setUser(userFromResponse);
      saveHasuraToken(hasuraTokenFromResponse);

      // setIsInitialAccountLogin
      const hasPriorAccountLogin = savePriorAccountLoginStatus();
      setIsInitialAccountLogin(!hasPriorAccountLogin);
      heapTrackServerSide(userFromResponse?.id, HEAP_EVENTS.LOGIN, {
        "Login Type": loginTypeLocallyScoped,
      });
      heapAddAccountPropsServerSide(userFromResponse?.id, {
        "Login Type": loginTypeLocallyScoped,
      });
      // Associates the Heap Tag running in the user's browser with the user
      heapIdentify(userFromResponse?.id);
    } catch (error: any) {
      console.error("Unable to get Vana user", error);
      setLoginError(true);
    } finally {
      setIsUserLoading(false);
      setIsWeb3AuthLoading(false);
    }
  };

  /**
   * Save hasPriorAccountLogin for use with initial login UX for a new user,
   * eg. to show an onboarding status
   * @returns boolean
   */
  const savePriorAccountLoginStatus = () => {
    const hasPriorAccountLogin =
      localStorage.getItem("has-prior-account-login") !== null;

    if (!hasPriorAccountLogin) {
      localStorage.setItem("has-prior-account-login", "true");
    }

    return hasPriorAccountLogin;
  };

  /**
   * Listen to events from a Web3Auth instance
   * @param web3AuthInstance
   */
  const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
    // User is logged in with Web3Auth. `web3auth.provider` is available here
    web3AuthInstance.on(
      ADAPTER_EVENTS.CONNECTED,
      async (data: CONNECTED_EVENT_DATA) => {
        console.log("Web3Auth adapter connected", data);
        const ethProvider = getWalletProvider(web3AuthInstance.provider!);
        setWalletProvider(ethProvider);

        const walletAddress = await ethProvider.getWalletAddress();
        if (walletAddress) {
          setUserWalletAddress(walletAddress);
          if (data.adapter === WALLET_ADAPTERS.OPENLOGIN) {
            // Signed in with a social network
            web3AuthInstance.getUserInfo().then(async (userInfo: any) => {
              setLoginType(userInfo.typeOfLogin);
              await loginVanaUser(userInfo.idToken, userInfo.typeOfLogin);
            });
          } else {
            // Signed in with a wallet
            try {
              setIsUserLoading(true);
              const idTokenDetails = await web3AuthInstance.authenticateUser();
              const idTokenPayload = getJwtPayload(idTokenDetails.idToken);
              setLoginType(idTokenPayload.issuer);
              await loginVanaUser(
                idTokenDetails.idToken,
                idTokenPayload.issuer,
              );
            } catch (error) {
              setLoginError(true);
              console.error("Unable to authenticate wallet user", error);
            } finally {
              setIsUserLoading(false);
            }
          }
        } else {
          setLoginError(true);
          console.error("Unable to get user wallet address");
        }
      },
    );

    web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("Web3Auth adapter connecting");
      setIsWeb3AuthLoading(true);
    });

    web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, async () => {
      console.log("Web3Auth adapter disconnected");
      setIsWeb3AuthLoading(false);
      await logoutUser();
    });

    web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error: any) => {
      console.error(
        "Web3Auth adapter error or user has cancelled login request",
        error,
      );
      setIsWeb3AuthLoading(false);
    });

    web3AuthInstance.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
      setIsWeb3AuthLoading(isVisible);
    });
  };

  /**
   * The Hasura token is accessed by ApolloClient, which is outside of UserContext. Use LocalStorage to access it.
   * @param token
   */
  const saveHasuraToken = (token: string | null) => {
    setHasuraToken(token);
    if (!token) {
      localStorage.removeItem("hasura-token");
    } else {
      localStorage.setItem("hasura-token", token);
    }
  };

  // Initialize Web3Auth only once
  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        // Web3Auth must be dynamically imported in Next.js: https://github.com/Web3Auth/Web3Auth/issues/267
        // The Web3Auth import at the top of the page is to get types working during compile time
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { Web3Auth } = await import("@web3auth/web3auth");
        const web3AuthInstance = new Web3Auth({
          uiConfig: {
            appLogo: "https://vault.vana.xyz/vana.svg",
            theme,
          },
          ...config.web3AuthOptions,
        });

        // OpenLogin adapter
        let openLoginAdapter;
        if (window.location.origin.endsWith(config.vercelDomain)) {
          // Attempt to whitelist origin in Web3Auth manually for Vercel preview builds
          const res = await fetch(`/api/auth/sign-origin`, { method: "POST" }); // Use POST to send Origin header automatically
          const { origin, signature } = await res.json();
          openLoginAdapter = new OpenloginAdapter(
            config.openLoginAdapterConfig({ [origin]: signature }),
          );
        } else {
          // Otherwise, all other origins are whitelisted in Web3Auth console
          openLoginAdapter = new OpenloginAdapter(
            config.openLoginAdapterConfig(),
          );
        }
        web3AuthInstance.configureAdapter(openLoginAdapter);

        // Metamask Adapter
        const metamaskAdapter = new MetamaskAdapter();
        web3AuthInstance.configureAdapter(metamaskAdapter);

        // WalletConnect Adapter
        const walletConnectAdapter = new WalletConnectV1Adapter();
        web3AuthInstance.configureAdapter(walletConnectAdapter);

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
            setIsWeb3AuthLoading(false);
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
      setIsWeb3AuthLoading(true);
      await web3Auth.connect();
    } catch (error: any) {
      console.error("Unable to connect with Web3auth.", error);
      setLoginError(true);
    }
  };

  const logoutUser = async () => {
    try {
      if (web3Auth?.status === ADAPTER_STATUS.CONNECTED) {
        setIsWeb3AuthLoading(true);
        await web3Auth.logout();
      }
    } catch (error: any) {
      console.error("Error trying to log out.", error);
    } finally {
      heapTrackServerSide(user?.id, HEAP_EVENTS.LOGOUT);
      setIsWeb3AuthLoading(false);
      setWalletProvider(null);
      setUser(null);
      setUserWalletAddress(null);
      saveHasuraToken(null);
      setTimeout(() => router.push(setLoginPath(router.asPath)), 250);
    }
  };

  return (
    <UserContext.Provider
      value={{
        walletProvider,
        loginType,
        loginUser,
        logoutUser,
        user,
        userWalletAddress,
        hasuraToken,
        isLoading: isWeb3AuthLoading || isUserLoading,
        isAuthenticated: !!user,
        isInitialAccountLogin,
      }}
    >
      {children}

      {/* TOAST for any login errors */}
      <ToastDefault
        open={loginError}
        onOpenChange={setLoginError}
        duration={12000}
        variant="error"
        title="Something went wrong"
        content={
          <>
            Please{" "}
            <Link href={`mailto:${config.vanaSupportEmail}`}>email us</Link>{" "}
            with details of your log in attempt.
          </>
        }
      />
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
