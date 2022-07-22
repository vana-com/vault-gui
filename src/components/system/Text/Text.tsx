// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { styled } from "twin.macro";

export const textVariants = {
  footnote: tw`text-xs tracking-[0]`,
  note: tw`text-sm tracking-[0]`,
  subbody: tw`text-base tracking-[-0.005em]`,
  body: tw`text-md tracking-[-0.001em]`,
  headingMeta: tw`text-sm tracking-[0.05em] leading-none uppercase`,
  subheading: tw`text-sm tracking-[-0.025em] font-semibold`,
  heading: tw`text-lg tracking-[-0.005em] font-semibold font-heading`,
  title1: tw`text-xl tracking-[-0.025em] font-semibold font-heading`,
  title2: tw`text-2xl tracking-[-0.025em] font-bold font-heading`,
  title3: tw`text-3xl tracking-[-0.025em] font-black font-title`,
  display: tw`text-4xl tracking-[-0.025em] font-black font-title`,
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
} as const;

export type TextColor = keyof typeof textColors;

// All text style props are optional to allow parent styles inheritance.
// This is useful for markdown.
export interface TextStyleProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
}

export const Text = styled.div(({ variant, weight, color }: TextStyleProps) => [
  variant && textVariants[variant],
  weight && textWeights[weight],
  color && textColors[color],
]);
