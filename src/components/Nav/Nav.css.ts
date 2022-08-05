import tw from "twin.macro";

export const navLinkWithIconStyle = [tw`flex items-center gap-2`];
export const navLinkBoxStyle = [navLinkWithIconStyle, tw`py-2.5 px-inset`];
export const navLinkHoverStyle = [tw`hover:(bg-gray-500 bg-opacity-5)`];
export const navLinkActiveStyle = [tw`bg-gray-400 bg-opacity-10`];
export const navLinkStyle = [navLinkBoxStyle, navLinkHoverStyle];
