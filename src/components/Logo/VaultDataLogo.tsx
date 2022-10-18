import { Icon } from "@iconify/react";

/* TODO REFACTOR: this can now be a simple function toggling the Icon name */

const VaultDataLogo = ({ name, ...props }: { name: string }) => {
  if (name === "Facebook")
    return <Icon icon="carbon:logo-facebook" {...props} />;
  if (name === "Google") return <Icon icon="carbon:logo-google" {...props} />;
  if (name === "Instagram")
    return <Icon icon="carbon:logo-instagram" {...props} />;
  return null;
};

export { VaultDataLogo };
