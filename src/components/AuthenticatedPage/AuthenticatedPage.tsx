import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { PageVault } from "../PageVault";
import { Flex } from "../system/Box";
import { Spinner } from "../system/Spinner";
import { useUserContext } from "../UserAccess/UserContext";

const AuthenticatedPage = ({ children }: any) => {
  const router = useRouter();
  const { user, isLoading, loginUser } = useUserContext();

  if (isLoading) {
    return (
      <PageVault>
        <Flex tw="w-full items-center justify-center">
          <Spinner />
        </Flex>
      </PageVault>
    );
  }

  if (!user) {
    router.push(`/?location=${encodeURIComponent(router.asPath)}`);
    loginUser();
    return <></>;
  }

  return children;
};

export { AuthenticatedPage };
