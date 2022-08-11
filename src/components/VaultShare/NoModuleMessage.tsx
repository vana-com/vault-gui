// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Link } from "src/components";
import { CarbonArrowRight } from "src/components/Icons";
import { FocusStack } from "src/components/VaultShare";

interface Props {
  handleClick: () => void;
  serviceName: string;
}

const NoModuleMessage = ({ handleClick, serviceName }: Props) => (
  <FocusStack tw="rounded-lg overflow-hidden gap-0 border bg-gray-40 border-separator items-center min-h-[268px] items-center justify-center">
    <Link
      underline={false}
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      tw="p-8"
    >
      <Button
        variant="solid"
        size="xl"
        suffix={<CarbonArrowRight />}
        tw="min-w-[220px]"
        onClick={handleClick}
      >
        Add {serviceName} data
      </Button>
    </Link>
  </FocusStack>
);

export { NoModuleMessage };
