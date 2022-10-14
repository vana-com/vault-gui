import { Icon } from "@iconify/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { BuiltInProviderType } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";
import { ClientSafeProvider, LiteralUnion } from "next-auth/react/types";
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
import { formatModuleNameForUI } from "src/utils";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

const VaultStoragePage: NextPage<Props> = ({ providers }: Props) => {
  const router = useRouter();
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  // Extract consts from router.query
  const { "module-name": moduleNameFromQuery } = router.query;

  const moduleName = formatModuleNameForUI(moduleNameFromQuery as string);

  const { data: { modules: [module] = [] } = {}, loading: isDataLoading } =
    useGetModuleQuery({
      variables: {
        name: `%${moduleName}%`,
      },
    });

  const [createUserModule] = useCreateUserModuleMutation();

  const createUserModuleCallback = async (
    urlToData: string,
    urlNumber: number,
    fileName: string,
    fileSize: number,
  ) => {
    await createUserModule({
      variables: {
        urlToData,
        userId: user?.id,
        moduleId: module.id,
        urlNumber,
        fileName,
        fileSize,
      },
    });
  };

  // If the module doesn't exist, redirect
  useEffect(() => {
    if (router.isReady && !module && !isDataLoading) {
      router.push("/");
    }
  }, [router, isDataLoading]);

  // Programmatically setIsOpen once only on initial page load
  useEffect(() => {
    if (!isDataLoading) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, [isDataLoading]);

  // If we're awaiting Hasura data, show loading
  if (isDataLoading) {
    return <LayoutLoading crumbs={[navigationBreadcrumbs[0]]} />;
  }

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
                prefix={<Icon icon="carbon:list-checked" />}
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
          />

          {/* Sign in with social provider */}
          {providers &&
            Object.values(providers)
              .filter((provider) => provider.id === moduleName.toLowerCase())
              .map((provider) => (
                <div key={provider.name}>
                  <Button
                    onClick={() => signIn(provider.id)}
                    variant="solid"
                    size="xl"
                    tw="md:w-full font-semibold mt-2"
                    suffix={<Icon icon="carbon:key" height="1.2em" />}
                  >
                    Sign in with {moduleName}
                  </Button>
                </div>
              ))}
        </LayoutCanvas>
      </LayoutPage>
    </>
  );
};

export default VaultStoragePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
