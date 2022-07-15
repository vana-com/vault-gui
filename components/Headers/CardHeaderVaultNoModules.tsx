import { CardHeaderStack, Box, Text } from "components";

type Props = {
  children: React.ReactNode;
};

const CardHeaderVaultNoModules = ({ children }: Props) => (
  <>
    <CardHeaderStack gap="1" justifyContent="center">
      <Text variant="title2" align="center" weight="medium" color="label">
        Store your Data
      </Text>
      <Text variant="body" color="labelTertiary" align="center">
        To get started, choose an app
      </Text>
    </CardHeaderStack>

    {/* CTA */}
    <Box
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      gap="3"
      justifyContent="center"
      paddingTop="7"
    >
      {children}
    </Box>
  </>
);

export { CardHeaderVaultNoModules };
