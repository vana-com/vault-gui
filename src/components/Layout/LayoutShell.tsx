import tw, { css } from "twin.macro";

interface Props {
  children: React.ReactNode;
}

const shellGridStyle = () => [
  tw`grid min-h-screen gap-0`,
  css`
    grid: "sidebar body" 1fr / auto 1fr;
  `,
];

const ShellRoot = ({ children }: Props) => (
  <div css={shellGridStyle()}>{children}</div>
);

const sidebarStyle = () => [
  tw`w-[250px] relative`,
  css`
    grid-area: sidebar;
  `,
];

const Sidebar = ({ children }: Props) => (
  <div css={sidebarStyle()}>{children}</div>
);

const bodyStyle = () => [
  tw`relative`,
  css`
    grid-area: body;
  `,
];

const Body = ({ children }: Props) => <div css={bodyStyle()}>{children}</div>;

// export { LayoutShell };
export const Shell = Object.assign(ShellRoot, {
  Sidebar,
  Body,
});
