import { useAtom } from "jotai";
import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Card,
  Container,
  HeaderBasic,
  Logout,
  NAV_HEIGHT,
} from "src/components";
import { CarbonArrowLeft } from "src/components/Icons";
import { userAtom } from "src/state";

/* PageVault is the default page layout + header for a Vault page */

type PageVaultProps = {
  showBackLink?: boolean;
  children: React.ReactNode;
};

const PageVault = ({ children, showBackLink }: PageVaultProps) => {
  const [user] = useAtom(userAtom);

  return (
    <div tw="relative">
      {/* HIDDEN */}
      {showBackLink && (
        <div tw="fixed top-8 left-8 z-10 hidden">
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
      {user && (
        <div tw="fixed top-8 right-8 z-10 hidden">
          <Logout />
        </div>
      )}

      {/* NOT HIDDEN */}
      <Container
        tw="relative"
        css={{ paddingTop: `${NAV_HEIGHT * 2}px` }}
        size="lg"
      >
        <div tw="flex flex-col gap-8 relative">
          {/* <HeaderBasic
            heading="Vault"
            subheading="Unlock the power of your data"
          /> */}

          <Card>{children}</Card>
        </div>
      </Container>
    </div>
  );
};

export { PageVault };
