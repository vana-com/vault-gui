import { atom } from "jotai";

interface User {
  id: string;
}

const userAtom = atom<User | undefined>({
  id: "user123",
});
const idTokenAtom = atom<string | undefined>(undefined);
const appPubKeyAtom = atom<string | undefined>(undefined);
const hasuraTokenAtom = atom<string | undefined>(undefined);

export { appPubKeyAtom, hasuraTokenAtom, idTokenAtom, userAtom };
