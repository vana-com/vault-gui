import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from "twin.macro";

import {
  Flex,
  Group,
  Spinner,
  Stack,
  Text,
  VaultDataLogo,
  WithIcon,
} from "src/components";
import { testModules } from "src/data";
import { Module } from "src/types";

interface Props {
  module: Module;
  isStored?: boolean;
}

const buttonStyle = [
  css``,
  tw`relative flex-1 h-full gap-2 px-6 py-5 rounded-[15px] border border-transparent`,
  tw`min-w-[155px] min-h-[260px] bg-neutral`,
  tw`hover:(shadow-lg border-separatorLight)`,
];

const ModuleButton = ({ module, isStored }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const link = isStored
    ? `/${module.name.toLowerCase()}`
    : `/store/${module.name.toLowerCase()}`;

  return (
    <NextLink passHref href={link}>
      <button
        type="button"
        // size={isLarge ? "full" : "xl"}
        // variant={isStored ? "solid" : "outline"}
        // tw=""
        // prefix={<VaultDataLogo name={name} />}
        css={buttonStyle}
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? (
          <Flex tw="items-center justify-center">
            <Spinner />
          </Flex>
        ) : (
          <Stack tw="h-full justify-between">
            {/* {isStored && (
              <div tw="absolute top-3 right-3 text-label">
                <VaultDataLogo name={name} />
              </div>
            )} */}
            <Group tw="items-center gap-1.5">
              <div tw="inline-flex">
                <VaultDataLogo name={module.name} boxSize="1.75em" />
              </div>
              <Text variant="body" weight="semibold">
                {module.name}
              </Text>
            </Group>
            <Stack tw="gap-0.5">
              {isStored ? (
                <>
                  <Text
                    variant="note"
                    weight="semibold"
                    tw="text-label text-left"
                  >
                    {module.fileName || testModules[0].fileName}
                  </Text>
                  <Group tw="gap-1.5">
                    <Text
                      variant="footnote"
                      weight="normal"
                      tw="text-labelSecondary font-mono"
                    >
                      {module.fileSize || testModules[0].fileSize}
                    </Text>
                    <Text
                      as="span"
                      variant="footnote"
                      weight="normal"
                      tw="text-labelSecondary font-mono opacity-50"
                    >
                      |
                    </Text>
                    <Text
                      variant="footnote"
                      weight="normal"
                      tw="text-labelSecondary font-mono"
                    >
                      {module.lastUpdated || testModules[0].lastUpdated}
                    </Text>
                  </Group>
                </>
              ) : (
                <Text
                  variant="base"
                  weight="semibold"
                  tw="text-labelSecondary flex justify-end items-center gap-1"
                >
                  <WithIcon
                    // icon="carbon:arrow-up-right"
                    suffix={
                      <Icon
                        icon="heroicons-solid:chevron-right"
                        height="1.125em"
                      />
                    }
                  >
                    Add
                  </WithIcon>
                </Text>
              )}
            </Stack>
          </Stack>
        )}
      </button>
    </NextLink>
  );
};

export { ModuleButton };
