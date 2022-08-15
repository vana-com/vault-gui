import { SVGBox, SVGIconProps } from "src/components";

export function CarbonArrowUpRight({ boxSize, ...props }: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <path
        fill="currentColor"
        d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"
      />
    </SVGBox>
  );
}
