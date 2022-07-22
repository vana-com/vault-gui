import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Box, Spinner } from "src/components";

import * as styles from "./Button.css";

type BaseProps = {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  id?: string;
  isLoading?: boolean;
} & styles.ButtonStyleProps &
  Pick<
    JSX.IntrinsicElements["button"],
    | "onClick"
    | "onMouseEnter"
    | "onMouseLeave"
    | "children"
    | "disabled"
    | "type"
    | "tabIndex"
  >;

type WithAnchor = {
  as?: "a";
} & Pick<JSX.IntrinsicElements["a"], "href" | "rel" | "target">;

type WithoutAnchor = {
  as?: "button";
};

export type ButtonProps = BaseProps & (WithAnchor | WithoutAnchor);

export const Button = React.forwardRef(
  (
    {
      children,
      id,
      isDisabled,
      isLoading,
      prefix,
      round,
      size,
      suffix,
      variant,
      ...buttonProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => (
    <Box
      ref={ref}
      {...buttonProps}
      css={styles.buttonStyle({ size, variant, round, isDisabled })}
      id={id}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {prefix && <div tw="inline-flex">{prefix}</div>}
          {children}
          {suffix && <div tw="inline-flex">{suffix}</div>}
        </>
      )}
    </Box>
  ),
);

Button.displayName = "Button";
