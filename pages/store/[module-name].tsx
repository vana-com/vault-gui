import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  PageVault,
  CardHeaderVaultModule,
  TitleAndMetaTags,
  Stack,
  VaultStoreUpload,
  StorageInstructions,
} from 'components'
import { formatModuleNameFromQueryString } from 'utils'
import { testUser } from 'data'
import tw from 'twin.macro'

const VaultStoragePage: NextPage = () => {
  const router = useRouter()
  const user = testUser

  // Extract consts from router.query
  const { 'module-name': moduleNameFromQuery, origin: originEncoded } =
    router.query

  // Decode the origin
  // const origin = originEncoded
  //   ? decodeURIComponent(originEncoded as string)
  //   : undefined;

  // Module name
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery)

  // If the module doesn't exist, redirect
  useEffect(() => {
    if (router.isReady && !module) {
      router.push('/')
    }
  }, [router])

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
  )
}

export default VaultStoragePage
