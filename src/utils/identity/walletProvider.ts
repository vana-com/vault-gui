import { SafeEventEmitterProvider } from "@web3auth/base";

import ethProvider from "./ethProvider";

export interface IWalletProvider {
  getAccounts: () => Promise<string[]>;
  dangerouslyGetPrivateKey: () => Promise<string | undefined>;
}

export const getWalletProvider = (
  provider: SafeEventEmitterProvider,
): IWalletProvider => ethProvider(provider);
