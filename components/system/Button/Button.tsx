// import { CSSInterpolation } from "@emotion/serialize";
import { Box, SpinnerIcon } from "components";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import * as styles from "./Button.css";

type BaseProps = {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  id?: string;
  isLoading?: boolean;
  // css escape hatch
  // [key: string]: any
  // css?: CSSInterpolation
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

// export const iconSizeMapping: Record<styles.Size, keyof Theme['space']> = {
//   xs: '5',
//   s: '1',
//   m: '1',
//   l: '1',
//   xl: '1',
// }

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
      // shadow,
      size,
      suffix,
      variant,
      // css,
      ...boxProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => (
    <Box
      ref={ref}
      {...boxProps}
      as={boxProps.as ?? "button"}
      // TODO: fix this introduced CSS casecade error…
      // css={[styles.buttonStyle({ size, variant, round, isDisabled }), css]}
      css={styles.buttonStyle({ size, variant, round, isDisabled })}
      id={id}
    >
      {isLoading ? (
        <SpinnerIcon />
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
