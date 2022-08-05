import { Icon } from "@iconify/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  Link,
  PopoverHelp,
  Stack,
  Text,
  TooltipDefault,
  VanaLogo,
  WithIcon,
} from "src/components";

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

// zinc-900
const outerStyle = [
  tw`z-10 flex flex-col h-full border-r border-opacity-20 border-separator bg-fillSecondary`,
];

const NavAside = ({ children }: Props) => {
  const router = useRouter();
  console.log("path", router.pathname);

  return (
    // you can add className="dark" to the wrapper to make it dark
    <div css={outerStyle} className="">
      <div tw="px-inset">
        <div tw="flex items-center gap-2.5 h-navH">
          <VanaLogo boxSize="1.3em" tw="bg-label text-background" />
          <Text variant="footnoteMeta" weight="bold" tw="text-label">
            Vault
          </Text>
        </div>
      </div>
      <hr />

      {/* MENU */}
      <Stack tw="pt-inset gap-[2px]">
        <NextLink passHref href="/">
          <Text
            as="a"
            variant="base"
            weight="medium"
            css={[navLinkStyle, router.pathname === "/" && navLinkActiveStyle]}
          >
            <WithIcon
              prefix={<Icon icon="heroicons-solid:folder" height="0.85em" />}
            >
              My data
            </WithIcon>
          </Text>
        </NextLink>
        <Text
          variant="base"
          weight="medium"
          css={navLinkBoxStyle}
          tw="text-labelSecondary cursor-default"
        >
          <TooltipDefault label="Coming soon">
            <div css={navLinkWithIconStyle}>
              <WithIcon
                prefix={<Icon icon="heroicons-solid:clock" height="0.85em" />}
              >
                Access log
              </WithIcon>
            </div>
          </TooltipDefault>
        </Text>
        <div />
      </Stack>

      {/* BETA */}
      <div tw="mt-auto pb-insetx2">
        <hr />
        <Link
          href="https://www.google.com/search?q=something"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex css={navLinkHoverStyle} tw="items-center justify-end relative">
            {/* <img src="/images/vana-ring.png" alt="Vana Ring" /> */}
            <Image
              src="/images/vana-keys-beta.png"
              layout="intrinsic"
              width="128"
              height={128}
              alt="Vana is in Beta. We'd love your feedback."
              priority
            />
            <Flex tw="absolute top-0 h-full items-center left-inset">
              <Stack tw="gap-1">
                <Text variant="headingMeta" weight="bold">
                  Beta
                </Text>
                <Text
                  variant="base"
                  weight="medium"
                  tw="flex items-center gap-1"
                >
                  <WithIcon
                    suffix={
                      <Icon
                        icon="heroicons-outline:arrow-sm-right"
                        rotate="0deg"
                      />
                    }
                  >
                    Give us feedback
                  </WithIcon>
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Link>
        <hr />

        {/* SUPPORT */}
        <Stack tw="pt-5">
          <div css={navLinkStyle} tw="px-inset">
            <PopoverHelp />
          </div>
          <Link
            href="https://www.google.com/search?q=something"
            target="_blank"
            rel="noopener noreferrer"
            underline={false}
          >
            <Text
              variant="note"
              weight="medium"
              css={[navLinkStyle, tw`text-labelSecondary`]}
            >
              Data security
            </Text>
          </Link>
        </Stack>
      </div>

      {children}
    </div>
  );
};

export { NavAside };
