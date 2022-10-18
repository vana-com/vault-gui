import { SVGProps } from "react";

export type SVGBoxProps = SVGProps<SVGSVGElement>;
export type SVGStyleProps = {
  boxSize?: string;
  viewbox?: string;
  className?: string;
};
export type SVGIconProps = SVGBoxProps & SVGStyleProps;

const SVG = ({
  boxSize = "1em",
  viewbox = "0 0 32 32",
  className,
  ...props
}: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewbox}
    fill="none"
    className={className}
    style={{
      width: boxSize,
      height: boxSize,
    }}
    {...props}
  >
    {props.children}
  </svg>
);

export { SVG };
