import tw, { css, theme } from "twin.macro";

interface Props {
  children: React.ReactNode;
}

// Control the content min-height here (rather than in LayoutApp's Content)
// so that we pass directly to the body siblings
const shellRootStyle = [
  tw`grid gap-0`,
  css`
    grid: "sidebar body" 1fr / auto 1fr;
    min-height: calc(100vh - ${theme`spacing.navHPlusPx`});
  `,
];

const ShellRoot = ({ children }: Props) => (
  <div css={shellRootStyle}>{children}</div>
);

// hidden on mobile
const sidebarStyle = [
  tw`relative w-asideW`,
  tw`hidden sm:block`,
  css`
    grid-area: sidebar;
  `,
];

const Sidebar = ({ children }: Props) => (
  <div css={sidebarStyle}>{children}</div>
);

// body is always rendered, so set L & R borders here
const bodyStyle = [
  tw`relative border-l border-r bg-background border-separator`,
  tw`flex flex-col`,
  css`
    grid-area: body;
  `,
];

const Body = ({ children }: Props) => <div css={bodyStyle}>{children}</div>;

export const LayoutShell = Object.assign(ShellRoot, {
  Sidebar,
  Body,
});
