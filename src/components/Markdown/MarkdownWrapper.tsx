import tw, { styled } from "twin.macro";

interface Props {
  isNote?: boolean;
}

export const MarkdownWrapper = styled.div(({ isNote = false }: Props) => [
  tw`flex flex-col gap-1`,
  isNote && tw`[*]:text-base`,
]);
