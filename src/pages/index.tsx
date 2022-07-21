import type { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultNoModules,
  DialogDrawerMenu,
  Flex,
  ModuleButton,
  PageVault,
  PopoverHelp,
  Text,
  TitleAndMetaTags,
} from "src/components";
import { testModules } from "src/data";

// interface Module {
//   id: string;
//   name: string;
// }

const HomePage: NextPage = () => {
  // const testDataModule = [testModules.at(-1)];
  const testDataModule = testModules.slice(-1).pop();
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
            <DialogDrawerMenu buttonLabel="Add">
              <CardHeaderVaultNoModules>
                {testModules.map((module) => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DialogDrawerMenu>
            {/* FAKE DATA MODULE */}
            {hasStoredModules && (
              <ModuleButton
                key={testDataModule.id}
                name={testDataModule.name}
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
