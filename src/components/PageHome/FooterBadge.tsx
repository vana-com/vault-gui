import clsx from "clsx";
import Link from "next/link";

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
    <div className="flex justify-center mx-inset mb-insetDouble">
      {/* outline outline-1 outline-offset-4 */}
      <div
        className={clsx(
          "inline-flex px-5 py-1.5 shadow-xl rounded-md",
          blackTheme ? "bg-black text-white" : "bg-white text-black",
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="font-display text-2xl font-bold text-center tracking-[-0.01em]">
            <Link href="/" passHref>
              Portrait
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 font-sans text-sm font-normal tracking-[0.015em]">
            <Link href="/terms-of-service" passHref>
              Terms of Service
            </Link>
            <hr className="hr hr-vertical h-[12px] opacity-50" />
            <Link href="/privacy-policy" passHref>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { FooterBadge };
