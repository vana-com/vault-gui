import { UserInfo } from "@web3auth/base";
import { atom } from "jotai";

interface User {
  id: string;
}

const userAtom = atom<User | undefined>(undefined);
const idTokenAtom = atom<string | undefined>(undefined);
const appPubKeyAtom = atom<string | undefined>(undefined);
const hasuraTokenAtom = atom<string | undefined>(undefined);
const web3AuthUserInfoAtom = atom<Partial<UserInfo> | undefined>(undefined);

export {
  appPubKeyAtom,
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  web3AuthUserInfoAtom,
};
