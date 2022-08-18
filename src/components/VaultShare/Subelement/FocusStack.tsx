// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

interface Props {
  withMinHeight?: boolean;
  isCentered?: boolean;
}

const FocusStack = styled.div(({ withMinHeight, isCentered }: Props) => [
  tw`flex flex-col gap-0 overflow-hidden border rounded-lg bg-fillSecondary border-separator`,
  withMinHeight && tw`min-h-[268px]`,
  isCentered && tw`items-center justify-center`,
]);

export { FocusStack };
