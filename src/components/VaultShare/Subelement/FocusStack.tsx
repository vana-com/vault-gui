// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Stack } from "src/components";

/* A stack with styles to focus user attention */
const FocusStack = tw(
  Stack,
)`rounded-lg overflow-hidden gap-0 border bg-gray-50 border-separator`;

export { FocusStack };
