import tw, { css } from "twin.macro";

const styledCard = [
  css``,
  tw`relative flex-1 h-full gap-2 px-4 py-3 border md:px-6 md:py-5 border-separatorLight rounded-2xl`,
  tw`min-w-[155px] min-h-[140px] md:min-h-[260px] bg-neutral`,
];

const styledCardHover = [tw`hover:(shadow-lg border-separator)`];

const styledCardHoverIcon = tw`[> svg]:opacity-0 hover:([> svg]:opacity-100)`;

export { styledCard, styledCardHover, styledCardHoverIcon };
