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
  return {
    getAccounts,
  };
};

export default ethProvider;
