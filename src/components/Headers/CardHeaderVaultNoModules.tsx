// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { CardHeaderStack, Text } from "src/components";

type Props = {
  children: React.ReactNode;
};

const CardHeaderVaultNoModules = ({ children }: Props) => (
  <>
    <CardHeaderStack tw="gap-0 justify-center">
      {/* title2  color="label" */}
      <Text variant="heading" tw="text-center">
        Store your Data
      </Text>
      <Text variant="body" color="labelTertiary" tw="text-center">
        To get started, choose an app
      </Text>
    </CardHeaderStack>

    {/* CTA */}
    <div tw="flex flex-col lg:flex-row justify-center gap-4 pt-7">
      {children}
    </div>
  </>
);

export { CardHeaderVaultNoModules };
