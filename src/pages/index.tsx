import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  CardHeaderVaultNoModules,
  ContainerFull,
  DialogModal,
  Flex,
  LayoutApp,
  ModuleButton,
  Spinner,
  Stack,
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
  // only render UI when the page is mounted on the client
  const [mounted, setMounted] = useState(false);
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
  const HASURA_IS_LOADING = isModulesLoading || isUserModulesDataLoading;
  // data state: has no modules
  const hasNoModules = storedUsersModules.length === 0;
  console.log("storedUsersModules", storedUsersModules);
  console.log("hasNoModules", hasNoModules);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // State prior to authenticated store user
  if (!web3AuthUserInfo && !userWalletAddress) {
    return (
      <>
        <TitleAndMetaTags color="black" title="Login to Vault" />
        <LayoutApp />
      </>
    );
  }

  // State for loading Hasura but not store user
  if (userAuthorizedWithoutUserData || HASURA_IS_LOADING) {
    return (
      <>
        <TitleAndMetaTags color="black" title="Loading Vault… | Vana" />
        <LayoutApp>
          <Flex tw="w-full items-center justify-center">
            <Spinner />
          </Flex>
        </LayoutApp>
      </>
    );
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Vault | Vana" />

      <LayoutApp>
        <header tw="pt-inset bg-background">
          <ContainerFull>
            <Stack tw="gap-0.5 pt-2 pb-inset">
              {/* <Text variant="base" weight="medium" tw="text-labelTertiary">
                  Welcome!
                </Text> */}
              <Text as="h1" variant="title2" weight="semibold" tw="-ml-0.5">
                {/* Welcome! Let&apos;s get started */}
                {hasNoModules ? "What app do you want to connect?" : "Data"}
              </Text>
            </Stack>
            <hr />
          </ContainerFull>
        </header>

        <main tw="p-inset">
          <div tw="p-[5px] grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 min-h-[180px]">
            {/* ADD A MODULE */}
            <DialogModal
              buttonSlot={
                <Button
                  size="full"
                  variant="outline"
                  tw="bg-newPrimary text-background"
                  prefix={
                    <Icon icon="heroicons-solid:plus-circle" height="1.5em" />
                  }
                >
                  New App
                </Button>
              }
            >
              <CardHeaderVaultNoModules>
                {notStoredModules?.map((module) => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DialogModal>

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
        </main>

        {/* <PageVault>
          <Flex tw="w-full flex-col gap-4">
            <Flex tw="relative items-end justify-between gap-1 text-gray-500 z-10">
              <Text as="h3" variant="heading" color="label">
                Your Data
              </Text>
              <PopoverHelp />
            </Flex>
            <hr />
          </Flex>
        </PageVault> */}
      </LayoutApp>
    </>
  );
};

export default HomePage;
