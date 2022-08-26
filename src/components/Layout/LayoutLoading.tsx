// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  LayoutCanvas,
  LayoutCanvasPattern,
  LayoutPage,
  NavBreadcrumb,
  NavHeaderRule,
  Spinner,
} from "src/components";
import { NavCrumb } from "src/types";

interface Props {
  crumbs?: NavCrumb[];
}

const LayoutLoading = ({ crumbs }: Props) => (
  <>
    <LayoutPage showAsAuthenticated>
      <NavBreadcrumb crumbs={crumbs} />
      <NavHeaderRule />
      <LayoutCanvas>
        <LayoutCanvasPattern />
        <Flex tw="px-inset pt-inset min-h-[260px] w-full items-center justify-center">
          <Spinner />
        </Flex>
      </LayoutCanvas>
    </LayoutPage>
  </>
);

export { LayoutLoading };
