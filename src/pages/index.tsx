import type { NextPage } from "next";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultNoModules,
  DialogDrawerMenu,
  Flex,
  ModuleButton,
  PageVault,
  PopoverHelp,
  Spinner,
  Text,
  TitleAndMetaTags,
} from "src/components";
import { useUserContext } from "src/components/UserAccess/UserContext";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";

const HomePage: NextPage = () => {
  const { user, isLoading: isUserLoading } = useUserContext();

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

  const isHasuraLoading =
    isUserLoading || isModulesLoading || isUserModulesDataLoading;

  if (user && userModulesData !== undefined) {
    return (
      <>
        <TitleAndMetaTags color="black" title="Vault | Vana" />
        <PageVault>
          <Flex tw="w-full flex-col gap-4">
            <Flex tw="relative items-end justify-between gap-1 text-gray-500 z-10">
              <Text as="h3" variant="heading" color="label">
                Your Data
              </Text>
              <PopoverHelp />
            </Flex>
            <hr />
            <div tw="grid grid-cols-2 lg:grid-cols-3 gap-4 min-h-[180px]">
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
  }

  // State prior to authenticated store user
  if (!user && !isHasuraLoading) {
    return (
      <>
        <TitleAndMetaTags color="black" title="Login to Vault" />
        <PageVault>
          <Flex tw="w-full items-center justify-center">
            Login to get started
          </Flex>
        </PageVault>
      </>
    );
  }

  // State for loading Hasura but not store user
  return (
    <>
      <TitleAndMetaTags color="black" title="Loading Vault… | Vana" />
      <PageVault>
        <Flex tw="w-full items-center justify-center">
          <Spinner />
        </Flex>
      </PageVault>
    </>
  );
};

export default HomePage;
