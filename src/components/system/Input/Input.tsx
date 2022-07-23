// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Text, TextProps } from "src/components";

export type InputProps = {
  children?: React.ReactNode;
  css?: string;
} & Pick<JSX.IntrinsicElements["input"], "type" | "placeholder"> &
  TextProps;

const Input = ({ variant, weight, color, children, ...props }: InputProps) => (
  <Text as="input" variant={variant} weight={weight} color={color} {...props}>
    {children}
  </Text>
);

export { Input };
