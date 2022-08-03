import { SafeEventEmitterProvider } from "@web3auth/base";

import ethProvider from "./ethProvider";

export interface IWalletProvider {
  getWalletAddress: () => Promise<string>;
  encryptMessage(messageToEncrypt: string): Promise<string>;
  decryptMessage(encryptedMessage: string): Promise<string>;
  dangerouslyGetPrivateKey: () => Promise<string | undefined>;
}

export const getWalletProvider = (
  provider: SafeEventEmitterProvider,
): IWalletProvider => ethProvider(provider);
