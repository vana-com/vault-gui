import {
  Flex,
  Text,
  CardHeaderStack,
  PopoverHelp,
  VaultDataLogo,
} from "components";

interface Props {
  moduleName: string;
}

const CardHeaderVaultModule = ({ moduleName }: Props) => (
  <CardHeaderStack gap="3">
    <Flex display="flex" gap="3" alignItems="center">
      <Flex
        borderColor="labelTertiary"
        borderWidth="1"
        borderRadius="1"
        alignItems="center"
        justifyContent="center"
        marginX="1"
        padding="1"
        style={{
          transform: "translateY(-0.06em)",
          height: "1.4em",
          width: "1.4em",
        }}
      >
        <VaultDataLogo name={moduleName} />
      </Flex>
      <Text color="label" variant="title1" weight="bold" align="center">
        Store your {moduleName} data
      </Text>
    </Flex>
    <Flex justifyContent="center" gap="1">
      <Text variant="note" color="labelTertiary">
        Vana encrypts your data before storing.
      </Text>
      <PopoverHelp />
    </Flex>
  </CardHeaderStack>
);

export { CardHeaderVaultModule };
