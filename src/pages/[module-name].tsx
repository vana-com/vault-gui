import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultModule,
  DeleteData,
  Flex,
  PageVault,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import { AuthenticatedPage } from "src/components/AuthenticatedPage";
import { useUserContext } from "src/components/UserAccess/UserContext";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultModulePage: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDeleting, setIsDeleting] = useState(false);

  // query data
  const { "module-name": moduleNameFromQuery } = router.query;
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  const { user, hasuraToken, isLoading: isUserLoading } = useUserContext();

  const { data: userModulesData, loading: isDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const usersModulesForName = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) => userModule.module.name === moduleName,
      )
    : [];

  // If the module doesn't exist, redirect
  useEffect(() => {
    if (
      router.isReady &&
      usersModulesForName.length === 0 &&
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
    const usersModulesIdsToDelete = usersModulesForName.map(
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
      // TODO: show success toast
      setTimeout(() => router.push("/"), 250);
    } else {
      setIsDeleting(false);
      // TODO: show failure toast
    }
  };

  return (
    <AuthenticatedPage>
      <TitleAndMetaTags color="black" title="Your Vault | Vana" />

      <PageVault showBackLink>
        {userModulesData !== undefined && !isDataLoading && !isUserLoading ? (
          <div tw="flex flex-col gap-8 w-full">
            <CardHeaderVaultModule moduleName={moduleName}>
              Vana encrypts your data before storing.
            </CardHeaderVaultModule>
            <hr />
            <div tw="flex flex-col gap-2 items-center">
              <div css={usersModulesForName?.length < 2 && tw`pt-1`}>
                <DeleteData
                  onDelete={() => deleteAllModuleFiles()}
                  isDeleting={isDeleting}
                  buttonLabel={`Delete all your ${moduleName} data`}
                />
              </div>
            </div>
          </div>
        ) : (
          <Flex tw="w-full items-center justify-center">
            <Spinner />
          </Flex>
        )}
      </PageVault>
    </AuthenticatedPage>
  );
};

export default VaultModulePage;
