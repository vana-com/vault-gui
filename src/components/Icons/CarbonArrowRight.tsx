import { SVGBox, SVGIconProps } from "src/components";

export function CarbonArrowRight({ boxSize, ...props }: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <path
        fill="currentColor"
        d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
      />
    </SVGBox>
  );
}
