import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button } from "src/components";
import { FocusStack } from "src/components/VaultShare";

interface Props {
  handleClick: () => void;
  serviceName: string;
}

const NoModuleMessage = ({ handleClick, serviceName }: Props) => (
  <FocusStack isCentered>
    <div tw="p-8">
      <Button
        variant="solid"
        size="xl"
        suffix={<Icon icon="carbon:arrow-right" />}
        tw="min-w-[220px]"
        onClick={handleClick}
      >
        Add {serviceName} data
      </Button>
    </div>
  </FocusStack>
);

export { NoModuleMessage };
