import { useAtom } from "jotai";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DialogClose,
  DialogModal,
  Group,
  Stack,
  Text,
} from "src/components";
import { CarbonSecurity } from "src/components/Icons";
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
    <DialogModal
      buttonSlot={
        <Button
          type="button"
          variant="outline"
          size="md"
          prefix={<CarbonSecurity />}
        >
          Log Out
        </Button>
      }
    >
      <Stack tw="gap-1 justify-center">
        <Text color="label" variant="title2" tw="text-center">
          Are you sure?
        </Text>
        <Text color="labelSecondary" tw="text-center">
          Confirm your secure logout
        </Text>

        <Group tw="gap-4 pt-7 justify-center">
          <Button
            variant="solid"
            size="lg"
            prefix={<CarbonSecurity />}
            isLoading={isLoading}
            onClick={logOut}
          >
            Log Out
          </Button>
          <DialogClose asChild>
            <Button variant="outline" size="lg">
              Not yet
            </Button>
          </DialogClose>
        </Group>
      </Stack>
    </DialogModal>
  );
};

export { Logout };
