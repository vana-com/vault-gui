import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  DeleteData,
  LayoutApp,
  LayoutLoading,
  NavBreadcrumb,
  NavHeader,
  TitleAndMetaTags,
} from "src/components";
import { navigationBreadcrumbs } from "src/data";
import { useGetUserModulesSubscription } from "src/graphql/generated";
import { hasuraTokenAtom, userAtom } from "src/state";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultModulePage: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDeleting, setIsDeleting] = useState(false);

  // query data
  const { "module-name": moduleNameFromQuery } = router.query;
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  const [user] = useAtom(userAtom);
  const [hasuraToken] = useAtom(hasuraTokenAtom);

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

  if (isDataLoading) {
    return <LayoutLoading crumbs={[navigationBreadcrumbs[1]]} />;
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Your Vault | Vana" />

      <LayoutApp>
        <NavBreadcrumb crumbs={[navigationBreadcrumbs[1]]}>
          {/* <AddData modules={notStoredModules} buttonSize="md" /> */}
        </NavBreadcrumb>

        <NavHeader heading={`My ${moduleName} data`}>
          {/* <PopoverHelp css={tw`text-labelTertiary`} /> */}
        </NavHeader>

        <main tw="px-inset pt-inset">
          <DeleteData
            onDelete={() => deleteAllModuleFiles()}
            isDeleting={isDeleting}
            buttonLabel={`Delete all your ${moduleName} data`}
          />
        </main>
      </LayoutApp>
    </>
  );
};

export default VaultModulePage;
