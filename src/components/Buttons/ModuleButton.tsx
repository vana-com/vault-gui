import NextLink from "next/link";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, VaultDataLogo } from "src/components";
import { CarbonSecurity } from "src/components/Icons";

interface Props {
  name: string;
  isLarge?: boolean;
  isStored?: boolean;
}

const ModuleButton = ({ name, isLarge, isStored }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const link = isStored
    ? `/${name.toLowerCase()}`
    : `/store/${name.toLowerCase()}`;

  return (
    <NextLink passHref href={link}>
      <Button
        size={isLarge ? "full" : "xl"}
        variant={isStored ? "solid" : "outline"}
        tw="min-w-[155px]"
        prefix={<VaultDataLogo name={name} />}
        isLoading={isLoading}
        onClick={() => setIsLoading(true)}
      >
        {isLarge && (
          <div tw="absolute top-3 right-3 text-label">
            <CarbonSecurity />
          </div>
        )}
        {name}
      </Button>
    </NextLink>
  );
};

export { ModuleButton };
