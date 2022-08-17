import tw from "twin.macro";

const styledNavLinkWithIcon = [tw`flex items-center gap-2`];

const styledNavLinkBox = [
  styledNavLinkWithIcon,
  tw`relative h-navLinkH px-inset text-labelSecondary`,
];

const styledNavLinkHover = [
  tw`relative overflow-hidden before:(absolute inset-[3px] rounded-md) hover:before:(bg-hover)`,
];

const styledNavLink = [styledNavLinkBox, styledNavLinkHover];

const styledNavLinkActive = [tw`text-label`];

const styledNavButton = tw`flex items-center justify-center rounded-full text-label bg-background hover:bg-fillSecondary`;

export {
  styledNavButton,
  styledNavLink,
  styledNavLinkActive,
  styledNavLinkBox,
  styledNavLinkHover,
  styledNavLinkWithIcon,
};
