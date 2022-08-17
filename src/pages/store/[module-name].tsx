import { Icon } from "@iconify/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DialogDrawerControlled,
  LayoutCanvas,
  LayoutCanvasPattern,
  LayoutLoading,
  LayoutPage,
  NavBreadcrumb,
  NavHeader,
  PopoverModuleLang,
  StorageInstructions,
  StorageUpload,
  TitleAndMetaTags,
  useUserContext,
} from "src/components";
import { navigationBreadcrumbs } from "src/data";
import {
  useCreateUserModuleMutation,
  useGetModuleQuery,
} from "src/graphql/generated";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultStoragePage: NextPage = () => {
  const router = useRouter();
  const { user, walletProvider } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  // Extract consts from router.query
  const { "module-name": moduleNameFromQuery } = router.query;

  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  const { data: { modules: [module] = [] } = {}, loading: isDataLoading } =
    useGetModuleQuery({
      variables: {
        name: moduleName,
      },
    });

  const [createUserModule] = useCreateUserModuleMutation();

  const createUserModuleCallback = async (
    urlToData: string,
    urlNumber: number,
  ) => {
    await createUserModule({
      variables: {
        urlToData,
        userId: user?.id,
        moduleId: module.id,
        urlNumber,
      },
    });
  };

  // If the module doesn't exist, redirect
  useEffect(() => {
    if (router.isReady && !module && !isDataLoading) {
      router.push("/");
    }
  }, [router, isDataLoading]);

  // If we're awaiting Hasura data, show loading
  if (isDataLoading) {
    return <LayoutLoading crumbs={[navigationBreadcrumbs[0]]} />;
  }

  // Programmtically setIsOpen once only on initial page load
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500);
  }, []);

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title={`Store ${moduleName} Data | Vana`}
      />

      <LayoutPage>
        <NavBreadcrumb crumbs={[navigationBreadcrumbs[0]]} />
        <NavHeader
          heading={`Add ${moduleName} data`}
          headingNode={<PopoverModuleLang />}
        >
          <DialogDrawerControlled
            onOpenChange={setIsOpen}
            open={isOpen}
            buttonNode={
              <Button
                size="md"
                variant="ghost"
                tw="gap-2 font-normal text-labelSecondary focus:text-label"
                prefix={<Icon icon="carbon:list-checked" height="1em" />}
                onClick={() => setIsOpen(true)}
              >
                Request <span tw="hidden lg:inline">your {moduleName}</span>{" "}
                data
              </Button>
            }
          >
            <StorageInstructions moduleName={moduleName as any} />
          </DialogDrawerControlled>
        </NavHeader>

        <LayoutCanvas>
          <LayoutCanvasPattern />
          <StorageUpload
            moduleName={moduleName}
            createUserModule={createUserModuleCallback}
            externalId={user?.externalId ?? ""}
            web3AuthWalletProvider={walletProvider}
          />
        </LayoutCanvas>
      </LayoutPage>
    </>
  );
};

export default VaultStoragePage;
