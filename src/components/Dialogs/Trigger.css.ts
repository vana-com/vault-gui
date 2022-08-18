import tw from "twin.macro";

/* 
  Styles for the Trigger component on Radix Dialog & Dropdown.
  These are important because they retain an imprint of a user action after the interaction has been closed, helping the user understand that state of the interactions. 
 */

const styledTrigger = [
  tw`transform translate-y-0 border-2 border-transparent`,
  tw`focus:(translate-y-px border-primary ring-1 ring-separatorLight ring-offset-4 ring-offset-separatorLight)`,
];

export { styledTrigger };
