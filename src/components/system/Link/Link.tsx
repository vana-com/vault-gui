import tw, { css, styled } from "twin.macro";

export type LinkProps = {
  underline?: boolean;
};

export const styledLink = tw`outline-none decoration-current decoration-[0.05em] underline-offset-[0.15em]`;

export const Link = styled.a(({ underline = true }: LinkProps) => [
  styledLink,
  underline && tw`underline`,
  css`
    font-size: inherit;
  `,
]);
