import { Portal } from "@radix-ui/react-portal";
import { useMounted } from "lib/useMounted";
import React from "react";

export const DrawerContext = React.createContext<
  React.RefObject<HTMLDivElement>
>({} as any);

export function DrawerSlot({ children }: { children: React.ReactNode }) {
  const drawerRef = React.useContext(DrawerContext);

  return useMounted() ? (
    <Portal containerRef={drawerRef}>{children}</Portal>
  ) : null;
}
