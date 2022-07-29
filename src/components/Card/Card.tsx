import tw from "twin.macro";

export const cardBackgrounds = {
  bg: tw`bg-background`,
  bgElevated: tw`bg-backgroundElevated`,
} as const;

export type CardBackground = keyof typeof cardBackgrounds;

interface OuterProps {
  bg?: CardBackground;
  shadow?: boolean;
}

const outerStyle = ({ bg, shadow }: OuterProps) => [
  tw`flex flex-col rounded-lg min-h-[195px] h-full overflow-hidden`,
  bg && cardBackgrounds[bg],
  shadow && tw`shadow-lg`,
];

interface InnerProps {
  small?: boolean;
}

const innerStyle = ({ small }: InnerProps) => [
  tw`flex flex-1 rounded-md`,
  small ? tw`p-2.5 lg:p-5` : tw`p-4 lg:p-8`,
];

interface CardProps extends InnerProps, OuterProps {
  children: React.ReactNode;
}

const Card = ({
  children,
  small,
  shadow = true,
  bg = "bgElevated",
}: CardProps) => (
  <div css={outerStyle({ bg, shadow })}>
    <div css={innerStyle({ small })}>{children}</div>
  </div>
);

export { Card };
