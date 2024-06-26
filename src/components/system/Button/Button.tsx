import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Box, Spinner } from "src/components";
import { TwCss } from "src/types";

import * as styles from "./Button.css";

type BaseProps = {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  id?: string;
  isLoading?: boolean;
  css?: TwCss;
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
      css,
      ...boxProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => (
    <Box
      ref={ref}
      as={boxProps.as ?? "button"}
      {...boxProps}
      css={[styles.styledButton({ size, variant, round, isDisabled }), css]}
      disabled={isDisabled}
      id={id}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {prefix && <div tw="relative inline-flex">{prefix}</div>}
          <span tw="relative">{children}</span>
          {suffix && <div tw="relative inline-flex">{suffix}</div>}
        </>
      )}
    </Box>
  ),
);

Button.displayName = "Button";
