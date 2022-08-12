// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

import {
  Flex,
  LayoutApp,
  LayoutAppNoAside,
  LayoutCanvas,
  LayoutCanvasPattern,
  NavBreadcrumb,
  NavHeaderRule,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import { NavCrumb } from "src/types";

interface Props {
  crumbs?: NavCrumb[];
  showAside?: boolean;
}

const LayoutLoading = ({ crumbs, showAside = true }: Props) => (
  <>
    <TitleAndMetaTags color="black" title="Loading Vault… | Vana" />
    {showAside ? (
      <LayoutApp>
        <NavBreadcrumb crumbs={crumbs} />
        <NavHeaderRule />
        <LayoutCanvas>
          <LayoutCanvasPattern />
          <Flex tw="px-inset pt-inset min-h-[260px] w-full items-center justify-center">
            <Spinner />
          </Flex>
        </LayoutCanvas>
      </LayoutApp>
    ) : (
      <LayoutAppNoAside>
        <LayoutCanvas>
          <LayoutCanvasPattern />
          <Flex tw="px-inset pt-inset min-h-[260px] w-full items-center justify-center">
            <Spinner />
          </Flex>
        </LayoutCanvas>
      </LayoutAppNoAside>
    )}
  </>
);

export { LayoutLoading };
