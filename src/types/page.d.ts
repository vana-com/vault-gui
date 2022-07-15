import { ComponentType, ReactElement, ReactNode } from "react";

/* 
  These Next types fix nested layouts
  Taken from https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5 
  
  https://stackoverflow.com/a/65898224
 */

// TODO: fix types
// eslint-disable-next-line @typescript-eslint/ban-types
export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
