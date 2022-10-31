import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";

import config from "src/config";

interface Props {
  blackTheme?: boolean;
  wrapperClassName?: string;
}

const Footer = ({ blackTheme, wrapperClassName = "pb-w72" }: Props) => (
  <footer className={clsx("flex justify-center", wrapperClassName)}>
    <div className={clsx(blackTheme ? "text-white" : "text-stone-500")}>
      {/* <hr className="hr hr-vertical h-[12px] opacity-50" /> */}
      <div className="flex items-center justify-center gap-3 text-sm">
        <Link href={config.vanaInstagram} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="">
            <span className="hidden">Instagram</span>
            <Icon icon="carbon:logo-instagram" height="2.25em" />
          </a>
        </Link>
        <Link href={config.vanaDiscord} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <span className="hidden">Discord</span>
            <Icon icon="carbon:logo-discord" height="2.25em" />
          </a>
        </Link>
        <a href={`mailto:${config.vanaSupportEmail}`}>
          <span className="hidden">Support</span>
          <Icon icon="carbon:email" height="2.25em" />
        </a>
      </div>

      {/* tag search link */}
      <div className="pt-2.5 text-sm text-center">
        <Link href={config.vanaInstagramHashSearch} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>#vanaportrait</a>
        </Link>
      </div>
    </div>
  </footer>
);

export { Footer };
