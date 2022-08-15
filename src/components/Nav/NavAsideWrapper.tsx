import tw from "twin.macro";

// zinc-900
const outerStyle = () => [tw`z-10 flex flex-col h-full border-r bg-background`];

// const innerStyle = () => [tw`grid items-center grid-cols-12 gap-4`];

interface Props {
  children: React.ReactNode;
  className?: string;
}

// = "dark"
const NavAsideWrapper = ({ children, className }: Props) => (
  <div css={outerStyle()} className={className}>
    {children}
  </div>
);

export { NavAsideWrapper };
