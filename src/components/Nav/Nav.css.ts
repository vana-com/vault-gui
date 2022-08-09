import tw from "twin.macro";

export const navLinkWithIconStyle = [tw`flex items-center gap-2`];
export const navLinkBoxStyle = [
  navLinkWithIconStyle,
  tw`h-navLinkH px-inset text-labelSecondary`,
];
export const navLinkHoverStyle = [tw`hover:(bg-fillSecondary)`];
export const navLinkStyle = [navLinkBoxStyle, navLinkHoverStyle];
// bg-gray-400 bg-opacity-10
export const navLinkActiveStyle = [tw`text-label`];
