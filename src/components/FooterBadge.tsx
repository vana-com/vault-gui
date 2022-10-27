import clsx from "clsx";
import Link from "next/link";

import config from "src/config";

interface Props {
  screenHeight: number;
  blackTheme?: boolean;
}

const BOTTOM_SPACE = 110;

const FooterBadge = ({ screenHeight, blackTheme }: Props) => (
  <div
    className="fixed w-full"
    style={{ top: `${screenHeight - BOTTOM_SPACE}px` }}
  >
    <div className="flex justify-center">
      {/* outline outline-1 outline-offset-4 */}
      <div
        className={clsx(
          "inline-flex px-5 py-1.5 shadow-xl rounded-md",
          blackTheme ? "bg-black text-white" : "bg-white text-black",
        )}
      >
        <div className="flex flex-col gap-0.5">
          <div className="font-display text-md font-black text-center tracking-[0.15em] uppercase">
            <Link href="/" passHref>
              Portrait
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 font-sans text-sm font-normal tracking-[0.015em] opacity-80">
            <Link href={config.termsOfServiceURL} passHref>
              Terms of Service
            </Link>
            <hr className="hr hr-vertical h-[12px] opacity-50" />
            <Link href={config.vanaPrivacyURL} passHref>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { FooterBadge };
