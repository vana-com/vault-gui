import tw, { css, styled } from "twin.macro";

export type LinkProps = {
  underline?: boolean;
};

export const Link = styled.a(({ underline = true }: LinkProps) => [
  tw`outline-none decoration-current decoration-[0.05em] underline-offset-[0.15em]`,
  underline && tw`underline`,
  css`
    font-size: inherit;
  `,
]);
