// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

// Keep as future reference for color system when our design is ready…
// base: "labelSecondary",
// focus: "label",
// hover: "purple",
// export const linkVariants = {
//   primary: tw`text-xs tracking-[0]`,
//   gray: tw`text-sm tracking-[0]`,
// } as const;

// export type LinkVariant = keyof typeof linkVariants;

export interface LinkStyleProps {
  // variant: LinkVariant;
  underline: boolean;
}

export const textStyles = ({ underline }: LinkStyleProps) => [
  tw`outline-none decoration-current decoration-[0.075em] underline-offset-[0.09375em]`,
  underline && tw`underline`,
  // linkVariants[variant],
];
