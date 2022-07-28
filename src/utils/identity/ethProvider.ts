import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";

import { IWalletProvider } from "./walletProvider";

/**
 * Implements wallet functionality specific to EVM compatible wallets, such as getting the wallet address and private key
 * @param provider - Web3Auth provider
 * @returns
 */
const ethProvider = (provider: SafeEventEmitterProvider): IWalletProvider => {
  const getAccounts = async (): Promise<string[]> => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error) {
      console.error("Error getting ETH accounts", error);
      return [];
    }
  };

  const dangerouslyGetPrivateKey = async (): Promise<string | undefined> => {
    try {
      const dangerousPrivateKey = (await provider.request({
        method: "eth_private_key",
      })) as string;
      return dangerousPrivateKey;
    } catch (error: any) {
      // user not logged in
      console.log("error", error.toString());
      return undefined;
    }
  };
  return {
    getAccounts,
    dangerouslyGetPrivateKey,
  };
};

export default ethProvider;
