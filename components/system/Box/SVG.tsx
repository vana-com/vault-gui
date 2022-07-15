import React, { SVGProps } from 'react'
import { Box, BoxProps } from 'components'

// TODO: can't use an interface with BoxProps because of the SVGProps
// export interface SVGBoxProps extends SVGProps<SVGSVGElement>, BoxProps;
export type SVGBoxProps = SVGProps<SVGSVGElement> & BoxProps
export type SVGIconProps = SVGBoxProps & {
  size?: string
  viewbox?: string
}

const SVGBox = ({ size, viewbox = '0 0 32 32', ...props }: SVGIconProps) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewbox}
    fill="none"
    style={{
      width: size,
      height: size,
    }}
    {...props}
  >
    {props.children}
  </Box>
)

export { SVGBox }
