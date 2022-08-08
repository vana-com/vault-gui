import tw, { css, theme } from "twin.macro";

interface Props {
  children: React.ReactNode;
}

const shellRootStyle = [
  tw`grid min-h-screen gap-0`,
  css`
    grid: "sidebar body" 1fr / auto 1fr;
    min-height: calc(100vh - ${theme`spacing.navH`});
  `,
];

const ShellRoot = ({ children }: Props) => (
  <div css={shellRootStyle}>{children}</div>
);

const sidebarStyle = [
  tw`relative w-asideW`,
  css`
    grid-area: sidebar;
  `,
];

const Sidebar = ({ children }: Props) => (
  <div css={sidebarStyle}>{children}</div>
);

const bodyStyle = [
  tw`relative border-r bg-background border-opacity-20 border-separator`,
  css`
    grid-area: body;
  `,
];

const Body = ({ children }: Props) => <div css={bodyStyle}>{children}</div>;

// export { LayoutShell };
export const Shell = Object.assign(ShellRoot, {
  Sidebar,
  Body,
});
