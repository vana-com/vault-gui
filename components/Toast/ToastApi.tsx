import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";
import { viewport, root, title, description, action } from "./Toast.css";

interface Props {
  title: string;
  content: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const ToastApi = ({ title, content, children, ...props }: Props) => {
  return (
    <>
      <ToastPrimitive.Root className={root} {...props}>
        {title && <ToastPrimitive.Title>{title}</ToastPrimitive.Title>}
        <ToastPrimitive.Description className={description}>
          {content}
        </ToastPrimitive.Description>
        {children && (
          <ToastPrimitive.Action
            className={action}
            asChild
            altText="hey I am alt text"
          >
            {children}
          </ToastPrimitive.Action>
        )}
        <ToastPrimitive.Close aria-label="Close">
          <span aria-hidden>×</span>
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className={viewport} />
    </>
  );
};
