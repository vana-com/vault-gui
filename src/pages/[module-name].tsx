import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AuthenticatedLayout,
  DataModule,
  DeleteData,
  LayoutApp,
  LayoutCanvas,
  LayoutCanvasGrid,
  LayoutCanvasPattern,
  LayoutLoading,
  NavBreadcrumb,
  NavHeader,
  PopoverDataModule,
  Stack,
  Text,
  TitleAndMetaTags,
  ToastDefault,
  useUserContext,
} from "src/components";
import { navigationBreadcrumbs } from "src/data";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultModulePage: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteSuccessToast, setShowDeleteSuccessToast] = useState(false);
  const [showDeleteFailureToast, setShowDeleteFailureToast] = useState(false);

  // query data
  const { "module-name": moduleNameFromQuery } = router.query;
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  const { user, hasuraToken, isLoading: isUserLoading } = useUserContext();

  const { data: userModulesData, loading: isDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const usersModulesForThisService = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) => userModule.module.name === moduleName,
      )
    : [];

  // If the module doesn't exist, redirect
  useEffect(() => {
    if (
      router.isReady &&
      usersModulesForThisService.length === 0 &&
      !isUserLoading &&
      !isDataLoading
    ) {
      router.push("/");
    }
  }, [router, isDataLoading]);

  /**
   * Deletes all files a user has stored for a module (ie. Email integration).
   * See deleteSingleFile comment for how deletion is done.
   */
  const deleteAllModuleFiles = async () => {
    setIsDeleting(true);
    const usersModulesIdsToDelete = usersModulesForThisService.map(
      (userModule) => userModule.id,
    );
    const { deleteSuccessful } = await (
      await fetch(`/api/user-data/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usersModulesIds: usersModulesIdsToDelete,
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

  // TESTS
  // console.log("userModulesData", userModulesData);
  // console.log("usersModulesForThisService", usersModulesForThisService);

  if (isDataLoading) {
    return <LayoutLoading crumbs={[navigationBreadcrumbs[1]]} />;
  }

  return (
    <AuthenticatedLayout>
      <TitleAndMetaTags color="black" title="Your Vault | Vana" />
      <LayoutApp>
        <NavBreadcrumb crumbs={[navigationBreadcrumbs[1]]} />
        <NavHeader heading={`My ${moduleName} data`}>
          <PopoverDataModule>
            <Stack tw="gap-1">
              <Text variant="note">Action menu for this app category.</Text>
              <Text variant="note">
                We&apos;ll make use of this action menu soon…
              </Text>
              {/* <DeleteData
                onDelete={() => deleteAllModuleFiles()}
                isDeleting={isDeleting}
                deletionName={`your ${moduleName}`}
                buttonLabel={`Delete all your ${moduleName} data`}
              /> */}
            </Stack>
          </PopoverDataModule>
        </NavHeader>

        <LayoutCanvas>
          <LayoutCanvasPattern />
          <LayoutCanvasGrid>
            {usersModulesForThisService.map((module) => (
              <DataModule
                key={module.id}
                module={module}
                moduleName={moduleName}
              >
                <DeleteData
                  onDelete={() => deleteAllModuleFiles()}
                  isDeleting={isDeleting}
                  deletionName="this data block"
                  buttonLabel="Delete this data block"
                />
              </DataModule>
            ))}
          </LayoutCanvasGrid>
        </LayoutCanvas>

        {/* INTERACTION STATUS TOASTS */}
        <ToastDefault
          open={showDeleteSuccessToast}
          onOpenChange={setShowDeleteSuccessToast}
          variant="success"
          title="Success!"
          content={`Your ${moduleName} data is securely stored`}
        />
        <ToastDefault
          open={showDeleteFailureToast}
          onOpenChange={setShowDeleteFailureToast}
          duration={12000}
          variant="error"
          title="Error!"
          content="Please reload the page and try again"
        />
      </LayoutApp>
    </AuthenticatedLayout>
  );
};

export default VaultModulePage;
