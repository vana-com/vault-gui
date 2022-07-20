import { SVGBoxProps } from "src/components";

import {
  CarbonLogoFacebook,
  CarbonLogoGoogle,
  CarbonLogoInstagram,
} from "../Icons";

const VaultDataLogo = ({ name, ...props }: { name: string } & SVGBoxProps) => {
  if (name === "Facebook") return <CarbonLogoFacebook {...props} />;
  if (name === "Google") return <CarbonLogoGoogle {...props} />;
  if (name === "Instagram") return <CarbonLogoInstagram {...props} />;
  return null;
};

export { VaultDataLogo };
