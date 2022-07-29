import config from "src/config";

const { web3AuthInstance } = config;

const logOut = async (
  setWalletProvider: (a: undefined) => void,
  setWeb3AuthUserInfo: (a: undefined) => void,
  setUser: (a: undefined) => void,
  setHasuraToken: (a: string) => void,
  setIdToken: (a: string) => void,
) => {
  try {
    // If Web3Auth isn't initialized, this will thrown an error
    await web3AuthInstance.logout();
  } catch (error) {
    // do nothing
  }

  setWalletProvider(undefined);
  setWeb3AuthUserInfo(undefined);
  setUser(undefined);
  setHasuraToken("");
  setIdToken("");
};

export { logOut };
