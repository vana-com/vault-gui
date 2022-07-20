import {
  CardHeaderStack,
  Flex,
  PopoverHelp,
  Text,
  VaultDataLogo,
} from "components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

interface Props {
  moduleName: string;
  isStoring?: boolean;
  children: React.ReactNode;
}

const CardHeaderVaultModule = ({ moduleName, isStoring, children }: Props) => (
  <CardHeaderStack tw="gap-2">
    <Flex tw="flex items-center justify-center gap-2">
      <Flex tw="flex items-center justify-center gap-1 p-1 rounded-md border border-labelTertiary transform translate-y-[-0.07em] text-md">
        <VaultDataLogo name={moduleName} />
      </Flex>
      <Text variant="title2" tw="text-center">
        {isStoring ? "Store your" : "Your"} {moduleName} data
      </Text>
    </Flex>
    <Flex tw="flex gap-1 justify-center items-center">
      <Text variant="note" color="labelTertiary">
        {children}
      </Text>
      <PopoverHelp />
    </Flex>
  </CardHeaderStack>
);

export { CardHeaderVaultModule };
