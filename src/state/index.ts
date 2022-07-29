import { UserInfo } from "@web3auth/base";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

import { IWalletProvider } from "src/utils/identity/walletProvider";

// TODO: update interface with generated graphQL type
interface User {
  id: string;
  externalId: string;
  emailAddress: string;
  name: string;
}

function createAtom<T>(name: string, defaultValue: T) {
  return atomWithStorage<T>(
    name,
    defaultValue,
    createJSONStorage<T>(() => localStorage),
  );
}

const userAtom = createAtom<User | undefined>("user", undefined);
const userWalletAddressAtom = createAtom<string>("user-wallet-address", "");
const idTokenAtom = createAtom<string | undefined>("id-token", "");
const hasuraTokenAtom = createAtom<string>("hasura-token", "");
const web3AuthUserInfoAtom = createAtom<Partial<UserInfo> | undefined>(
  "web3auth-user-info",
  undefined,
);
const web3AuthWalletProviderAtom = createAtom<IWalletProvider | undefined>(
  "web3auth-wallet-provider",
  undefined,
);

export {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  userWalletAddressAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
};
