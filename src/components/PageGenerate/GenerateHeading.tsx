import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

import { LoadingDots } from "src/components";

interface StartProps {
  onClick: () => void;
}

const GenerateHeadingStart = ({ onClick }: StartProps) => (
  <>
    <h1 className="font-display text-[4.5vh] font-light leading-[0.925] tracking-[-0.01em]">
      Create your gallery
    </h1>
    <p>To create your gallery, we need 6-9 portraits of you from your phone.</p>
    <div className="flex w-full pt-1">
      <button
        type="button"
        className="flex-1 border border-black rounded-sm Button"
        onClick={onClick}
      >
        <span>Create your gallery</span>
        <Icon icon="carbon:arrow-right" />
      </button>
    </div>
    <p className="text-black/50">
      Or you can{" "}
      <Link href="/login" passHref>
        <span className="cursor-pointer link">login</span>
      </Link>
      .
    </p>
  </>
);

const GenerateHeadingSharing = () => (
  <div>
    <h1 className="font-display text-[4.5vh] font-light leading-[0.925] tracking-[-0.01em] relative inline">
      <LoadingDots>Generating</LoadingDots>
    </h1>
  </div>
);

const GenerateHeadingSuccess = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <>
    <h1 className="font-display text-[4.5vh] font-light leading-[1.1] tracking-[-0.01em]">
      Your masterpiece is being crafted
    </h1>
    <p>We will email you when it is ready in a couple of hours</p>
    {children}
    <p className="font-serif text-lg font-light pt-w12 text-stone-400">
      In the meantime, visit the galleries of the creative team behind this
      project
    </p>
  </>
);

export { GenerateHeadingSharing, GenerateHeadingStart, GenerateHeadingSuccess };
