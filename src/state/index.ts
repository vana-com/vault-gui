import { SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
import { atom } from "jotai";

// TODO: update interface with generated graphQL type
interface User {
  id: string;
  externalId: string;
  emailAddress: string;
  name: string;
}

const userAtom = atom<User | undefined>(undefined);
const idTokenAtom = atom<string | undefined>(undefined);
const hasuraTokenAtom = atom<string | undefined>(undefined);
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
