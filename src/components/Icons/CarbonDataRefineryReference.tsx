import { SVGBox, SVGIconProps } from "src/components";

export function CarbonDataRefineryReference({
  boxSize,
  ...props
}: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <path
        fill="currentColor"
        d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8H4zm24-8h-6a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2zm-6-8v6h6V4z"
      />
      <path
        fill="currentColor"
        d="M24 26h-8v-2h8v-7H8a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h10v2H8v7h16a2.002 2.002 0 0 1 2 2v7a2.002 2.002 0 0 1-2 2Z"
      />
    </SVGBox>
  );
}
