import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css, theme } from "twin.macro";

import { Group, Text } from "src/components";

const checkboxStyle = [
  css({
    all: "unset",
  }),
  tw`bg-label w-[18px] h-[18px] rounded-sm flex items-center justify-center cursor-pointer`,
  tw`hover:(bg-labelSecondary)`,
  css`
    box-shadow: 0 2px 10px ${theme`colors.background`};
    &:focus {
      box-shadow: 0 0 0 2px ${theme`colors.background`};
    }
  `,
];

// Exports
export const Checkbox = CheckboxPrimitive.Root;
export const CheckboxIndicator = CheckboxPrimitive.Indicator;

interface Props {
  label: string;
}

export const CheckboxDefault = ({ label }: Props) => (
  <form>
    <Group tw="items-center gap-2.5">
      <Checkbox defaultChecked id="c1" css={checkboxStyle}>
        <CheckboxIndicator tw="text-accent">
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Text
        as="label"
        color="label"
        variant="note"
        tw="cursor-pointer"
        htmlFor="c1"
      >
        {label}
      </Text>
    </Group>
  </form>
);

export default CheckboxDefault;
