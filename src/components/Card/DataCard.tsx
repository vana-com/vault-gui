import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeader,
  Stack,
  styledCard,
  styledCardHover,
  styledCardHoverIcon,
} from "src/components";
import { UsersModules } from "src/graphql/generated/sdk";

import { DataCardDetails } from "./DataCardDetails";

interface Props {
  module: UsersModules;
}

/* DataCard is very similar to DataCardButton, uses the same card styles */

const DataCard = ({ module }: Props) => (
  <div css={[styledCard, styledCardHover, styledCardHoverIcon]}>
    {/* Icon appears on hover based on `styledCardHoverIcon` */}
    <Icon
      icon="carbon:maximize"
      height="1.125em"
      tw="opacity-0 absolute right-5 top-6"
    />

    {/* content stack */}
    <Stack tw="h-full justify-between">
      <CardHeader name={module.module.name} />
      <DataCardDetails module={module} />
    </Stack>
  </div>
);

export { DataCard };
