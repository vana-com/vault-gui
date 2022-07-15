import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Card,
  Container,
  HeaderBasic,
  // SimpleColorModeToggle,
} from 'components'
import { CarbonArrowLeft } from 'components/Icons'
import { tw, apply } from 'twind'

/* PageVault is the default page layout + header for a Vault page */

type PageVaultProps = {
  showBackLink?: boolean
  children: React.ReactNode
}

const PageVault = ({ children, showBackLink }: PageVaultProps) => {
  return (
    <Box className={tw('relative')}>
      {showBackLink && (
        <Box className={tw('fixed top-8 left-8 z-10')}>
          <NextLink passHref href="/">
            <Button
              as="a"
              size="md"
              variant="outline"
              prefix={<CarbonArrowLeft />}
            >
              Vault
            </Button>
          </NextLink>
        </Box>
      )}
      {/* <Box className={tw('fixed top-8 right-8 z-10')}>
        <SimpleColorModeToggle />
      </Box> */}
      <Container className={tw('relative pt-[6vh]')} size="lg">
        <Box className={tw('flex flex-col gap-8 relative')}>
          <HeaderBasic
            heading="Vault"
            subheading="Unlock the power of your data"
          />

          <Card>{children}</Card>
        </Box>
      </Container>
    </Box>
  )
}

export { PageVault }
