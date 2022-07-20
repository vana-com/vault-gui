import React from "react";

import { Box } from "src/components";

import * as styles from "./Text.css";

// TODO: inherit styles prop…
export type TextProps = {
  as?:
    | "code"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "input"
    | "p"
    | "ol"
    | "ul"
    | "li"
    | "span";
  variant?: styles.TextVariant;
  weight?: styles.TextWeight;
  color?: styles.TextColor;
  children?: React.ReactNode;
  // css escape hatch
  [key: string]: any;
};

export const Text = ({
  as = "div",
  children,
  variant = "body",
  weight, // allow variant weight to take precedence
  color = "label",
  ...boxProps
}: TextProps) => (
  <Box
    as={as}
    css={[styles.textStyles({ variant, weight, color }), boxProps.css]}
    {...boxProps}
  >
    {children}
  </Box>
);
