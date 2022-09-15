import { Icon } from "@iconify/react";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  Link,
  Stack,
  styledNavLinkHover,
  Text,
  useUserContext,
  WithIcon,
} from "src/components";
import config from "src/config";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

const NavAsideExplore = () => {
  const { user } = useUserContext();

  return (
    <Link
      href={config.vanaExploreURL}
      target="_blank"
      rel="noreferrer noopener"
      underline={false}
    >
      <Flex css={styledNavLinkHover} tw="items-center justify-end relative">
        <Image
          src="/images/aside-explore.png"
          layout="intrinsic"
          width="100"
          height="100"
          alt="Discover how to earn and learn at Vana Explore"
          priority
        />
        <Flex tw="absolute top-0 h-full items-center left-inset">
          <Stack tw="gap-1 flex-1 items-start">
            <Text variant="headingMeta" weight="bold">
              Explore
            </Text>
            <Text
              variant="note"
              weight="medium"
              tw="flex items-center gap-0.5"
              onClick={(_) =>
                heapTrackServerSide(user?.id, HEAP_EVENTS.CLICK_GIVE_FEEDBACK)
              }
            >
              <WithIcon
                suffix={<Icon icon="carbon:arrow-up-right" rotate="0deg" />}
              >
                Discover apps
              </WithIcon>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Link>
  );
};

export { NavAsideExplore };
