import {
  CardHeaderVaultModule,
  PageVault,
  Stack,
  StorageInstructions,
  TitleAndMetaTags,
  VaultStoreUpload,
} from "components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import { formatModuleNameFromQueryString } from "utils";

const VaultStoragePage: NextPage = () => {
  const router = useRouter();

  // Extract consts from router.query
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { "module-name": moduleNameFromQuery, origin: originEncoded } =
    router.query;

  // Decode the origin
  // const origin = originEncoded
  //   ? decodeURIComponent(originEncoded as string)
  //   : undefined;

  // Module name
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  // If the module doesn't exist, redirect
  useEffect(() => {
    if (router.isReady && !module) {
      router.push("/");
    }
  }, [router]);

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
            <VaultStoreUpload moduleName={moduleName} />
          </div>
        </div>
      </PageVault>
    </>
  );
};

export default VaultStoragePage;
