import tw, { styled } from "twin.macro";

import { Box, BoxProps } from "../index";

interface Props extends BoxProps {
  children: React.ReactNode;
  withShadow?: boolean;
}

const Root = styled.div([
  tw`
    flex flex-col rounded-lg shadow-lg
    min-h-[195px] h-full overflow-hidden
    bg-backgroundElevated
  `,
]);

const Inner = styled.div([tw`flex flex-1 p-4 rounded-md lg:p-8`]);

// {...props}
const Card = ({ children, ...props }: Props) => (
  <Root>
    <Inner>{children}</Inner>
  </Root>
);

export { Card };
