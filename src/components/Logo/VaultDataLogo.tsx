import { SVGIconProps } from "src/components";

import {
  CarbonLogoFacebook,
  CarbonLogoGoogle,
  CarbonLogoInstagram,
} from "../Icons";

/* TODO REFACTOR: this can now be a simple function toggling the Icon name */

const VaultDataLogo = ({ name, ...props }: { name: string } & SVGIconProps) => {
  if (name === "Facebook") return <CarbonLogoFacebook {...props} />;
  if (name === "Google") return <CarbonLogoGoogle {...props} />;
  if (name === "Instagram") return <CarbonLogoInstagram {...props} />;
  return null;
};

export { VaultDataLogo };
