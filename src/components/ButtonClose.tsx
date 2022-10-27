import { Icon } from "@iconify/react";
import NextLink from "next/link";

interface Props {
  link: string;
  label: string;
}

const ButtonClose = ({ link, label }: Props) => (
  <div className="fixed z-20 top-3 right-inset">
    <NextLink href={link}>
      <button type="button" className="flex items-center gap-1">
        <Icon icon="carbon:close" height="2em" />
        <span className="hidden">{label}</span>
      </button>
    </NextLink>
  </div>
);

export { ButtonClose };
