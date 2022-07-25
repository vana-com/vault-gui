import { useAtom } from "jotai";
import { useState } from "react";

import { Button } from "src/components";
import { CarbonArrowRight } from "src/components/Icons";
import config from "src/config";
import {
  hasuraTokenAtom,
  userAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
} from "src/state";

const { web3AuthInstance } = config;

const Logout = () => {
  const [, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [, setUser] = useAtom(userAtom);
  const setHasuraToken = useAtom(hasuraTokenAtom)[1];
  const setWalletProvider = useAtom(web3AuthWalletProviderAtom)[1];
  const [isLoading, setIsLoading] = useState(false);

  const logOut = async () => {
    setIsLoading(true);
    if (!web3AuthInstance || web3AuthInstance.status === "not_ready") {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3AuthInstance.logout();
    setWalletProvider(undefined);
    setWeb3AuthUserInfo(undefined);
    setUser(undefined);
    setHasuraToken("");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="md"
      suffix={<CarbonArrowRight />}
      isLoading={isLoading}
      onClick={logOut}
    >
      Log Out
    </Button>
  );
};

export { Logout };
