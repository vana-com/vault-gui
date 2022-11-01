import { Icon } from "@iconify/react";
import clsx from "clsx";

import config from "src/config";

interface Props {
  blackTheme?: boolean;
  wrapperClassName?: string;
}

const Footer = ({ blackTheme, wrapperClassName = "pb-w72" }: Props) => (
  <footer className={clsx("flex justify-center", wrapperClassName)}>
    <div className={clsx(blackTheme ? "text-white" : "text-stone-500")}>
      <div className="flex items-center justify-center gap-3 text-sm">
        <a
          href={config.vanaInstagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden">Instagram</span>
          <Icon icon="carbon:logo-instagram" height="2.25em" />
        </a>
        <a href={config.vanaDiscord} target="_blank" rel="noopener noreferrer">
          <span className="hidden">Discord</span>
          <Icon icon="carbon:logo-discord" height="2.25em" />
        </a>
        <a href={`mailto:${config.vanaSupportEmail}`}>
          <span className="hidden">Support</span>
          <Icon icon="carbon:email" height="2.25em" />
        </a>
      </div>

      {/* IG TAG LINK */}
      <div className="pt-2.5 text-sm text-center">
        <a
          href={config.vanaInstagramHashSearch}
          target="_blank"
          rel="noopener noreferrer"
        >
          #vanaportrait
        </a>
      </div>
    </div>
  </footer>
);

export { Footer };
