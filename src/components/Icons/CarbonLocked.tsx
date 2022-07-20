import React, { SVGProps } from "react";

// https://icones.js.org/collection/carbon?s=arrow

export function CarbonLocked(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M24 14h-2V8a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM12 8a4 4 0 0 1 8 0v6h-8Zm12 20H8V16h16Z"
      />
    </svg>
  );
}
