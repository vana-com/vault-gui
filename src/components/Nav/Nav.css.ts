import tw from "twin.macro";

const navLinkWithIconStyle = [tw`flex items-center gap-2`];

const navLinkBoxStyle = [
  navLinkWithIconStyle,
  tw`relative h-navLinkH px-inset text-labelSecondary`,
];

const navLinkHoverStyle = [
  tw`relative overflow-hidden before:(absolute inset-[3px] rounded-md) hover:before:(bg-hover)`,
];

const navLinkStyle = [navLinkBoxStyle, navLinkHoverStyle];

const navLinkActiveStyle = [tw`text-label`];

const navButtonStyle = tw`flex items-center justify-center rounded-full text-label bg-background hover:bg-fillSecondary`;

export {
  navButtonStyle,
  navLinkActiveStyle,
  navLinkBoxStyle,
  navLinkHoverStyle,
  navLinkStyle,
  navLinkWithIconStyle,
};
