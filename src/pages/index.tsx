import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AddData,
  Center,
  DataModule,
  Group,
  LayoutCanvas,
  LayoutCanvasGrid,
  LayoutCanvasPattern,
  LayoutLoading,
  LayoutPage,
  NavBreadcrumb,
  NavHeader,
  NavHeaderRule,
  OnboardDialog,
  OnboardDialogControlled,
  Stack,
  TitleAndMetaTags,
  ToastDefault,
  useUserContext,
} from "src/components";
import { navigationBreadcrumbs } from "src/data";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";
import { getLocalItem, setLocalItem } from "src/utils";

const HomePage: NextPage = () => {
  const router = useRouter();
  const { user, hasuraToken, isInitialAccountLogin } = useUserContext();
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingModuleName, setDeletingModuleName] = useState<
    string | undefined
  >(undefined);
  const [showDeleteSuccessToast, setShowDeleteSuccessToast] = useState(false);
  const [showDeleteFailureToast, setShowDeleteFailureToast] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const setHasSeenOnboarding = () => {
    setLocalItem("has-seen-onboarding", "true");
  };
  const hasSeenOnboarding = getLocalItem("has-seen-onboarding") === "true";

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

  // Delete a user's data module
  const deleteModule = async (moduleId: string, moduleName: string) => {
    setIsDeleting(true);
    setDeletingModuleName(moduleName);

    try {
      const { success } = await (
        await fetch(`/api/user-data/delete-modules`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hasuraToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usersModulesIds: [moduleId],
          }),
        })
      ).json();

      if (success) {
        setShowDeleteSuccessToast(true);
        setTimeout(() => router.push("/"), 250);
      } else {
        setShowDeleteFailureToast(true);
      }
    } catch (e) {
      console.error(`Unable to delete module ${moduleName}`, e);
    } finally {
      setIsDeleting(false);
    }
  };

  // Programmatically setShowOnboarding based on isInitialAccountLogin
  useEffect(() => {
    if (isInitialAccountLogin) {
      setTimeout(() => setShowOnboarding(true), 750);
    }
  }, [isInitialAccountLogin]);

  // Data state: hasura data is loading
  const isHasuraLoading = isModulesLoading || isUserModulesDataLoading;

  if (isHasuraLoading) return <LayoutLoading />;

  // Data state: has no modules
  const hasNoStoredModules = storedUsersModules.length === 0;

  // TESTS
  // console.log("storedUsersModules", storedUsersModules);
  // console.log("hasNoModules", hasNoModules);
  // console.log("navigationBreadcrumbs[0]", navigationBreadcrumbs[0]);

  return (
    <>
      <TitleAndMetaTags color="black" title="Vault | Vana" />

      <LayoutPage>
        {/* BREADCRUMB: show OnboardDialog if has modules */}
        <NavBreadcrumb
          crumbs={hasNoStoredModules ? [navigationBreadcrumbs[0]] : undefined}
        >
          <Group tw="gap-3">
            {!hasNoStoredModules && <OnboardDialog />}
            {storedUsersModules.length > 0 && storedUsersModules.length < 3 && (
              <AddData userId={user?.id} modules={notStoredModules}>
                Add data
              </AddData>
            )}
          </Group>
        </NavBreadcrumb>

        {/* HEADER: show OnboardDialog if hasNoModules */}
        {hasNoStoredModules ? (
          <NavHeader heading="What data do you want to add?">
            <OnboardDialog />
          </NavHeader>
        ) : (
          <NavHeaderRule />
        )}

        {/* CANVAS */}
        <LayoutCanvas>
          <LayoutCanvasPattern />

          {/* NO STORED MODULES: ADD A MODULE */}
          {hasNoStoredModules && (
            <Center tw="min-h-[300px] relative">
              <Stack tw="gap-5 items-center">
                <AddData
                  userId={user?.id}
                  buttonIsLarge
                  modules={notStoredModules}
                >
                  Start adding data
                </AddData>
                {/* TODO: add incentive copy as part of onboarding */}
                {/* <Text
                  variant="note"
                  tw="text-labelSecondary flex items-center gap-1"
                >
                  <WithIcon prefix={<Icon icon="carbon:idea" />}>
                    Add a tip here to incentivize users to add data
                  </WithIcon>
                </Text> */}
              </Stack>
            </Center>
          )}

          {/* STORED MODULES */}
          {!hasNoStoredModules && (
            <LayoutCanvasGrid>
              {storedUsersModules.map((userModule) => (
                <DataModule
                  userId={user?.id}
                  key={userModule.id}
                  module={userModule}
                  handleDeleteModule={async () =>
                    deleteModule(userModule.id, userModule.module.name)
                  }
                  isDeleting={isDeleting}
                />
              ))}
            </LayoutCanvasGrid>
          )}
        </LayoutCanvas>

        {/* AUTOMATED ONBOARDING on isInitialAccountLogin only. Only renders to the DOM when conditions are met, has no internal state nor trigger. */}
        {!hasSeenOnboarding && (
          <OnboardDialogControlled
            showOnboarding={showOnboarding}
            setShowOnboarding={setShowOnboarding}
            setHasSeenOnboarding={setHasSeenOnboarding}
          />
        )}

        {/* MODULE DELETION STATUS TOASTS */}
        <ToastDefault
          open={showDeleteSuccessToast}
          onOpenChange={setShowDeleteSuccessToast}
          variant="success"
          title="Success"
          content={`Your ${deletingModuleName} data has been permanently deleted`}
        />
        <ToastDefault
          open={showDeleteFailureToast}
          onOpenChange={setShowDeleteFailureToast}
          duration={12000}
          variant="error"
          title="Error"
          content="Please reload the page and try again"
        />
      </LayoutPage>
    </>
  );
};

export default HomePage;
