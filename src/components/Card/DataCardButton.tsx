import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeader,
  DataCardDetails,
  Flex,
  Spinner,
  Stack,
  styledCard,
  styledCardHover,
  styledCardHoverIcon,
  Text,
  WithIcon,
} from "src/components";
import { Module } from "src/types";

interface Props {
  module: Module;
  isStored?: boolean;
  showActionHover?: boolean;
}

/* DataCardButton is very similar to DataCard with same card styles */

const DataCardButton = ({ module, isStored, showActionHover }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const link = isStored
    ? `/${module.name.toLowerCase()}`
    : `/store/${module.name.toLowerCase()}`;

  return (
    <NextLink passHref href={link}>
      <button
        type="button"
        css={[styledCard, styledCardHover, styledCardHoverIcon]}
        onClick={() => setIsLoading(true)}
      >
        {/* appears on hover based on `styledCardHoverIcon`  */}
        {showActionHover && (
          <Icon
            icon="carbon:arrow-right"
            height="1.125em"
            tw="opacity-0 absolute right-5 top-6"
          />
        )}

        {/* content stack */}
        <Stack tw="h-full justify-between">
          <CardHeader name={module.name} />

          {isLoading ? (
            <Flex tw="items-center justify-center h-full">
              <Spinner />
            </Flex>
          ) : (
            <>
              {isStored ? (
                /* TODO: pass module details when available */
                <DataCardDetails />
              ) : (
                <Stack tw="gap-0.5">
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
                </Stack>
              )}
            </>
          )}
        </Stack>
      </button>
    </NextLink>
  );
};

export { DataCardButton };
