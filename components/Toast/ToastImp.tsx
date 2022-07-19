import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";
import { viewport, root, title, description, action } from "./Toast.css";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export const ToastImp = React.forwardRef(
  ({ children, ...toastProps }: Props, forwardedRef) => {
    // const { children, ...toastProps } = props;
    const [count, setCount] = React.useState(0);

    React.useImperativeHandle(forwardedRef, () => ({
      publish: () => setCount((count) => count + 1),
    }));

    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <ToastPrimitive.Root key={index} className={root} {...toastProps}>
            <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
            <ToastPrimitive.Close>Dismiss</ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className={viewport} />
      </>
    );
  }
);

ToastImp.displayName = "ToastImp";
