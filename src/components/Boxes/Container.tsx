import tw, { styled } from "twin.macro";

const containerSize = {
  sm: tw`sm:max-w-2xl`, // 672px
  lg: tw`sm:max-w-3xl`, // 768px
} as const;

type Size = keyof typeof containerSize;

interface Props {
  size?: Size;
}

export const Container = styled.div(({ size = "sm" }: Props) => [
  tw`w-full px-4 mx-auto lg:px-12`,
  containerSize[size],
]);

export const ContainerFull = styled.div([tw`w-full px-4 mx-auto lg:px-12`]);
