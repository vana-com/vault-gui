import { useAtom } from "jotai";
import type { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultNoModules,
  DrawerMenu,
  Flex,
  ModuleButton,
  PageVault,
  PopoverHelp,
  Text,
  TitleAndMetaTags,
} from "src/components";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";
import { userAtom } from "src/state";

// interface Module {
//   id: string;
//   name: string;
// }

const HomePage: NextPage = () => {
  const [user, _] = useAtom(userAtom);

  const { data: { modules } = {}, loading: isModulesLoading } =
    useGetModulesQuery();

  const { data: userModulesData, loading: isUserModulesDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
    });

  const storedModuleIds = userModulesData?.usersModules
    ? userModulesData.usersModules.map((userModule) => userModule.moduleId)
    : [];

  const notStoredModules = modules?.filter(
    (module) => !storedModuleIds.includes(module.id),
  );

  // TODO: use storedModuleIds and notStoredModules
  console.log("notStoredModules", notStoredModules);

  const hasStoredModules = !!userModulesData?.usersModules?.length;

  // TODO: handle loading state
  if (isModulesLoading || isUserModulesDataLoading) {
    return null;
  }

  return (
    <>
      <TitleAndMetaTags color="black" />

      <PageVault>
        <Flex tw="w-full flex-col gap-4">
          <Flex tw="relative items-end justify-between gap-1 text-gray-500 z-10">
            <Text as="h3" variant="heading">
              Your Data
            </Text>
            <PopoverHelp />
          </Flex>
          <hr />
          <div tw="grid grid-cols-3 grid-flow-col gap-4 min-h-[180px]">
            <DrawerMenu buttonLabel="Add">
              <CardHeaderVaultNoModules>
                {modules?.map((module) => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DrawerMenu>
            {/* FAKE DATA MODULE */}
            {hasStoredModules && (
              <ModuleButton
                key="TODO: add key"
                name="TODO: add module name"
                isLarge
                isStored
              />
            )}
          </div>
        </Flex>
      </PageVault>
    </>
  );
};

export default HomePage;
