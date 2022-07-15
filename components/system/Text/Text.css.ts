import { tw, apply, CSSProperties } from 'twind'

export const variantMap = {
  footnote: apply`text-xs tracking-[0]`,
  note: apply`text-sm tracking-[0]`,
  body: apply`text-md tracking-[-0.025em]`,
  headingMeta: apply`text-sm tracking-[0.025em] leading-none uppercase`,
  heading: apply`text-lg tracking-[-0.025em] font-semibold`,
  subheading: apply`text-sm tracking-[-0.025em] font-semibold`,
  title: apply`text-3xl tracking-[-0.025em] font-black font-title`,
}

export type TextVariant = keyof typeof variantMap

export const weightMap = {
  normal: apply`font-normal`,
  medium: apply`font-medium`,
  semibold: apply`font-semibold`,
  bold: apply`font-bold`,
  heavy: apply`font-extrabold`,
  black: apply`font-black`,
}

export type TextWeight = keyof typeof weightMap
