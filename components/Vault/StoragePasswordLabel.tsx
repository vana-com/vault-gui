import { Box, Stack, BoxProps, Text, TextProps } from "components";
import { CarbonLocked } from "components/Icons";

const DefaultText = (props: TextProps) => (
  <Text weight="medium" variant="footnote" {...props} />
);

const DefaultLabel = () => (
  <>
    <DefaultText as="span" weight="semibold">
      Create a password.
    </DefaultText>{" "}
    <DefaultText as="span">Only you will know this.</DefaultText>
  </>
);

const StoragePasswordLabel = ({ children = <DefaultLabel /> }: BoxProps) => (
  <Stack
    borderTopRadius="2"
    backgroundColor="background"
    color="labelSecondary"
    gap="2"
    justifyContent="center"
    marginTop="2"
    paddingY="1"
    paddingX="2"
  >
    <CarbonLocked height="1.1em" width="1.1em" />
    <Box>{children}</Box>
  </Stack>
);
export { StoragePasswordLabel };
