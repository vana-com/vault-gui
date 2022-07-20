import tw, { css, styled } from "twin.macro";

/* 
  Flex is a shortcut component for using Tailwind flex props. 
  See: https://tailwindcss.com/docs/flex-basis 
 */

// const direction = ['row', 'row-reverse', 'col', 'col-reverse'] as const
// https://steveholgado.com/typescript-types-from-arrays/
// export type Direction = typeof direction[number]

// const flex = [1, 'auto', 'initial', 'none'] as const
// const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const
// const alignItems = [...flexAlignment, 'baseline'] as const
// const justifyContent = [
//   ...flexAlignment,
//   'space-around',
//   'space-between',
// ] as const
// const justifySelf = flexAlignment

const directionMap = {
  row: tw`flex-row`,
  rowReverse: tw`flex-row-reverse`,
  col: tw`flex-col`,
  colReverse: tw`flex-col-reverse`,
} as const;

export type Direction = keyof typeof directionMap;

export type FlexProps = {
  direction?: Direction;
};

export const Flex = styled.div(({ direction = "row" }: FlexProps) => [
  tw`flex`,
  css`
    ${directionMap[direction]}
  `,
]);
