import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Link } from "src/components";
import { FocusStack } from "src/components/VaultShare";
import config from "src/config";

interface Props {
  handleClick: () => void;
  serviceName: string;
}

const NoModuleMessage = ({ handleClick, serviceName }: Props) => (
  <FocusStack isCentered>
    <Link
      underline={false}
      href={config.vanaVaultURL}
      target="_blank"
      rel="external noopener noreferrer"
      tw="p-8"
    >
      <Button
        variant="solid"
        size="xl"
        suffix={<Icon icon="carbon:arrow-right" />}
        tw="min-w-[220px]"
        onClick={handleClick}
      >
        Add {serviceName} data
      </Button>
    </Link>
  </FocusStack>
);

export { NoModuleMessage };
