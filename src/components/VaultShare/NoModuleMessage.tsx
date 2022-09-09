import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button } from "src/components";
import { FocusStack } from "src/components/VaultShare";
import config from "src/config";

interface Props {
  handleClick: () => void;
  serviceName: string;
}

const NoModuleMessage = ({ handleClick, serviceName }: Props) => (
  <FocusStack isCentered>
    <div tw="p-8">
      {/* This is purposely a button as an anchor with both href and a clickHandler: href is a new tab link, click closes the Share pop-up */}
      <Button
        as="a"
        href={`${config.vanaVaultURL}/store/${serviceName}`}
        target="_blank"
        rel="external noopener noreferrer"
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
