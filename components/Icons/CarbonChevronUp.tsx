import { SVGBox, SVGBoxProps } from "components";

const CarbonChevronUp = (props: SVGBoxProps) => (
  <SVGBox {...props}>
    <path
      fill="currentColor"
      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
    />
  </SVGBox>
);

export { CarbonChevronUp };
