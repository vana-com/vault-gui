import { SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

// TODO: update interface with generated graphQL type
interface User {
  id: string;
  externalId: string;
  emailAddress: string;
  name: string;
}

const storage = createJSONStorage(() => sessionStorage);

const userAtom = atom<User | undefined>(undefined);
const idTokenAtom = atom<string | undefined>(undefined);
const hasuraTokenAtom = atomWithStorage('hasura-token', undefined, storage);
const web3AuthAdapterAtom = atom<string | undefined>(undefined);
const web3AuthUserInfoAtom = atom<Partial<UserInfo> | undefined>(undefined);
const web3AuthWalletProviderAtom = atom<SafeEventEmitterProvider | undefined>(
  undefined,
);
export {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  web3AuthAdapterAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
};
