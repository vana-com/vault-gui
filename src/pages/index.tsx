import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import type { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AddData,
  Center,
  DataCardButton,
  LayoutApp,
  LayoutCanvas,
  LayoutCanvasGrid,
  LayoutCanvasPattern,
  LayoutLoading,
  NavBreadcrumb,
  NavHeader,
  NavHeaderRule,
  Stack,
  Text,
  TitleAndMetaTags,
  WithIcon,
} from "src/components";
import { navigationBreadcrumbs, testModules } from "src/data";
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
  const HASURA_IS_LOADING = isModulesLoading || isUserModulesDataLoading;
  // data state: has no modules
  const hasNoModules = storedUsersModules.length === 0;
  // const hasNoModules = false;

  // TESTS
  console.log("storedUsersModules", storedUsersModules);
  console.log("hasNoModules", hasNoModules);
  console.log("navigationBreadcrumbs[0]", navigationBreadcrumbs[0]);

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
    return <LayoutLoading />;
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Vault | Vana" />

      <LayoutApp>
        {/* BREADCRUMB */}
        <NavBreadcrumb
          crumbs={hasNoModules ? [navigationBreadcrumbs[0]] : undefined}
        >
          {!hasNoModules && (
            <AddData modules={notStoredModules}>Add data</AddData>
          )}
        </NavBreadcrumb>

        {/* HEADER */}
        {hasNoModules ? (
          <NavHeader heading="What data do you want to add?" />
        ) : (
          <NavHeaderRule />
        )}

        {/* CANVAS */}
        <LayoutCanvas>
          <LayoutCanvasPattern />
          {/* ADD A MODULE */}
          {hasNoModules && (
            <Center tw="min-h-[300px]">
              <Stack tw="gap-5 items-center">
                <AddData modules={notStoredModules}>Start adding data</AddData>
                <Text
                  variant="note"
                  tw="text-labelSecondary flex items-center gap-1"
                >
                  <WithIcon prefix={<Icon icon="carbon:idea" />}>
                    Add a tip here to incentivize users to add data
                  </WithIcon>
                </Text>
              </Stack>
            </Center>
          )}

          {/* STORED MODULES */}
          {!hasNoModules && (
            <LayoutCanvasGrid>
              {storedUsersModules.map((module) => (
                <DataCardButton
                  key={module.module.name?.toLowerCase()}
                  module={module.module}
                  isStored
                  showActionHover
                />
              ))}
            </LayoutCanvasGrid>
          )}
        </LayoutCanvas>
      </LayoutApp>
    </>
  );
};

export default HomePage;
