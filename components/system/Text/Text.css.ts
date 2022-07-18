import tw, { TwStyle } from 'twin.macro'

const variants = [
  'footnote',
  'note',
  'body',
  'headingMeta',
  'heading',
  'subheading',
  'title',
] as const

// type TextVariant = typeof variants[number] // union type

// enum TextVariant {
//   Footnote = 'footnote',
//   Note = 'note',
//   Body = 'body',
//   HeadingMeta = 'headingMeta',
//   Heading = 'heading',
//   Subheading = 'subheading',
//   Title = 'title',
// }

// Record<TextVariant, string>
export const textVariants = {
  footnote: tw`text-xs tracking-[0]`,
  note: tw`text-sm tracking-[0]`,
  body: tw`text-md tracking-[-0.025em]`,
  headingMeta: tw`text-sm tracking-[0.025em] leading-none uppercase`,
  heading: tw`text-lg tracking-[-0.025em] font-semibold`,
  subheading: tw`text-sm tracking-[-0.025em] font-semibold`,
  title: tw`text-3xl tracking-[-0.025em] font-black font-title`,
} as const

export type TextVariant = keyof typeof textVariants

export const textWeights = {
  normal: tw`font-normal`,
  medium: tw`font-medium`,
  semibold: tw`font-semibold`,
  bold: tw`font-bold`,
  heavy: tw`font-extrabold`,
  black: tw`font-black`,
} as const

export type TextWeight = keyof typeof textWeights

export type TextStyleProps = TextVariant & TextWeight

export const textStyles = ({ variant, weight }: TextStyleProps) => [
  tw`flex`,
  textVariants[variant],
  textWeights[weight],
]
