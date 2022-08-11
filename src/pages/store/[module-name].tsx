import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultModule,
  Flex,
  PageVault,
  Spinner,
  Stack,
  StorageInstructions,
  StorageUpload,
  TitleAndMetaTags,
} from "src/components";
import { AuthenticatedPage } from "src/components/AuthenticatedPage";
import { useUserContext } from "src/components/UserAccess/UserContext";
import {
  useCreateUserModuleMutation,
  useGetModuleQuery,
} from "src/graphql/generated";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultStoragePage: NextPage = () => {
  const router = useRouter();
  const { user, walletProvider, isLoading: isUserLoading } = useUserContext();

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

  return (
    <AuthenticatedPage>
      <TitleAndMetaTags
        color="black"
        title={`Store ${moduleName} Data | Vana`}
      />

      <PageVault showBackLink>
        {user && module && !isDataLoading && !isUserLoading ? (
          <div tw="w-full">
            <Stack tw="gap-5 w-full">
              <CardHeaderVaultModule moduleName={moduleName}>
                Your data is only accessible by you.
              </CardHeaderVaultModule>
              <hr />
            </Stack>
            <Stack tw="gap-0">
              <StorageInstructions moduleName={moduleName as any} />
              <hr />
            </Stack>
            <div tw="pt-5">
              <StorageUpload
                moduleName={moduleName}
                createUserModule={createUserModuleCallback}
                externalId={user?.externalId ?? ""}
                web3AuthWalletProvider={walletProvider}
              />
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

export default VaultStoragePage;
