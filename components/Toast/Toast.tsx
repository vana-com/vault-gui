import * as ToastPrimitive from "@radix-ui/react-toast";
import React, { forwardRef } from "react";
import { viewport, root, title, description, action } from "./Toast.css";
import { Button } from "components";

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = ToastPrimitive.Viewport;
export const Toast = ToastPrimitive.Root;
export const ToastTitle = ToastPrimitive.Title;
export const ToastDescription = ToastPrimitive.Description;
export const ToastAction = ToastPrimitive.Action;
export const ToastClose = ToastPrimitive.Close;

// export const ToastContent = forwardRef<
//   React.ElementRef<typeof ToastPrimitive.Content>,
//   React.ComponentProps<typeof ToastPrimitive.Content>
// >(({ children, ...props }, forwardedRef) => (
//   <ToastPrimitive.Content
//     className={content}
//     side="bottom"
//     sideOffset={10}
//     {...props}
//     ref={forwardedRef}
//   >
//     {children}
//     <ToastPrimitive.Arrow className={arrow} />
//   </ToastPrimitive.Content>
// ));
//
// ToastContent.displayName = "ToastContent";

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </Button>

      <Toast open={open} onOpenChange={setOpen} className={root}>
        <ToastTitle className={title}>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild className={description}>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo" className={action}>
          <Button variant="outline" size="s">
            Undo
          </Button>
        </ToastAction>
      </Toast>
      <ToastViewport className={viewport} />
    </>
  );
};
