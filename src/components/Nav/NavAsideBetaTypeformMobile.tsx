import { Icon } from "@iconify/react";
import { PopupButton } from "@typeform/embed-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Text, WithIcon } from "src/components";

const NavAsideBetaTypeformMobile = () => (
  <PopupButton
    id="oFOUdaW6"
    tw="w-full block"
    size={75}
    medium="demo-test"
    hidden={{ foo: "foo value", bar: "bar value" }}
  >
    <Group tw="flex gap-1 flex-1 items-center h-navLinkH">
      {/* <Text variant="headingMeta" weight="bold">
        Beta
      </Text> */}
      <Text variant="note" weight="medium" tw="flex items-center gap-0.5">
        <WithIcon suffix={<Icon icon="carbon:arrow-up-right" rotate="0deg" />}>
          Give feedback
        </WithIcon>
      </Text>
    </Group>
  </PopupButton>
);

export { NavAsideBetaTypeformMobile };
