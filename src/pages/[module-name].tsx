import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultModule,
  DeleteData,
  PageVault,
  SpinnerIcon,
  TitleAndMetaTags,
} from "src/components";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import { idTokenAtom, userAtom } from "src/state";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultModulePage: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDeleting, setIsDeleting] = useState(false);

  // query data
  const { "module-name": moduleNameFromQuery } = router.query;
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  const [user] = useAtom(userAtom);
  const [idToken] = useAtom(idTokenAtom);

  const { data: userModulesData, loading: isDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  console.log("user", user);

  const usersModulesForName = userModulesData
    ? userModulesData.usersModules.filter(
        (userModule) => userModule.module.name === moduleName,
      )
    : [];

  console.log("usersModulesForName", usersModulesForName);

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
      await fetch(`/api/delete-user-data-files`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usersModulesIds: usersModulesIdsToDelete,
          idToken,
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
    <>
      <TitleAndMetaTags color="black" />

      <PageVault showBackLink>
        <div tw="flex flex-col gap-8 w-full">
          <CardHeaderVaultModule moduleName={moduleName}>
            Vana encrypts your data before storing.
          </CardHeaderVaultModule>
          <hr />

          {isDataLoading ? (
            <SpinnerIcon />
          ) : (
            <div tw="flex flex-col gap-2 items-center">
              <div css={usersModulesForName?.length < 2 && tw`pt-1`}>
                <DeleteData
                  onDelete={() => deleteAllModuleFiles()}
                  isDeleting={isDeleting}
                  buttonLabel={`Delete all your ${moduleName} data`}
                />
              </div>
            </div>
          )}
        </div>
      </PageVault>
    </>
  );
};

export default VaultModulePage;
