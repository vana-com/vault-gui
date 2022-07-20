import {
  CardHeaderVaultNoModules,
  DrawerMenu,
  Flex,
  ModuleButton,
  PageVault,
  PopoverHelp,
  Text,
  TitleAndMetaTags,
} from "components";
import { testModules } from "data";
import type { NextPage } from "next";
import tw from "twin.macro";

const HomePage: NextPage = () => {
  const testDataModule = [testModules.at(-1)];
  // const hasStoredModules = !!userModulesData?.usersModules?.length;
  const hasStoredModules = testDataModule;

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
                {testModules.map((module) => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DrawerMenu>
            {/* FAKE DATA MODULE */}
            {hasStoredModules &&
              testDataModule?.map((module) => (
                <ModuleButton
                  key={module.id}
                  name={module.name}
                  isLarge
                  isStored
                />
              ))}
          </div>
        </Flex>
      </PageVault>
    </>
  );
};

export default HomePage;
