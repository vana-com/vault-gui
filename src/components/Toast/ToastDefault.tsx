import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";

import { CarbonCloseFilled } from "src/components/Icons";

import * as styles from "./Toast.css";

// Rename Primitives for markup use
const ToastViewport = ToastPrimitive.Viewport;
const Toast = ToastPrimitive.Root;
const ToastTitle = ToastPrimitive.Title;
const ToastDescription = ToastPrimitive.Description;
const ToastClose = ToastPrimitive.Close;

interface Props {
  title: string;
  content: string | React.ReactNode;
  children?: React.ReactNode;
  [key: string]: any;
}

const ToastDefault = ({
  title,
  content,
  children,
  variant = "success",
  ...props
}: Props) => (
  <>
    <Toast css={styles.root({ variant })} {...props}>
      {title && <ToastTitle css={styles.title}>{title}</ToastTitle>}
      <ToastDescription css={styles.description}>{content}</ToastDescription>
      {/* use ToastPrimitive.Action here if you need */}
      {children}
      <ToastClose aria-label="Close">
        <CarbonCloseFilled />
      </ToastClose>
    </Toast>
    <ToastViewport css={styles.viewport} />
  </>
);

export { ToastDefault };
