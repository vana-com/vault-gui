import { Icon } from "@iconify/react";
import NextLink from "next/link";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeader,
  Flex,
  Spinner,
  Stack,
  styledCard,
  styledCardHover,
  styledCardHoverIcon,
  Text,
  WithIcon,
} from "src/components";
import config from "src/config";
import { Module } from "src/types";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

interface Props {
  module: Module;
  showActionHover?: boolean;
  userId: string;
}

/* DataCardButton is very similar to DataCard with same card styles */
const DataCardButton = ({ module, showActionHover, userId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const link = `/store/${module.name.toLowerCase()}`;

  return (
    <NextLink passHref href={link}>
      <button
        type="button"
        css={[styledCard, styledCardHover, styledCardHoverIcon]}
        onClick={() => {
          setIsLoading(true);
          heapTrackServerSide(userId, HEAP_EVENTS.CLICK_ADD_DATA_MODULE_PANEL, {
            module: module.name,
          });
        }}
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
        </Stack>
      </button>
    </NextLink>
  );
};

export { DataCardButton };
