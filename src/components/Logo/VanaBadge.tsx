import { VanaLogo } from "src/components";
import config from "src/config";

interface Props {
  utmSource: string;
  isReversed?: boolean;
}

const VanaBadge = ({ utmSource, isReversed }: Props) => (
  <a
    href={`${config.vanaPublicURL}?utm_source=${utmSource}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex border rounded-lg overflow-hidden h-[32px] focus:outline outline-offset-0 outline-hover transition-colors duration-200 ease max-w-[160px] ${
      isReversed
        ? "border-stone-400 hover:border-black"
        : "border-stone-300 hover:border-black"
    }`}
  >
    <div
      className={`flex items-center justify-center h-[30px] w-[30px] transition-colors duration-200 ease ${
        isReversed
          ? "bg-transparent group-hover:bg-accent"
          : "bg-stone-300 group-hover:bg-black"
      }`}
    >
      <VanaLogo
        className={`h-[26px] w-[26px] transition-colors duration-200 ease ${
          isReversed
            ? "text-stone-400 group-hover:text-black"
            : "text-white group-hover:text-accent"
        }`}
      />
    </div>
    <div
      className={`px-3 border-l flex-1 flex items-center font-normal text-xs  group-hover:text-black group-hover:bg-accent group-hover:border-black transition-colors duration-200 ease ${
        isReversed
          ? "bg-transparent text-stone-400 border-stone-400"
          : "bg-white text-stone-400"
      }`}
    >
      Powered by Vana
    </div>
  </a>
);

export { VanaBadge };
