import { Flex, BoxProps } from "components";

const CardHeaderStack = ({ children, gap, ...props }: BoxProps) => (
  <Flex
    flexDirection="column"
    gap={gap}
    marginX="auto"
    maxWidth="screenSm"
    {...props}
  >
    {children}
  </Flex>
);

export { CardHeaderStack };
