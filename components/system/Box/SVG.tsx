import React, { SVGProps } from 'react'
import { Box, BoxProps } from 'components'

export type SVGBoxProps = SVGProps<SVGSVGElement> & BoxProps
export type SVGStyleProps = {
  boxSize?: string
  viewbox?: string
}
export type SVGIconProps = SVGBoxProps & SVGStyleProps

const SVGBox = ({
  boxSize = '1em',
  viewbox = '0 0 32 32',
  ...props
}: SVGIconProps) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewbox}
    fill="none"
    style={{
      width: boxSize,
      height: boxSize,
    }}
    {...props}
  >
    {props.children}
  </Box>
)

export { SVGBox }
