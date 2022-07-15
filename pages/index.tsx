import type { NextPage } from 'next'
import {
  Box,
  Button,
  Container,
  Flex,
  PageVault,
  PopoverHelp,
  Text,
  TitleAndMetaTags,
} from 'components'
import { tw } from 'twind'
import { css, theme } from 'twind/css'
import { testModules } from 'data'

const Home: NextPage = () => {
  const testDataModule = [testModules.at(-1)]
  // const hasStoredModules = !!userModulesData?.usersModules?.length;
  const hasStoredModules = testDataModule

  return (
    <>
      <TitleAndMetaTags color="black" />

      <PageVault>
        <Flex className={tw('w-full flex-col gap-4')}>
          <Flex
            className={tw(
              'relative items-end justify-between gap-1 text-gray-500 z-10'
            )}
          >
            <Text
              as="h3"
              variant="title"
              weight="medium"
              className={tw('text-gray-500')}
            >
              Your Data
            </Text>
            <PopoverHelp />
          </Flex>
          <Box as="hr" className={tw('w-full')} />
          <Box
            className={tw('grid grid-cols-3 grid-flow-col gap-4 min-h-[140px]')}
          >
            DRAWER
            {/* <DrawerMenu buttonLabel="Add">
              <CardHeaderVaultNoModules>
                {testModules.map(module => (
                  <ModuleButton key={module.id} name={module.name} />
                ))}
              </CardHeaderVaultNoModules>
            </DrawerMenu> */}
            {/* FAKE DATA MODULE */}
            {hasStoredModules && (
              <>
                {testDataModule.map(module => (
                  <Button key={module.id} name={module.name} isLarge isStored />
                ))}
              </>
            )}
          </Box>
        </Flex>
      </PageVault>
    </>
  )
}

export default Home
