import {
  Box,
  Group,
  Flex,
  Text,
  CardHeaderStack,
  PopoverHelp,
  VaultDataLogo,
} from "components";

interface CardHeaderVaultDataProps {
  moduleName: string;
}

const CardHeaderVaultData = ({ moduleName }: CardHeaderVaultDataProps) => (
  <CardHeaderStack gap="3" justifyContent="center">
    <Group alignItems="center" justifyContent="center" gap="1" width="full">
      <Flex
        borderWidth="1"
        borderColor={{
          base: "labelTertiary",
        }}
        borderRadius="2"
        justifyContent="center"
        alignItems="center"
        marginX="2"
        padding="1"
        size="6"
        style={{
          transform: "translateY(-0.04em)",
        }}
      >
        <VaultDataLogo name={moduleName} />
      </Flex>
      <Text variant="title2" weight="bold">
        Your {moduleName} data
      </Text>
    </Group>
    <Group gap="1" justifyContent="center" width="full">
      <Text variant="note" color="labelSecondary">
        Your data is only accessible by you. <PopoverHelp />
      </Text>
    </Group>
  </CardHeaderStack>
);

export { CardHeaderVaultData };
