import { Box, BoxProps, Text, TextProps, Link, LinkProps } from "components";
import { Variant } from "components/system/Text";

const color = {
  color: "currentColor",
};

interface Props {
  textVariant?: Variant;
}

// export const components = ({ textVariant = "body" }: Props) => ({
export const components = {
  h1: (props: TextProps) => (
    <Text as="h1" variant="title1" marginTop="4" {...props} />
  ),
  h2: (props: TextProps) => (
    <Text as="h2" variant="title2" marginTop="4" {...props} />
  ),
  h3: (props: TextProps) => (
    <Text as="h3" variant="title3" marginTop="4" {...props} />
  ),
  ul: (props: BoxProps) => <Box as="ul" paddingLeft="3" {...props} />,
  ol: (props: BoxProps) => <Box as="ol" paddingLeft="3" {...props} />,
  p: (props: TextProps) => <Text variant="note" style={color} {...props} />,
  li: (props: TextProps) => (
    <Text as="li" variant="note" style={color} {...props} />
  ),
  a: (props: LinkProps) => <Link underline {...props} />,
  // li: ({ children, ...props }) => (
  //   <Box alignItems="center" as="li" display="flex" {...props}>
  //     <Box
  //       as="span"
  //       backgroundColor="fill"
  //       borderRadius="1"
  //       display="inline-block"
  //       height="1"
  //       marginRight="4"
  //       width="4"
  //     />
  //     <Text
  //       color="labelSecondary"
  //       style={{ fontWeight: 500, lineHeight: "25px", color }}
  //       variant="body"
  //     >
  //       {children}
  //     </Text>
  //   </Box>
  // ),

  // a: function MdExternalLink({ node: _node, ...props }) {
  //   return <Link {...props} />;
  // },
  // code: function MdCallout({
  //   node: _node,
  //   children: codeChildren,
  //   ...props
  // }) {
  //   return (
  //     <Box display="inline-block" verticalAlign="bottom">
  //       <CopyableText
  //         text={codeChildren[0] as string}
  //         isLoading={isLoading}
  //         {...props}
  //       />
  //     </Box>
  //   );
  // },
  // img: function MdImage({ node: _node, ...props }) {
  //   return <Image boxShadow="xs" borderRadius="xs" mt={2} {...props} />;
  // },
};
