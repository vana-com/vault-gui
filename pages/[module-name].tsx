import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  ModuleButton,
  CardHeaderVaultNoModules,
  CardHeaderVaultModule,
  DeleteData,
  DrawerMenu,
  PageVault,
  SpinnerIcon,
  Text,
  TitleAndMetaTags,
} from 'components'
import { formatModuleNameFromQueryString } from 'utils'
import tw from 'twin.macro'
import { testModules } from 'data'

const VaultModulePage: NextPage = () => {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  // query data
  const { 'module-name': moduleNameFromQuery } = router.query
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery)

  // tests
  const testDataModule = [testModules.at(-1)]
  const isDataLoading = false
  const usersModulesForName = testDataModule[0]

  /**
   * Deletes all files a user has stored for a module (ie. Email integration).
   * See deleteSingleFile comment for how deletion is done.
   */
  const deleteAllModuleFiles = () => {
    console.log('deleteAllModuleFiles')
  }

  return (
    <>
      <TitleAndMetaTags color="black" />

      <PageVault showBackLink>
        <div tw="flex flex-col gap-8 w-full">
          <CardHeaderVaultModule moduleName={moduleName}>
            Vana encrypts your data before storing.
          </CardHeaderVaultModule>
          <hr />

          {isDataLoading ? (
            <SpinnerIcon />
          ) : (
            <div tw="flex flex-col gap-2 items-center">
              {/* <>
                {usersModulesForName.length > 1 &&
                    usersModulesForName?.map(userModule => (
                      <DeleteVaultData
                        key={userModule.id}
                        onDelete={() => deleteSingleFile(userModule.id)}
                        isDeleting={isDeleting}
                        buttonLabel={`Delete ${getFileName(
                          userModule.urlToData
                        )}`}
                      />
                    ))}
              </> */}
              <div css={usersModulesForName?.length < 2 && tw`pt-1`}>
                <DeleteData
                  onDelete={() => deleteAllModuleFiles()}
                  isDeleting={isDeleting}
                  buttonLabel={`Delete all your ${moduleName} data`}
                />
              </div>
            </div>
          )}
        </div>
      </PageVault>
    </>
  )
}

export default VaultModulePage
