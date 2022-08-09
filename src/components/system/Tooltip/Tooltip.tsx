import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import * as styles from "./Tooltip.css";

// Exports
// TooltipPrimitive.Provider is set in `_app`
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipArrow = TooltipPrimitive.Arrow;

interface ContentProps {
  children: React.ReactNode;
  [key: string]: any;
}

function Content({ children, ...props }: ContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content css={styles.styledTooltipContent} {...props}>
        {children}
        <TooltipArrow css={styles.styledTooltipArrow} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export const TooltipContent = Content;

interface Props {
  children: React.ReactNode;
  label: string;
  align?: string;
  side?: string;
  sideOffset?: number;
}

const TooltipDefault = ({
  children,
  label,
  align = "start",
  side,
  sideOffset = 5,
}: Props) => (
  <Tooltip>
    <TooltipTrigger asChild>
      {/* <IconButton>
          <PlusIcon />
        </IconButton> */}
      {children}
    </TooltipTrigger>
    <TooltipContent align={align} side={side} sideOffset={sideOffset}>
      {label}
    </TooltipContent>
  </Tooltip>
);

export { TooltipDefault };
