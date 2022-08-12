import { Icon } from "@iconify/react";
import Image from "next/image";
import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  Link,
  PopoverHelp,
  Stack,
  Text,
  TooltipDefault,
  WithIcon,
} from "src/components";
import config from "src/config";

import {
  navLinkActiveStyle,
  navLinkBoxStyle,
  navLinkHoverStyle,
  navLinkStyle,
  navLinkWithIconStyle,
} from "./Nav.css";

interface Props {
  children?: React.ReactNode;
}

// zinc-900 bg-fillSecondary
const outerStyle = [
  tw`relative flex flex-col h-full border-r border-opacity-20 border-separator`,
  // tw`before:(content-[' '] absolute top-px right-0 bottom-0 w-8 h-full bg-gradient-to-l from-gray-10)`,
];

const NavAside = ({ children }: Props) => (
  <div css={outerStyle}>
    {/* <div tw="px-inset">
        <div tw="flex items-center gap-2.5 h-navH">
          <VanaLogo boxSize="1.3em" tw="bg-label text-background" />
          <Text variant="footnoteMeta" weight="bold" tw="text-label">
            Vault
          </Text>
        </div>
      </div>
      <hr /> */}

    {/* MENU */}
    <Stack tw="pt-insetHalf gap-[2px]">
      <NextLink passHref href="/">
        <Text
          as="a"
          variant="base"
          weight="medium"
          css={[navLinkStyle, navLinkActiveStyle]}
        >
          <WithIcon
            prefix={<Icon icon="heroicons-solid:folder" height="0.85em" />}
          >
            My data
          </WithIcon>
        </Text>
      </NextLink>
      <div css={navLinkBoxStyle}>
        <TooltipDefault label="Coming soon">
          <Text
            variant="base"
            weight="medium"
            tw="text-labelTertiary cursor-default"
            css={navLinkWithIconStyle}
          >
            <WithIcon
              prefix={<Icon icon="heroicons-solid:clock" height="0.85em" />}
            >
              Access log
            </WithIcon>
          </Text>
        </TooltipDefault>
      </div>
      <div />
    </Stack>

    {/* BETA */}
    <div tw="mt-auto pb-insetDouble">
      <hr tw="border-separatorLight" />
      <Link
        href={config.vanaBetaFeedback}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex css={navLinkHoverStyle} tw="items-center justify-end relative">
          {/* <img src="/images/vana-ring.png" alt="Vana Ring" /> */}
          <Image
            src="/images/vana-keys-beta.png"
            layout="intrinsic"
            width="100"
            height="100"
            alt="Vana is in Beta. We'd love your feedback."
            priority
          />
          <Flex tw="absolute top-0 h-full items-center left-inset">
            <Stack tw="gap-1">
              <Text variant="headingMeta" weight="bold">
                Beta
              </Text>
              <Text
                variant="note"
                weight="medium"
                tw="flex items-center gap-1 "
              >
                <WithIcon
                  suffix={<Icon icon="carbon:arrow-up-right" rotate="0deg" />}
                >
                  Give feedback
                </WithIcon>
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Link>
      <hr tw="border-separatorLight" />

      {/* SUPPORT */}
      <Stack tw="pt-5">
        <div css={navLinkStyle}>
          <PopoverHelp />
        </div>
        <Link
          href={config.vanaPrivacyURL}
          target="_blank"
          rel="noopener noreferrer"
          underline={false}
        >
          <Text variant="note" weight="medium" css={navLinkStyle}>
            Security &amp; privacy
          </Text>
        </Link>
      </Stack>
    </div>

    {children}
  </div>
);

export { NavAside };
