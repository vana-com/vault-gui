import tw, { css } from "twin.macro";

import { ContainerFull } from "src/components";

export const NAV_HEIGHT = 80;

const outerStyle = () => [tw`fixed z-10 bg-background`];

const innerStyle = () => [
  tw`grid items-center grid-cols-12 gap-4`,
  css`
    height: ${NAV_HEIGHT}px;
  `,
];

interface Props {
  children: React.ReactNode;
}

const NavbarWrapper = ({ children }: Props) => (
  <ContainerFull css={outerStyle()}>
    <div>
      <div css={innerStyle()}>{children}</div>
      <hr />
    </div>
  </ContainerFull>
);

export { NavbarWrapper };
