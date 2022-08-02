// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

// import { Stack } from "src/components";

/* 
  A FocusStack is a stack with styles to focus user attention.
  
  NB! PLEASE DO NOT DELETE THE COMMENTED COMPONENT. The initial pattern worked ysterday but not today. It shoudl work as it is a valid, recommended pattern from twin.macro 
 */

// const FocusStack = tw(Stack)`rounded-lg overflow-hidden gap-0 border bg-gray-50 border-separator`;

const FocusStack = tw.div`flex flex-col gap-0 overflow-hidden border rounded-lg bg-gray-50 border-separator`;

export { FocusStack };
