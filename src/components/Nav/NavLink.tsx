import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Text, TextVariant, WithIcon } from "src/components";

interface Props {
  // as
  children: React.ReactNode;
  icon?: string;
  variant: TextVariant;
}

const NavLink = ({
  children,
  variant = "base",
  icon = "heroicons-solid:folder",
}: Props) => (
  <Text
    as="a"
    variant={variant}
    weight="medium"
    tw="flex items-center gap-2 px-inset py-2 hover:bg-fillSecondary"
  >
    <>
      {icon ? (
        <WithIcon prefix={<Icon icon={icon} height="0.85em" />}>
          {children}
        </WithIcon>
      ) : (
        {
          children,
        }
      )}
    </>
  </Text>
);

export { NavLink };
