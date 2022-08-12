import { Icon } from "@iconify/react";
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
import { useUserContext } from "src/components/UserAccess/UserContext";
import { navigationBreadcrumbs } from "src/data";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";

const HomePage: NextPage = () => {
  const { user } = useUserContext();

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

  // Data state: hasura data is loading
  // TODO: is userModulesData !== undefined a possible state?
  const isHasuraLoading = isModulesLoading || isUserModulesDataLoading;

  if (isHasuraLoading) return <LayoutLoading />;

  // Data state: has no modules
  const hasNoModules = storedUsersModules.length === 0;

  // TESTS
  console.log("storedUsersModules", storedUsersModules);
  console.log("hasNoModules", hasNoModules);
  console.log("navigationBreadcrumbs[0]", navigationBreadcrumbs[0]);

  return (
    <>
      <TitleAndMetaTags color="black" title="Vault | Vana" />
      <LayoutApp>
        {/* BREADCRUMB */}
        <NavBreadcrumb
          crumbs={hasNoModules ? [navigationBreadcrumbs[0]] : undefined}
        >
          {storedUsersModules.length > 0 && storedUsersModules.length < 3 && (
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
          {/* NO STORED MODULES: ADD A MODULE */}
          {hasNoModules && (
            <Center tw="min-h-[300px] relative">
              <Stack tw="gap-5 items-center">
                <AddData buttonIsLarge modules={notStoredModules}>
                  Start adding data
                </AddData>
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
