import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";

import * as styles from "./Toast.css";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export const ToastImp = React.forwardRef(
  ({ children, ...toastProps }: Props, forwardedRef) => {
    // const { children, ...toastProps } = props;
    const [count, setCount] = React.useState(0);

    React.useImperativeHandle(forwardedRef, () => ({
      // eslint-disable-next-line @typescript-eslint/no-shadow
      publish: () => setCount((count) => count + 1),
    }));

    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ToastPrimitive.Root key={index} css={styles.root} {...toastProps}>
            <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
            <ToastPrimitive.Close>Dismiss</ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport css={styles.viewport} />
      </>
    );
  },
);

ToastImp.displayName = "ToastImp";
