import { SafeEventEmitterProvider, UserInfo } from "@web3auth/base";
import { atom } from "jotai";

interface User {
  id: string;
}

const userAtom = atom<User | undefined>(undefined);
const idTokenAtom = atom<string | undefined>(undefined);
const hasuraTokenAtom = atom<string | undefined>(undefined);
const web3AuthUserInfoAtom = atom<Partial<UserInfo> | undefined>(undefined);
const web3AuthWalletProviderAtom = atom<SafeEventEmitterProvider | undefined>(
  undefined,
);

export {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
};
