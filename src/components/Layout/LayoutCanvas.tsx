import tw, { css } from "twin.macro";

import { Children } from "src/types";

/* Our primary content container for the user's data */
const LayoutCanvas = ({ children }: Children) => (
  <main tw="p-inset flex flex-1">
    <div tw="relative w-full">{children}</div>
  </main>
);

/* The grid space for any canvas layout that requires it */
const layoutCanvasGridStyle = [
  tw`relative grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3`,
];

/* …is also supplied as a component for fleible use. A choice betwene which will be made soon… */
const LayoutCanvasGrid = ({ children }: Children) => (
  <div css={layoutCanvasGridStyle}>{children}</div>
);

/* 
  A background pattern to provide focus for the Canvas.
  This pattern is from https://heropatterns.com/
 */
const canvasPattern = [
  css`
    background-image: url(/images/plus.svg);
    opacity: 0.05;
    @media (prefers-color-scheme: dark) {
      background-image: url(/images/plus-white.svg);
      opacity: 0.07;
    }
  `,
];

const LayoutCanvasPattern = () => (
  <div css={[tw`absolute inset-0`, canvasPattern]} />
);

export {
  canvasPattern,
  LayoutCanvas,
  LayoutCanvasGrid,
  layoutCanvasGridStyle,
  LayoutCanvasPattern,
};
