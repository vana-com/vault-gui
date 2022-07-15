import { SVGBox, SVGBoxProps, ClassName } from 'components'

export const VanaLogo = ({ className }: ClassName) => (
  <SVGBox viewBox="0 0 48 48" className={className}>
    <rect width="48" height="48" rx="12" />
    <path
      d="M 9.352 11.791 L 16.648 11.791 L 25.432 28.687 L 34.168 11.791 L 38.44 11.791 L 26.44 35.791 L 22.072 35.791 L 9.352 11.791 Z"
      fill="currentColor"
      origin="0.503575 0.508708"
    />
  </SVGBox>
)
