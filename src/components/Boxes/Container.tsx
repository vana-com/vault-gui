import tw, { styled } from "twin.macro";

const containerSize = {
  sm: tw`sm:max-w-2xl`, // 672px
  lg: tw`sm:max-w-3xl`, // 768px
} as const;

type Size = keyof typeof containerSize;

interface Props {
  size?: Size;
}

const rootStyle = tw`w-full mx-auto px-inset`;

export const Container = styled.div(({ size = "sm" }: Props) => [
  rootStyle,
  containerSize[size],
]);

export const ContainerFull = styled.div(rootStyle);
