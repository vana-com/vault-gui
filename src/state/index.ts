import { SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

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
const idTokenAtom = createAtom<string | undefined>("id-token", undefined);
const hasuraTokenAtom = createAtom<string>("hasura-token", "");
const web3AuthAdapterAtom = createAtom("web3auth-adapter", undefined);
const web3AuthUserInfoAtom = createAtom<Partial<UserInfo> | undefined>(
  "web3auth-user-info",
  undefined,
);
const web3AuthWalletProviderAtom = createAtom<
  SafeEventEmitterProvider | undefined
>("web3auth-wallet-provider", undefined);

export {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  web3AuthAdapterAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
};
