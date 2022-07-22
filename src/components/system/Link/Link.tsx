import tw, { styled } from "twin.macro";

export type LinkProps = {
  underline?: boolean;
};

export const Link = styled.a(({ underline = true }: LinkProps) => [
  tw`outline-none decoration-current decoration-[0.075em] underline-offset-[0.09375em]`,
  underline && tw`underline`,
]);
