import { SVGBox, SVGIconProps } from "src/components";

export function CarbonTime({ boxSize, ...props }: SVGIconProps) {
  return (
    <SVGBox viewBox="0 0 32 32" boxSize={boxSize} {...props}>
      <path
        fill="currentColor"
        d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
      />
      <path
        fill="currentColor"
        d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
      />
    </SVGBox>
  );
}
