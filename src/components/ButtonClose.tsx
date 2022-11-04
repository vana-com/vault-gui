import { Icon } from "@iconify/react";
import NextLink from "next/link";

import { useDeviceDetect } from "src/hooks";

interface Props {
  link: string;
  label: string;
}

const ButtonClose = ({ link, label }: Props) => {
  const { isMobileViewport } = useDeviceDetect();

  return (
    <div className="fixed z-20 top-3 right-inset xl:top-w12 xl:right-w12">
      <NextLink href={link}>
        <button type="button" className="flex items-center gap-1">
          <Icon
            icon="carbon:close"
            height={isMobileViewport ? "2em" : "2.5em"}
          />
          <span className="hidden">{label}</span>
        </button>
      </NextLink>
    </div>
  );
};

export { ButtonClose };
