import React from "react";

import { Box } from "src/components";

import * as styles from "./Link.css";

// TODO: inherit styles prop…
export type LinkProps = {
  // variant?: styles.TextVariant;
  // this Pick doesn't work, why not?
  // underline?: Pick<styles.LinkStyleProps, "underline">;
  underline?: boolean;
  children?: React.ReactNode;
  // css escape hatch
  [key: string]: any;
};

export const Link = ({
  children,
  underline = true,
  ...boxProps
}: LinkProps) => (
  <Box
    as="a"
    css={[styles.textStyles({ underline }), boxProps.css]}
    {...boxProps}
  >
    {children}
  </Box>
);
