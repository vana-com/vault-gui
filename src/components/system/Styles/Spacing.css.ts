// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css, theme } from "twin.macro";

// https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md#advanced-css-styling
export const ptBreadcrumbs = css`
  padding-top: calc(${theme`spacing.navH`} + ${theme`spacing.insetHalf`});
`;
