import { Box, Stack, Text, CardHeaderStack, PopoverHelp } from "components";

type Props = {
  children: React.ReactNode;
  drawerNode?: React.ReactNode;
};

const CardHeaderVault = ({ children, drawerNode }: Props) => (
  <Stack gap={{ xs: "2", lg: "4" }}>
    <CardHeaderStack
      alignItems="flex-end"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="auto"
      position="relative"
      zIndex="10"
      style={{
        gap: "2px",
        transform: "translateY(-0.25em)",
      }}
    >
      <Text
        as="h3"
        align="center"
        color="label"
        weight="medium"
        variant="heading"
      >
        Your Data
      </Text>
      <Box color="labelSecondary">
        <PopoverHelp />
      </Box>
      {drawerNode}
    </CardHeaderStack>

    <Box as="hr" borderBottomWidth="1" width="full" />

    {/* CTA */}
    <Box
      display="grid"
      gap="5"
      // columns={{ base: 1, lg: 3 }}
      paddingTop="2"
      style={{
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gridAutoFlow: "column",
        minHeight: 140,
      }}
    >
      {children}
    </Box>
  </Stack>
);

export { CardHeaderVault };
