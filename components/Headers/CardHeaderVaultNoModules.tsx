import { CardHeaderStack, Box, Text } from 'components'

type Props = {
  children: React.ReactNode
}

const CardHeaderVaultNoModules = ({ children }: Props) => (
  <>
    <CardHeaderStack tw="gap-1 justify-center">
      {/* title2  color="label" */}
      <Text variant="title" tw="text-center" weight="medium">
        Store your Data
      </Text>
      {/* color="labelTertiary" */}
      <Text variant="body" tw="text-center">
        To get started, choose an app
      </Text>
    </CardHeaderStack>

    {/* CTA */}
    <div tw="flex flex-col lg:flex-row justify-center gap-4 pt-7">
      {children}
    </div>
  </>
)

export { CardHeaderVaultNoModules }
