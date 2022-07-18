import type { NextPage } from 'next'
import {
  Box,
  Button,
  ModuleButton,
  CardHeaderVaultNoModules,
  Container,
  Divider,
  DrawerMenu,
  Flex,
  PageVault,
  PopoverHelp,
  Text,
  TitleAndMetaTags,
} from 'components'
import tw, { styled, css, theme } from 'twin.macro'
import { testModules } from 'data'

const Home: NextPage = () => {
  const testDataModule = [testModules.at(-1)]
  // const hasStoredModules = !!userModulesData?.usersModules?.length;
  const hasStoredModules = testDataModule

  return (
    <>
      <TitleAndMetaTags color="black" />

      <PageVault>
        <Flex tw="w-full flex-col gap-4">
          <Flex tw="relative items-end justify-between gap-1 text-gray-500 z-10">
            <Text as="h3" variant="title" weight="medium" tw="text-gray-500">
              Your Data
            </Text>
            <PopoverHelp />
          </Flex>
          <Divider />
          <div tw="grid grid-cols-3 grid-flow-col gap-4 min-h-[140px]">
            <DrawerMenu buttonLabel="Add">
              <CardHeaderVaultNoModules>
                {testModules.map(module => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DrawerMenu>
            {/* FAKE DATA MODULE */}
            {hasStoredModules &&
              testDataModule?.map(module => (
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
  )
}

export default Home
