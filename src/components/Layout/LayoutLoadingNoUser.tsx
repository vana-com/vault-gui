// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  LayoutApp,
  LayoutCanvas,
  LayoutCanvasPattern,
  LayoutPage,
  Spinner,
  TitleAndMetaTags,
} from "src/components";

/* 
  A one-off: we only show this when authenticating a user. 
  We want to show a full UI w/o the AsideNav. 
  Thus separating LayoutPage from LayoutApp.
 */

const LayoutLoadingNoUser = () => (
  <>
    <TitleAndMetaTags color="black" title="Loading | Vana" />
    <LayoutApp>
      <LayoutPage showAsAuthenticated={false}>
        <LayoutCanvas>
          <LayoutCanvasPattern />
          <Flex tw="px-inset pt-inset min-h-[260px] w-full items-center justify-center">
            <Spinner />
          </Flex>
        </LayoutCanvas>
      </LayoutPage>
    </LayoutApp>
  </>
);

export { LayoutLoadingNoUser };
