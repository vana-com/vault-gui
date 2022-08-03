import { SVGBox, SVGIconProps } from "src/components";

export function CarbonDotMark({ boxSize, ...props }: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <circle cx="16" cy="16" r="8" fill="currentColor" />
    </SVGBox>
  );
}
