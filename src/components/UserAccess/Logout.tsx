import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Spinner, Text, WithIcon } from "src/components";
import { navLinkStyle } from "src/components/Nav/Nav.css";
import {
  hasuraTokenAtom,
  idTokenAtom,
  userAtom,
  userWalletAddressAtom,
  web3AuthUserInfoAtom,
  web3AuthWalletProviderAtom,
} from "src/state";
import { logOut as logOutUtil } from "src/utils";

const Logout = () => {
  const [, setWeb3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [, setUser] = useAtom(userAtom);
  const [, setUserWalletAddress] = useAtom(userWalletAddressAtom);
  const [, setIdToken] = useAtom(idTokenAtom);
  const [, setHasuraToken] = useAtom(hasuraTokenAtom);
  const [, setWalletProvider] = useAtom(web3AuthWalletProviderAtom);
  const [isLoading, setIsLoading] = useState(false);

  const logOut = async () => {
    setIsLoading(true);
    logOutUtil(
      setWalletProvider,
      setUserWalletAddress,
      setWeb3AuthUserInfo,
      setUser,
      setHasuraToken,
      setIdToken,
    );
  };

  return (
    // <Button
    //   type="button"
    //   variant="ghost"
    //   size="md"
    //   prefix={<Icon icon="heroicons-solid:logout" />}
    //   isLoading={isLoading}
    //   onClick={logOut}
    // >
    //   Log Out
    // </Button>
    <Text
      as="button"
      variant="base"
      weight="medium"
      css={[navLinkStyle, tw`px-3`]}
      onClick={logOut}
    >
      <WithIcon
        prefix={
          isLoading ? (
            <Spinner />
          ) : (
            <Icon icon="heroicons-solid:logout" height="0.85em" />
          )
        }
      >
        Log out
      </WithIcon>
    </Text>
  );
};

export { Logout };
