import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Center,
  Flex,
  LayoutApp,
  LayoutCanvas,
  LayoutCanvasPattern,
  LayoutPage,
  Spinner,
} from "src/components";
// import { FocusStack } from "src/components/VaultShare";

/* 
  A one-off: we only show this when authenticating a user. 
  We want to show a full UI w/o the AsideNav. 
  Thus separating LayoutPage from LayoutApp.
 */

const LayoutLoadingNoUser = () => {
  const router = useRouter();
  const isSendPath = router.pathname === "/share";

  return (
    <>
      {isSendPath ? (
        <Center tw="h-screen">
          <Spinner />
        </Center>
      ) : (
        <LayoutApp renderNavMobile={false}>
          <LayoutPage showAsAuthenticated={false}>
            <LayoutCanvas>
              <LayoutCanvasPattern />
              <Flex tw="px-inset pt-inset min-h-[260px] w-full items-center justify-center">
                <Spinner />
              </Flex>
            </LayoutCanvas>
          </LayoutPage>
        </LayoutApp>
      )}
    </>
  );
};

export { LayoutLoadingNoUser };
