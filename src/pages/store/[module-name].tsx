import { useAtom } from "jotai";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultModule,
  PageVault,
  Stack,
  StorageInstructions,
  TitleAndMetaTags,
  VaultStoreUpload,
} from "src/components";
import {
  useCreateUserModuleMutation,
  useGetModuleQuery,
} from "src/graphql/generated";
import { userAtom } from "src/state";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultStoragePage: NextPage = () => {
  const router = useRouter();

  // use Jotai
  const [user] = useAtom(userAtom);

  console.log("user", user);

  // Extract consts from router.query
  const { "module-name": moduleNameFromQuery } = router.query;

  // Module name
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
  }, [router]);

  // TODO: handle loading state
  if (isDataLoading) {
    return null;
  }

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title={`Store ${moduleName} Data | Vana`}
      />

      <PageVault showBackLink>
        <div tw="w-full">
          <Stack tw="gap-5 w-full">
            <CardHeaderVaultModule moduleName={moduleName}>
              Your data is only accessible by you.
            </CardHeaderVaultModule>
            <hr />
          </Stack>
          <Stack tw="gap-0">
            <StorageInstructions moduleName={moduleName} />
            <hr />
          </Stack>
          <div tw="pt-5">
            <VaultStoreUpload
              moduleName={moduleName}
              createUserModule={createUserModuleCallback}
              appPubKey={user?.externalId ?? ""}
            />
          </div>
        </div>
      </PageVault>
    </>
  );
};

export default VaultStoragePage;
