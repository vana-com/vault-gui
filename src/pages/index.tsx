import { useAtom } from "jotai";
import type { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AddData,
  LayoutApp,
  LayoutLoading,
  ModuleButton,
  NavBreadcrumb,
  NavHeader,
  TitleAndMetaTags,
} from "src/components";
import {
  layoutCanvasPatternStyle,
  layoutCanvasStyle,
} from "src/components/Layout/LayoutCanvas";
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
        <NavBreadcrumb
          crumbs={hasNoModules ? [navigationBreadcrumbs[0]] : undefined}
        >
          {!hasNoModules && (
            <AddData modules={notStoredModules} buttonSize="md" />
          )}
        </NavBreadcrumb>

        {hasNoModules ? (
          <NavHeader heading="What data do you want to add?" />
        ) : (
          <div tw="px-inset pt-2.5">
            <hr />
          </div>
        )}

        <main tw="p-inset relative h-full">
          <div tw="absolute inset-inset h-full">
            <div css={[layoutCanvasPatternStyle, tw`absolute inset-0`]} />
          </div>
          {/* <div tw="p-[1px] grid grid-cols-2 lg:grid-cols-3 gap-4"> */}
          <div css={layoutCanvasStyle}>
            {/* ADD A MODULE */}
            {hasNoModules && (
              <AddData
                modules={notStoredModules}
                buttonSize="full"
                tw="min-h-[260px]"
              />
            )}

            {/* STORED MODULES */}
            {storedUsersModules.map((module) => (
              <ModuleButton
                key={module.module.name?.toLowerCase()}
                module={module.module}
                isLarge
                isStored
              />
            ))}
            {/* {testModules.map((module) => (
              <ModuleButton
                key={module.name?.toLowerCase()}
                module={module}
                isLarge
                isStored
              />
            ))} */}
          </div>
        </main>
      </LayoutApp>
    </>
  );
};

export default HomePage;
