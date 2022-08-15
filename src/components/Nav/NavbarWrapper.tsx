// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

export const NAV_HEIGHT = 80;

// const innerStyle = () => [tw`grid items-center grid-cols-12 gap-4 h-navH`];

interface Props {
  children: React.ReactNode;
}
// fixed
const NavbarWrapper = ({ children }: Props) => (
  <div tw="z-10 bg-background w-full sticky">
    <div tw="px-inset flex justify-between items-center h-navH">{children}</div>
    <hr />
  </div>
);

export { NavbarWrapper };
