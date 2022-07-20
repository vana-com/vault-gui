import tw, { styled } from "twin.macro";

interface Props {
  children: React.ReactNode;
}

const Root = styled.div([
  tw`
    flex flex-col rounded-lg shadow-lg
    min-h-[195px] h-full overflow-hidden
    bg-backgroundElevated
  `,
]);

const Inner = styled.div([tw`flex flex-1 p-4 rounded-md lg:p-8`]);

const Card = ({ children }: Props) => (
  <Root>
    <Inner>{children}</Inner>
  </Root>
);

export { Card };
