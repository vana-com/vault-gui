import { SafeEventEmitterProvider } from "@web3auth/base";

import ethProvider from "./ethProvider";

export interface IWalletProvider {
  getAccounts: () => Promise<string[]>;
}

export const getWalletProvider = (
  provider: SafeEventEmitterProvider,
): IWalletProvider => ethProvider(provider);
