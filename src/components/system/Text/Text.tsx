// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

export const textVariants = {
  footnote: tw`text-xs tracking-[0.02em]`,
  footnoteMeta: tw`text-xs tracking-[0.05em] leading-none uppercase`,
  note: tw`text-sm tracking-[0]`,
  headingMeta: tw`text-sm tracking-[0.05em] leading-none uppercase`,
  subheading: tw`text-sm tracking-[-0.025em] font-semibold`,
  base: tw`text-base tracking-[-0.005em]`,
  body: tw`text-md tracking-[-0.001em]`,
  large: tw`text-lg tracking-[-0.001em]`,
  heading: tw`text-lg tracking-[-0.003em] font-semibold font-heading`,
  title1: tw`text-xl tracking-[-0.001em] font-semibold font-heading`,
  title2: tw`text-2xl tracking-[-0.001em] font-bold font-heading`,
  title3: tw`text-3xl tracking-[-0.005em] font-black font-heading`,
  display: tw`text-4xl tracking-[-0.01em] font-medium font-heading`,
} as const;

export type TextVariant = keyof typeof textVariants;

export const textWeights = {
  normal: tw`font-normal`,
  medium: tw`font-medium`,
  semibold: tw`font-semibold`,
  bold: tw`font-bold`,
  heavy: tw`font-extrabold`,
  black: tw`font-black`,
} as const;

export type TextWeight = keyof typeof textWeights;

export const textColors = {
  inherit: tw`text-inherit`,
  current: tw`text-current`,
  black: tw`text-black`,
  white: tw`text-white`,
  // color modes
  label: tw`text-label`,
  labelSecondary: tw`text-labelSecondary`,
  labelTertiary: tw`text-labelTertiary`,
  labelQuaternary: tw`text-labelQuaternary`,
  labelInverse: tw`text-labelInverse`,
  labelWhite: tw`text-labelWhite`,
  fill: tw`text-fill`,
  fillSecondary: tw`text-fillSecondary`,
  fillElevated: tw`text-fillElevated`,
  background: tw`text-background`,
  backgroundElevated: tw`text-backgroundElevated`,
  error: tw`text-error`,
} as const;

export type TextColor = keyof typeof textColors;

// All text style props are optional to allow parent styles inheritance.
// This is useful for markdown. It's also a potential CSS cascade problem!
export interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  mono?: boolean;
  // used for HTML label, not available from twin.macro but should be…
  htmlFor?: string;
}

export const Text = styled.div(
  ({ variant, weight, color, mono }: TextProps) => [
    variant && textVariants[variant],
    weight && textWeights[weight],
    color && textColors[color],
    mono && tw`!font-mono`,
  ],
);
