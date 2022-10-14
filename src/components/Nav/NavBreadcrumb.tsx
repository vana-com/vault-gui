import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { Fragment } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Text } from "src/components";
import { NavCrumb } from "src/types";

interface Props {
  children?: React.ReactNode;
  crumbs?: NavCrumb[];
}

const NavBreadcrumb = ({ children, crumbs }: Props) => (
  <Group
    tw="px-inset pt-insetHalf items-center"
    css={[children && tw`justify-between`]}
  >
    <Group tw="items-center gap-1 text-labelSecondary h-navLinkH">
      <NextLink passHref href="/">
        <Text as="a" variant="note" weight="medium" tw="">
          My data
        </Text>
      </NextLink>
      {crumbs &&
        crumbs.length > 0 &&
        crumbs.map((crumb) => (
          <Fragment key={crumb.label}>
            <Icon icon="heroicons-solid:chevron-right" height="0.8em" />
            <Text variant="note" weight="medium">
              {crumb.label}
            </Text>
          </Fragment>
        ))}
    </Group>

    {children}
  </Group>
);

export { NavBreadcrumb };
