import tw from "twin.macro";

interface InnerProps {
  small?: boolean;
}

const innerStyle = ({ small }: InnerProps) => [
  tw`flex flex-1 rounded-md`,
  small ? tw`p-2.5 lg:p-5` : tw`p-4 lg:p-8`,
];

interface CardProps extends InnerProps {
  children: React.ReactNode;
}

const Card = ({ children, small }: CardProps) => (
  <div
    tw="flex flex-col rounded-lg shadow-lg
    min-h-[195px] h-full overflow-hidden
    bg-backgroundElevated"
  >
    <div css={innerStyle({ small })}>{children}</div>
  </div>
);

export { Card };
