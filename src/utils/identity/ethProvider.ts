import { encrypt } from "@metamask/eth-sig-util";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { bufferToHex } from "ethereumjs-util";
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

  const encryptMessage = async (messageToEncrypt: string): Promise<string> => {
    try {
      const walletAddress = await getWalletAddress();
      const encryptionPublicKey = (await provider.request({
        method: "eth_getEncryptionPublicKey",
        params: [walletAddress],
      })) as string;
      const encryptedMessage = bufferToHex(
        Buffer.from(
          JSON.stringify(
            encrypt({
              publicKey: encryptionPublicKey,
              data: messageToEncrypt,
              version: "x25519-xsalsa20-poly1305",
            }),
          ),
          "utf8",
        ),
      );
      return encryptedMessage;
    } catch (error) {
      console.error("Error encrypting message", error);
      return "";
    }
  };

  const decryptMessage = async (encryptedMessage: string): Promise<string> => {
    try {
      const walletAddress = await getWalletAddress();
      const decryptedMessage = (await provider.request({
        method: "eth_decrypt",
        params: [encryptedMessage, walletAddress],
      })) as string;
      return decryptedMessage;
    } catch (error) {
      console.error("Error decrypting message", error);
      return "";
    }
  };

  return {
    decryptMessage,
    encryptMessage,
    getWalletAddress,
  };
};

export default ethProvider;
