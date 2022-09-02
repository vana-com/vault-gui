import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";

import { IWalletProvider } from "./walletProvider";

/**
 * Implements wallet functionality specific to EVM compatible wallets, such as getting the wallet address encrypting/decrypting
 * @param provider - Web3Auth provider
 * @returns
 */
const ethProvider = (provider: SafeEventEmitterProvider): IWalletProvider => {
  /**
   * Returns the user's wallet address.
   * Note, the address could be returned in different cases (ex: 0xab12.. vs 0xAB12..) depending on whether the checksum was applied
   * @returns
   */
  const getWalletAddress = async (): Promise<string> => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        return accounts[0];
      }
      return "";
    } catch (error) {
      console.error("Error getting ETH accounts", error);
      return "";
    }
  };

  const signMessage = async (messageToSign: string): Promise<string> => {
    try {
      const web3 = new Web3(provider as any);
      const address = await getWalletAddress();
      const signedMessage = await web3.eth.personal.sign(
        messageToSign,
        address,
        "",
      );
      return signedMessage;
    } catch (error) {
      console.error("Error signing a message", error);
      return "";
    }
  };

  return {
    getWalletAddress,
    signMessage,
  };
};

export default ethProvider;
