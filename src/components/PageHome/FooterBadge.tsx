import Link from "next/link";

const FooterBadge = ({ screenHeight }: { screenHeight: number }) => (
  <div
    className="fixed w-full shadow-xl"
    style={{ top: `${screenHeight - 132}px` }}
  >
    <div className="flex justify-center m-inset mb-insetDouble">
      {/* outline outline-1 outline-offset-4 */}
      <div className="inline-flex px-5 py-1.5 bg-white  rounded-md">
        <div className="flex flex-col gap-1">
          <div className="font-display text-2xl font-bold text-center tracking-[-0.01em]">
            <span className="-ml-[0.17em]">Portrait</span>
          </div>
          <div className="flex justify-center gap-2 font-serif text-sm tracking-[0.02em]">
            <Link href="/terms-of-service" passHref>
              Terms of Service
            </Link>
            <hr className="hr hr-vertical h-[15px]" />
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
