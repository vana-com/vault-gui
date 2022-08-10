import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Card,
  Container,
  LoginButton,
  LogoutButton,
  NAV_HEIGHT,
} from "src/components";
import { CarbonArrowLeft } from "src/components/Icons";

import { useUserContext } from "../UserAccess/UserContext";

/* PageVault is the default page layout + header for a Vault page */

type PageVaultProps = {
  showBackLink?: boolean;
  children: React.ReactNode;
};

const PageVault = ({ children, showBackLink }: PageVaultProps) => {
  const { user, loginUser, logoutUser, loginError, isLoading } =
    useUserContext();

  return (
    <div tw="relative">
      {/* HIDDEN FOR A HOT MINUTE — TODO: Callum refactoring shortly based on new UI design */}
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
          {user && <LogoutButton logOut={logoutUser} isLoading={isLoading} />}
          {!user && (
            <LoginButton
              logIn={loginUser}
              loginError={loginError}
              isLoading={isLoading}
            />
          )}
        </div>
      )}

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
