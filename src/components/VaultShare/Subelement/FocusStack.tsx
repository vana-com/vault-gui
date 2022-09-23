// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

interface Props {
  isCentered?: boolean;
  isInset?: boolean;
}

const FocusStack = styled.div(({ isCentered, isInset = true }: Props) => [
  tw`flex flex-col gap-0 overflow-hidden border rounded-lg bg-fillSecondary border-separator`,
  // use flex-1 to always fill the remaining space set by the min-height rule in VaultSharePage
  tw`flex-1`,
  isCentered && tw`items-center justify-center`,
  isInset && tw`p-insetHalf`,
]);

export { FocusStack };
