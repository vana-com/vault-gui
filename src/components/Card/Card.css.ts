import tw, { css } from "twin.macro";

export const cardStyle = [
  css``,
  tw`relative flex-1 h-full gap-2 px-6 py-5 border border-separatorLight rounded-2xl`,
  tw`min-w-[155px] min-h-[260px] bg-neutral`,
];

export const cardHoverStyle = [tw`hover:(shadow-lg border-separator)`];

export const cardHoverIconStyle = tw`[> svg]:opacity-0 hover:([> svg]:opacity-100)`;
