import NextLink from "next/link";
// import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Card,
  Container,
  HeaderBasic,
  // SimpleColorModeToggle,
} from "src/components";
import { CarbonArrowLeft } from "src/components/Icons";

/* PageVault is the default page layout + header for a Vault page */

type PageVaultProps = {
  showBackLink?: boolean;
  children: React.ReactNode;
};

const PageVault = ({ children, showBackLink }: PageVaultProps) => (
  <div tw="relative">
    {showBackLink && (
      <div tw="fixed top-8 left-8 z-10">
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
      </div>
    )}
    <Container tw="relative pt-[6vh]" size="lg">
      <div tw="flex flex-col gap-8 relative">
        <HeaderBasic
          heading="Vault"
          subheading="Unlock the power of your data"
        />

        <Card>{children}</Card>
      </div>
    </Container>
  </div>
);

export { PageVault };
