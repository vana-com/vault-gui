import { useAtom } from "jotai";
import type { NextPage } from "next";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultNoModules,
  DialogDrawerMenu,
  Flex,
  Login,
  ModuleButton,
  PageVault,
  PopoverHelp,
  Spinner,
  Text,
  TitleAndMetaTags,
} from "src/components";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";
import {
  userAtom,
  userWalletAddressAtom,
  web3AuthUserInfoAtom,
} from "src/state";

const HomePage: NextPage = () => {
  const [user] = useAtom(userAtom);
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);
  const [userWalletAddress] = useAtom(userWalletAddressAtom);

  const { data: { modules: allModules } = {}, loading: isModulesLoading } =
    useGetModulesQuery();

  const { data: userModulesData, loading: isUserModulesDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const storedUsersModules = userModulesData?.usersModules
    ? userModulesData.usersModules
    : [];

  const notStoredModules = allModules?.filter(
    (module) =>
      !storedUsersModules.some(
        (storedModule) => module.id === storedModule.moduleId,
      ),
  );

  // data state: web3Auth user available but store user not yet available
  const userAuthorizedWithoutUserData =
    (web3AuthUserInfo || userWalletAddress) && !user;
  // data state: Hasura is loading
  const hasuraIsLoading = isModulesLoading || isUserModulesDataLoading;

  // State prior to authenticated store user
  if (!web3AuthUserInfo && !userWalletAddress) {
    return (
      <>
        <TitleAndMetaTags color="black" />
        <PageVault>
          <Flex tw="w-full items-center justify-center">
            <Login />
          </Flex>
        </PageVault>
      </>
    );
  }

  // State for loading Hasura but not store user
  if (userAuthorizedWithoutUserData || hasuraIsLoading) {
    return (
      <PageVault>
        <Flex tw="w-full items-center justify-center">
          <Spinner />
          {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
          <Login />
        </Flex>
      </PageVault>
    );
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Vault | Vana" />

      {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
      <Login />

      <PageVault>
        <Flex tw="w-full flex-col gap-4">
          <Flex tw="relative items-end justify-between gap-1 text-gray-500 z-10">
            <Text as="h3" variant="heading" color="label">
              Your Data
            </Text>
            <PopoverHelp />
          </Flex>
          <hr />
          <div tw="grid grid-cols-3 grid-flow-col gap-4 min-h-[180px]">
            {/* ADD A MODULE */}
            <DialogDrawerMenu buttonLabel="Add">
              <CardHeaderVaultNoModules>
                {notStoredModules?.map((module) => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DialogDrawerMenu>

            {/* STORED MODULES */}
            {storedUsersModules.map((module) => (
              <ModuleButton
                key={module.module.name?.toLowerCase()}
                name={module.module.name}
                isLarge
                isStored
              />
            ))}
          </div>
        </Flex>
      </PageVault>
    </>
  );
};

export default HomePage;
