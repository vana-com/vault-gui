import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AddData,
  Button,
  CheckboxDefault,
  LayoutApp,
  LayoutLoading,
  NavBreadcrumb,
  NavHeader,
  Stack,
  StorageInstructionsModal,
  StorageUpload,
  Text,
  TitleAndMetaTags,
  WithIcon,
} from "src/components";
import { navigationBreadcrumbs } from "src/data";
import {
  useCreateUserModuleMutation,
  useGetModuleQuery,
} from "src/graphql/generated";
import { userAtom, web3AuthWalletProviderAtom } from "src/state";
import { formatModuleNameFromQueryString } from "src/utils";

const VaultStoragePage: NextPage = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const [web3AuthWalletProvider] = useAtom(web3AuthWalletProviderAtom);
  const [isEnglishAccount, setIsEnglishAccount] = useState(false);

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
  }, [router]);

  if (isDataLoading) {
    return <LayoutLoading crumbs={[navigationBreadcrumbs[0]]} />;
  }

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title={`Store ${moduleName} Data | Vana`}
      />

      <LayoutApp>
        <NavBreadcrumb crumbs={[navigationBreadcrumbs[0]]}>
          {/* <AddData modules={notStoredModules} buttonSize="md" /> */}
        </NavBreadcrumb>

        <NavHeader heading={`Add my ${moduleName} data`}>
          {/* <PopoverHelp css={tw`text-labelTertiary`} /> */}
          <StorageInstructionsModal moduleName={moduleName as any} />
        </NavHeader>

        <main tw="px-inset relative">
          {/* POST-ACCEPTANCE */}
          {/* <Stack tw="gap-0">
            <StorageInstructions moduleName={moduleName as any} />
            <hr />
          </Stack> */}
          <div tw="pt-inset">
            {isEnglishAccount ? (
              <StorageUpload
                moduleName={moduleName}
                createUserModule={createUserModuleCallback}
                appPubKey={user?.externalId ?? ""}
                web3AuthWalletProvider={web3AuthWalletProvider}
              />
            ) : (
              <div tw="border border-error rounded-[15px] p-inset flex items-center justify-center">
                <Stack tw="gap-3 max-w-xl">
                  <Stack tw="gap-0.5">
                    <Text
                      variant="heading"
                      tw="text-error flex gap-1 items-center"
                    >
                      <WithIcon
                        prefix={
                          <Icon
                            icon="heroicons-solid:exclamation-circle"
                            height="1em"
                          />
                        }
                      >
                        English languages accounts only
                      </WithIcon>
                    </Text>
                    <Text variant="base" tw="text-labelSecondary">
                      For the time being, We only service English language
                      accounts. We will offer multiple languages in future.
                    </Text>
                  </Stack>
                  <hr />
                  <div tw="pt-2">
                    {/* <CheckboxDefault
                      label={`My ${moduleName} account is in English`}
                      handleCheckChanged={() => setIsEnglishAccount(true)}
                    /> */}
                    <Button
                      variant="outline"
                      size="lg"
                      prefix={
                        <Icon icon="heroicons-solid:check" height="1em" />
                      }
                      onClick={() => setIsEnglishAccount(true)}
                    >
                      My {moduleName} account is in English
                    </Button>
                  </div>
                </Stack>
              </div>
            )}
          </div>
        </main>
      </LayoutApp>
    </>
  );
};

export default VaultStoragePage;
