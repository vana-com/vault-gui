import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";

import { CarbonCloseFilled } from "src/components/Icons";

import * as styles from "./Toast.css";

interface Props {
  title: string;
  content: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const ToastApi = ({
  title,
  content,
  children,
  ...toastProps
}: Props) => (
  <>
    <ToastPrimitive.Root css={styles.root} {...toastProps}>
      {title && (
        <ToastPrimitive.Title css={styles.title}>{title}</ToastPrimitive.Title>
      )}
      <ToastPrimitive.Description css={styles.description}>
        {content}
      </ToastPrimitive.Description>
      {children && (
        <ToastPrimitive.Action
          css={styles.action}
          asChild
          altText="hey I am alt text"
        >
          {children}
        </ToastPrimitive.Action>
      )}
      <ToastPrimitive.Close aria-label="Close">
        <CarbonCloseFilled />
        <span aria-hidden />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport css={styles.viewport} />
  </>
);
