import { PopupButton } from "@typeform/embed-react";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  Stack,
  styledNavLinkHover,
  Text,
  useUserContext,
} from "src/components";
import config from "src/config";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

const NavAsideBetaTypeform = () => {
  const { user } = useUserContext();

  return (
    <PopupButton
      id="oFOUdaW6"
      tw="w-full block"
      size={75}
      medium="demo-test"
      hidden={{ foo: "foo value", bar: "bar value" }}
    >
      <Flex css={styledNavLinkHover} tw="items-center justify-end relative">
        <Image
          src="/images/aside-feedback.png"
          layout="intrinsic"
          width="100"
          height="100"
          alt="Vana is in Beta. We'd love your feedback."
          priority
        />
        <Flex tw="absolute top-0 h-full items-center left-inset">
          <Stack tw="gap-1 flex-1 items-start">
            <Text variant="headingMeta" weight="bold">
              Beta
            </Text>
            <Text
              variant="note"
              weight="medium"
              tw="flex items-center gap-0.5"
              onClick={(_) =>
                heapTrackServerSide(user?.id, HEAP_EVENTS.CLICK_GIVE_FEEDBACK)
              }
            >
              Give feedback
              {/* <WithIcon
                suffix={<Icon icon="carbon:arrow-up-right" rotate="0deg" />}
              >
                Give feedback
              </WithIcon> */}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </PopupButton>
  );
};

export { NavAsideBetaTypeform };
