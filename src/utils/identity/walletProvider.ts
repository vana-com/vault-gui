import { SafeEventEmitterProvider } from "@web3auth/base";

import ethProvider from "./ethProvider";

export interface IWalletProvider {
  getWalletAddress: () => Promise<string>;
  signMessage(messageToSign: string): Promise<string>;
}

export const getWalletProvider = (
  provider: SafeEventEmitterProvider,
): IWalletProvider => ethProvider(provider);
