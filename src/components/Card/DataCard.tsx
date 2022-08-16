import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeader,
  cardHoverIconStyle,
  cardHoverStyle,
  cardStyle,
  Stack,
} from "src/components";
import { ModuleObj } from "src/types";

import { DataCardDetails } from "./DataCardDetails";

interface Props {
  module: ModuleObj;
}

/* DataCard is very similar to DataCardButton, uses the same card styles */

const DataCard = ({ module }: Props) => (
  <div css={[cardStyle, cardHoverStyle, cardHoverIconStyle]}>
    {/* Icon appears on hover based on `cardHoverIconStyle` */}
    <Icon
      icon="carbon:maximize"
      height="1.125em"
      tw="opacity-0 absolute right-5 top-6"
    />

    {/* content stack */}
    <Stack tw="h-full justify-between">
      <CardHeader name={module.module.name} />

      {/* TODO: pass real module details when available */}
      <DataCardDetails />
    </Stack>
  </div>
);

export { DataCard };
