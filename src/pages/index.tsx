import { Icon } from "@iconify/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AddData,
  Center,
  DataModule,
  LayoutCanvas,
  LayoutCanvasGrid,
  LayoutCanvasPattern,
  LayoutLoading,
  LayoutPage,
  NavBreadcrumb,
  NavHeader,
  NavHeaderRule,
  Stack,
  Text,
  TitleAndMetaTags,
  ToastDefault,
  WithIcon,
} from "src/components";
import { useUserContext } from "src/components/UserAccess/UserContext";
import { navigationBreadcrumbs } from "src/data";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";
import { formatModuleNameFromQueryString } from "src/utils";

const HomePage: NextPage = () => {
  const router = useRouter();
  const { user, hasuraToken } = useUserContext();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteSuccessToast, setShowDeleteSuccessToast] = useState(false);
  const [showDeleteFailureToast, setShowDeleteFailureToast] = useState(false);

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

  // Set the module name from query string
  const { "module-name": moduleNameFromQuery } = router.query;
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  // Delete a user's data module
  const deleteModule = async (moduleId: string) => {
    setIsDeleting(true);

    console.log("moduleId", moduleId);

    const { deleteSuccessful } = await (
      await fetch(`/api/user-data/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usersModulesIds: [moduleId],
          hasuraToken,
        }),
      })
    ).json();

    if (deleteSuccessful) {
      setShowDeleteSuccessToast(true);
      setTimeout(() => router.push("/"), 250);
    } else {
      setIsDeleting(false);
      setShowDeleteFailureToast(true);
    }
  };

  // Data state: hasura data is loading
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

      <LayoutPage>
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
                <DataModule
                  key={module.id}
                  module={module}
                  handleDeleteModule={() => deleteModule(module.id)}
                  isDeleting={isDeleting}
                />
              ))}
            </LayoutCanvasGrid>
          )}
        </LayoutCanvas>

        {/* MODULE DELETION STATUS TOASTS */}
        <ToastDefault
          open={showDeleteSuccessToast}
          onOpenChange={setShowDeleteSuccessToast}
          variant="success"
          title="Success"
          content={`Your ${moduleName} data has been securely deleted`}
        />
        <ToastDefault
          open={showDeleteFailureToast}
          onOpenChange={setShowDeleteFailureToast}
          duration={12000}
          variant="error"
          title="Error!"
          content="Please reload the page and try again"
        />
      </LayoutPage>
    </>
  );
};

export default HomePage;
